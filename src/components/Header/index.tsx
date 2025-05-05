import Link from "next/link";
import Navigation from "@/components/Navigation";
import SocialMedia from "@/components/Social";
import styles from './styles.module.scss';

const Header = () => {
  return (
    <header id="intro" className={`lg:sticky lg:h-screen top-[0px] lg:w-[45%] xs:w-full mr-auto flex-wrap items-center ${styles.header}`}>
      <div className="top-side w-full">
        <Link href={'/'}>
          <h1 className="text-5xl font-bold contrast-color" >Alexandr Semizbayev</h1>
        </Link>
        <h3 className="text-xl font-semibold mt-3 contrast-color">Front End Engineer</h3>
        <h5 className="mt-4 lg:max-w-[80%] md:w-full">I’m passionate about building web apps that are not just functional, but fast, beautiful, and user-friendly.</h5>
        <div className="hidden lg:block">
          <Navigation/>
        </div>
      </div>
      <div className="bottom-side mt-6 flex lg:h-[30%] items-end">
        <SocialMedia/>
      </div>
    </header>
  );
}

export default Header;