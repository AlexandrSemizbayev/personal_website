import Link from "next/link";
import styles from './styles.module.scss'

const defaultAttrs = {
  width:24,
  height:24,
  className: styles.icon,
};

const links = [
  {
    title: 'linkedIn',
    link: 'https://www.linkedin.com/in/alexandrsemizbayev/',
    Logo: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        {...defaultAttrs}
      >
        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
      </svg>
    )
  },
  {
    title: 'GitHub',
    link: 'https://github.com/',
    Logo: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 18 18"
        {...defaultAttrs}
      >
        <path d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"/>
      </svg>
    )
  },
  {
    title: 'Codepen',
    link: 'https://codepen.io',
    Logo: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        stroke="currentColor"
        strokeWidth="2"
        {...{height: defaultAttrs.height, width: defaultAttrs.width}}
      >
        <path d="M3.06 41.732L32 60.932l28.94-19.2V22.268L32 3.068l-28.94 19.2zm57.878 0L32 22.268 3.06 41.732m0-19.463L32 41.47l28.94-19.2M32 3.068v19.2m0 19.463v19.2" strokeWidth="5"></path>
      </svg>
    ),
  }
];

const SocialMedia = () => {
  return(
    <>
    <div className="flex">
      {
        links.map(({title,link,Logo}, idx) => {
          return (
          <div key={link+idx} className="hover:text-slate-200 mr-4">
            <Link href={link} target="_blank">
              <span className="sr-only">{title}</span>
              <Logo/>
            </Link>
          </div>
        )})
      }
    </div>
    </>
  )
}

export default SocialMedia;