import { GenerateCards } from '../reusable/Card/generator';

const Experience: React.FC<{data: Array<IExperience>}> = ({data}) => {
  return (
    <section id="experience" className='relative'>
      <GenerateCards flag='experience' arr={data}/>
    </section>
  )
};

export default Experience;

// {
//   <GenerateCards flag='experience' arr={data}/>
//   data.map(
//     ({ timeline, company, role, additionalRole, description, technologies }, index) => <>
//       <div key={index} className={`${styles.experience} flex flex-wrap px-4 py-4 mt-12 sticky top-0 left-0 w-[120%] ml-[-10%]`}>
//         <span className="date-range w-1/5 font-semibold mt-1" aria-label="2020-2023">
//           {/* 2020 - 2023 */}
//           {timeline.from} - {timeline.to}
//         </span>
//         <div className={`${styles['job-block']} w-4/5`}>
//           <h2 className={`${styles.title} text-lg font-semibold contrast-color`} aria-label="Lead Engineer at Chocofood.kz">
//             {additionalRole ? `${additionalRole} . ` : ''} {company.title}
//             {/* Lead Engineer at Chocofood.kz */}
//           </h2>
//           <h3 className={`${styles['job-position']} text-md`} aria-label="Senior Frontend Engineer">
//             {/* Senior Frontend Engineer */}
//             {role}
//           </h3>
//           <p className={`${styles['job-description']} text-sm mt-3`}>
//             { description }
//             {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, non. Quos eveniet ea ipsa minima id. Consectetur quae aliquid quo tempore et veritatis a, amet dolorem neque magni inventore non voluptatum, nesciunt itaque excepturi dolor fugiat animi. Nihil explicabo dolorum, in sed sit aspernatur soluta ex dignissimos totam dolores perferendis sunt quisquam, quo nostrum cumque magnam dicta. Sit id ex et inventore doloribus quis quas? Tempore quo mollitia libero pariatur. Aliquam culpa, saepe ad ex voluptatum dolores autem vitae, magni perspiciatis illo accusamus aspernatur tenetur? Cum incidunt voluptate enim aperiam sint. Aliquam deserunt quibusdam veritatis, iste velit omnis ratione soluta! */}
//           </p>
//           <div className={`${styles.technologies} mt-3 flex flex-wrap`}>
//             {
//               technologies.map(
//                 (tech, idx) => <div className="mt-2" key={idx}><Chip text={tech.title} link={tech.link}/></div>
//               )
//             }
            
//           </div>
//         </div>
//       </div>
//   </>)
// }


{/* <div className={`${styles.experience} flex flex-wrap px-4 py-4 mt-12 sticky top-0 left-0 w-[120%] ml-[-10%]`}>
        <span className="date-range w-1/5 font-semibold mt-1" aria-label="2020-2023">
          2020 - 2023
        </span>
        <div className={`${styles['job-block']} w-4/5`}>
          <h2 className={`${styles.title} text-lg font-semibold contrast-color`} aria-label="Lead Engineer at Chocofood.kz">
            Lead Engineer at Chocofood.kz
          </h2>
          <h3 className={`${styles['job-position']} text-md`} aria-label="Senior Frontend Engineer">
            Senior Frontend Engineer
          </h3>
          <p className={`${styles['job-description']} text-sm mt-3`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, non. Quos eveniet ea ipsa minima id. Consectetur quae aliquid quo tempore et veritatis a, amet dolorem neque magni inventore non voluptatum, nesciunt itaque excepturi dolor fugiat animi. Nihil explicabo dolorum, in sed sit aspernatur soluta ex dignissimos totam dolores perferendis sunt quisquam, quo nostrum cumque magnam dicta. Sit id ex et inventore doloribus quis quas? Tempore quo mollitia libero pariatur. Aliquam culpa, saepe ad ex voluptatum dolores autem vitae, magni perspiciatis illo accusamus aspernatur tenetur? Cum incidunt voluptate enim aperiam sint. Aliquam deserunt quibusdam veritatis, iste velit omnis ratione soluta!
          </p>
          <div className={`${styles.technologies} mt-3 flex flex-wrap`}>
            <Chip
              text='test text'
            />
            <Chip
              text='test link'
              link="wikipedia.org"
            />
            
          </div>
        </div>
      </div> */}