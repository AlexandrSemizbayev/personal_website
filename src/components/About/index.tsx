import { findElements } from "@/utils/textProcessor"
const About: React.FC<{data: TUserInfo['about']}> = ({data}) => {
  const AboutComponent = () => findElements(data);
  return(
    <section id="about">
      <AboutComponent />
      </section>
  )
}

export default About