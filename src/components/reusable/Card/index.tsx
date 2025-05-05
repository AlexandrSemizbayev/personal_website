import styles from './styles.module.scss';
import { ICardData } from './generator';
import { lazy } from 'react';
import Link from 'next/link';

interface Props extends React.PropsWithChildren {
  data: ICardData,
}
const Chip = lazy(() => import('../Chip'))

const Card: React.FC<Props> = ({data, children}) => {
  return (
    <article className={`${styles['card-wrap']} py-4 mt-12 top-0 relative flex-wrap lg:flex-nowrap`}>
      <div className={`${styles['background']}`}></div>
          {children}
        <div className={`${styles.block} z-10`}>
          <h2 className={`${styles.title} text-lg font-semibold contrast-color`} aria-label={data.title}>
            {data.title}&nbsp;
            {
              data.isLink
                ? <Link href={data.link} className="link-element">{data.linkTitle}</Link>
                : data.linkTitle
            }
          </h2>
          <h3 className={`${styles['sub-header']} text-md`} aria-label="Senior Frontend Engineer">
            {data.subHeader}
          </h3>
          <p className={`${styles['description']} text-sm mt-3`}>
            { data.description }
          </p>
          <div className={`${styles.chips} mt-3 flex flex-wrap`}>
            {
              data.chips.map(
                (chip, idx) => <div className="mt-2" key={idx}><Chip text={chip.title} link={chip.link}/></div>
              )
            }
            
          </div>
        </div>
      </article>
  )
};

export default Card;