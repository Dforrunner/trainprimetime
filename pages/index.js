import {DocHead} from "../components";
import Link from 'next/link'
import {Banner, BeforeAndAfters, ServicesSection, Testimonials, Welcome, WhyChooseUs} from "../components/Sections";

const Home = ({data}) => {
   console.log({data})
   return (
      <>
         <DocHead title='PrimeTime Personal Training - The Best Fitness Training In St. Louis'/>

         <header className={`w-full h-[400px] md:h-[60vw] md:max-h-[800px] 
                            bg-[url("/header1.png")] bg-no-repeat bg-cover bg-center`}
         >
            <div className='w-full h-full flex flex-col justify-center p-10 relative'>

               <div
                  className={`clip-path-polygon-[0_0,65%_0,_35%_100%,_0_100%] 2xl:clip-path-polygon-[0_0,60%_0,_40%_100%,_0_100%]
                              top-0 left-0 h-full w-full bg-secondary absolute`}
               />

               <h1 className={`animate slideInLeft text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl 
                               drop-shadow-[0_0_5px_black] md:drop-shadow-none`}>
                  LOOK FORWARD TO
                  <span className={`text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl md:text-primary 
                                    block py-1 md:py-3 font-medium`}>
                     TRAINING
                  </span>
                  A NEW YOU
               </h1>
               <div className='animate slideInUp h-[80px] mt-10'>
                  <span className='glow-btn text-white md:text-primary'>
                      <Link href='/join'>BECOME A MEMBER</Link>
                  </span>
               </div>

            </div>
         </header>

         <WhyChooseUs/>
         <Welcome/>
         <ServicesSection/>
         <BeforeAndAfters/>
         <Testimonials/>
         <Banner/>

      </>
   )
}

// export const getStaticProps = async () => {
//    const data = await prisma.home.findFirst()
//    await prisma.$disconnect();
//    // Pass data to the page via props
//    return { props: { data } }
// }

export default Home;