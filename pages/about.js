import {Footer, Nav} from "../components";
import {SliderLeftBtn} from "../components/Buttons";
import Image from 'next/image';
import Head from "next/head";
import {Banner, SignUp, WhyChooseUs} from "../components/HomeSections";

const TrainerCard = () => {
   return <div className='w-[300px] h-[400px] bg-white group  relative'>
      <div className='w-full h-full relative'>
         <Image
            src={'/placeholderTrainer.jpg'}
            alt={''}
            layout='fill'
            objectFit='cover'
            objectPosition='center'
         />
      </div>

      <div className={`transition-all duration-500 ease-in-out h-[50px] w-full group-hover:h-[55%] 
                       absolute bottom-0 z-[2] overflow-hidden `}>

         <div className='h-[50px] bg-secondary w-full clip-path-polygon-[0_0,80%_0,_100%_100%,_0_100%]'>
            <h3 className='w-full pl-4 h-full flex items-center text-xl'>Full name</h3>
         </div>

         <p className='text-sm p-4 bg-[rgba(0,0,0,0.8)] h-full'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
         </p>
      </div>
   </div>
}

const About = () => {
   return <>
      <Head>
         <title>
            About - PrimeTime Personal Training
         </title>
      </Head>

      <Nav/>

      <header className='w-full h-[500px] bg-[url("/dumbells.png")] bg-cover bg-center'>
         <div className='w-full h-full bg-[rgba(0,0,0,0.5)] flex flex-col justify-center px-[100px]'>
            <h1
               className='text-4xl text-secondary font-bold relative font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-[155px] before:origin-left before:scale-x-0 before:bg-secondary before:transition hover:before:scale-100'>
               About us
            </h1>
            <p className='pt-2 pb-10'>
               We get to work with people who are ready for a change and fed up with the status quo.
            </p>

            <div className='w-[200px]'>
               <SliderLeftBtn title='CONTACT US' href='/contact'/>
            </div>

         </div>

      </header>

      <WhyChooseUs/>

      <section className='w-full flex flex-row h-[580px] bg-white text-black'>

         <div className='w-1/2 h-full relative'>
            <Image
               src={'/groupTraining.jpeg'}
               alt='Training'
               layout='fill'
               objectFit='cover'
               objectPosition='left'
            />
         </div>

         <div className='w-1/2 h-full'>
            <div className='text-center w-full pt-[60px]'>
               <h1 className='text-secondary text-lg'>ABOUT US</h1>
               <h2 className='text-2xl'>WHAT MAKES US DIFFERENT?</h2>
            </div>

            <p className='px-10 py-5'>
               We get to work with people who are ready for a change and fed up with the status quo. Where other
               programs may have failed in the past, we take a holistic approach that delivers sustainable results for
               our members. By educating in exercise, nutrition, mindset, and mobility, we ensure that our clients will
               not only get into shape but stay there long after they are done training at our facility.
            </p>

            <p className='px-10'>
               We truly want to be the last trainer you ever need. We want you to have the tools and education to
               finally take control of your health and maintain it for the rest of your life!
            </p>
         </div>

      </section>

      <section className='w-full m-h-[500px] bg-primary text-white pb-10'>
         <div className='text-center w-full pt-[60px]'>
            <h1 className='text-secondary text-lg'>OUR TEAM</h1>
            <h2 className='text-2xl'>TRAIN WITH EXPERTS</h2>
         </div>

         <div className='flex flex-row justify-evenly gap-5 px-[100px] py-10 flex-wrap'>
            <TrainerCard/>
            <TrainerCard/>
            <TrainerCard/>
         </div>
      </section>


      <SignUp />

      <Banner/>
      <Footer/>
   </>
}

export default About;