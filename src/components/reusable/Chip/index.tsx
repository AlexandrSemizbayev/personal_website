import Link from 'next/link';
import styles from './styles.module.scss';
interface Props {
  text: string,
  link?: string,
}
const Chip:React.FC<Props>= ({text, link}) => {
  return (
    <div className={`${styles.chip} py-1 px-4 flex rounded-3xl mr-1.5`}>
      {
        link
          ?
            <Link href={link} target='_blank' className={'link-element'}>
              <span className={`${styles['chip-text']} font-bold text-sm`} aria-label={text}>
                { text }
              </span>
            </Link>
          :
          <span className={`${styles['chip-text']} font-bold text-sm`} aria-label={text}>
            { text }
          </span>
        
      }
    </div>
  )
};

export default Chip;