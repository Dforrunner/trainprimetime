import Head from 'next/head'
import {Nav, Footer, HeadBase} from "../components";
import Link from 'next/link'
import {Banner, BeforeAndAfters, Services, Testimonials, Welcome, WhyChooseUs} from "../components/HomeSections";

const Home = () => {
   return (
      <>
         <Head>
            <title>
               PrimeTime Personal Training - The Best Fitness Training In St. Peters &amp; Creve Coeur, MO
            </title>
            <HeadBase/>
         </Head>


         <Nav/>

         <header className={`w-full h-[400px] md:h-[50vw] md:max-h-[750px] 
                            bg-[url("/header1.png")] bg-no-repeat bg-cover bg-center`}
         >
            <div className='w-full h-full flex flex-col justify-center bg-[rgba(0,0,0,0.2)] md:bg-transparent p-10'>
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
                      <Link href='/join'>CHOOSE LOCATION</Link>
                  </span>
               </div>

            </div>
         </header>

         <WhyChooseUs/>
         <Welcome/>
         <Services/>
         <BeforeAndAfters/>
         <Testimonials/>
         <Banner/>

         <Footer/>
      </>
   )
}

export default Home;