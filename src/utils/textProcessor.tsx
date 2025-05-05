type TComponentTag = keyof typeof nextComponents;

type IPropsMap = {
  img: ComponentProps<typeof nextComponents.img>;
  a: ComponentProps<typeof nextComponents.a>;
};
import dynamic from 'next/dynamic';
import {reusable} from "@/data";
import {
  JSX,
  createElement,
  ReactNode,
  ComponentProps,
  FunctionComponent,
} from 'react';

const nextComponents = {
  img:
    dynamic(
    () => import('next/image')
  ),
  a:
    dynamic(
      () => import('next/link')
    ),
};

// Tags that shouldn't have children
const nonExtendableTags: Record<string, boolean> = {
  img: true,
  input: true,
  br: true,
  hr: true,
  meta: true,
  link: true,
};

let elementsCount = 0;

function wrapWithTag<T extends TComponentTag>(
  el: IElement<T, IPropsMap[T]> | IElement,
  content?: ReactNode
): JSX.Element {
  const props = { ...el.attrs, key: elementsCount++ };

  if (el.tag in nextComponents) {
    const tag = el.tag as TComponentTag;
    const ComponentModule = nextComponents[tag] as FunctionComponent<IPropsMap[TComponentTag]>;
    return <ComponentModule {...(el.attrs as IPropsMap[TComponentTag])} key={props.key}>{content} </ComponentModule>;
  }

  if (nonExtendableTags[el.tag]) {
    return createElement(el.tag, props);
  }
  return createElement(el.tag, props, content);
}

function applyReusable(node: IElement) {
  const regExp = /\[\[\s{0,}(?<key>\w{0,})\((?<text>[^)]+)\)\s{0,}\]\]/gmi;
  Array.from((node.text||'').matchAll(regExp)).forEach((match) => {
    const reusableID = match[1];
    const key = match.groups?.key || '';
    const text = match.groups?.text || '';
    const reusableElement = key in reusable ? reusable[key as keyof typeof reusable](text) : undefined;
    const newElementId =  `${reusableID}${text.replace(/\W/gmi, '').split(' ').join('')}`;
    if(!node.children) {node.children = {}};
    if(node.text) {
      node.text = node.text?.replace(match[0], `{{${newElementId}}}`);
    }
    const tmp = {
      [newElementId]: reusableElement as IElement
    }
    Object.assign(node.children, tmp);
  });
}


export function findElements(node: IElement): JSX.Element {
  if (!node) return <></>;
  applyReusable(node);
  const innerContent = (node.text || '');
  const rawMarkup = innerContent.matchAll(/{{\s{0,}(?<key>[A-Za-z0-9]{0,})\s{0,}}}/gm);
  const matches = Array.from(rawMarkup);
  if (!matches.length) {
    if (node.children) {
      const children = Object.values(node.children).map(findElements);
      return wrapWithTag(node, children);
    }
    return wrapWithTag(node, innerContent);
  }

  const subElements: Record<string, ReactNode> = {};

  matches.forEach(([match, key]) => {
    if (node.children && node.children[key]) {
      subElements[match] = findElements(node.children[key]);
    }
  });

  const regexp = new RegExp(`(${Object.keys(subElements).join('|')})`, 'gm');
  const separated = innerContent.split(regexp).map((part) =>
    subElements[part] ? subElements[part] : part
  );

  return wrapWithTag(node, separated);
}
