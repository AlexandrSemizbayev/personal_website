import Header from "@/components/Header";
import About from '@/components/About';
// import SocialMedia from "@/components/Social";
// import Experience from "@/components/Experience";
// import { AboutComponent } from "@/utils/textProcessor";
import { HomeClientSideComponent } from "@/components/ClientSide";
import { GenerateCards } from '@/components/reusable/Card/generator';
import { data } from "@/data";




export default function Home() {
  // console.log('tP', textProcessor)
  const userData = data;
  return (
    <div className="relative">
      
      <div style={{zIndex: 1}} className="flex space-between flex-wrap">
        <Header/>

        <div className="lg:w-1/2 xs:w-full">
          <About data={userData.about} />
          <section id="experience" className='relative'>
            <GenerateCards flag='experience' arr={userData.experience}/>
          </section>
          {/* <AboutComponent/> */}
          {/* <Experience data={userData.experience}/> */}
        </div>

        
      </div>
      <HomeClientSideComponent/>
      <div className="inline"></div>
    </div>
  );
}
