declare global {
  interface ObjectConstructor {
    keys<T>(o: T): Array<keyof T>;
  }

  interface String {
    toKebabCase():string;
  }

  interface IExperience {
    timeline: {
      from: number | string,
      to: number | string,
    },
    company: {
      title: string,
      link?: string,
    },
    role: string,
    location: string,
    description: string,
    technologies: Array<{
      title: string,
      link?: string,
    }>
  }
  
  type TUserInfo = {
    about: IElement,
    experience: Array<IExperience>
  }

  interface IElement <T extends string = string,K = { [key:string]: string|boolean|number|{ [key:string]: string|number } }>{
    text: string | null,
    tag: T,
    attrs?: K ,
    children?: {
      [key: string]: IElement
    } | null,
  }
}

export default global;