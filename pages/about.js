import {DocHead} from "../components";
import Image from 'next/image';
import {Banner, SignUp, WhyChooseUs, HeaderSection} from "../components/Sections";

import {CheckList} from "../components";

const OurMissionSection = () => {
   return <section className='bg-white text-black flex py-20'>
      <div className='w-1/2'>
         <div className='text-center w-full pt-[60px]'>
            <h1 className='text-secondary text-lg'>OUR MISSION</h1>
            <h2 className='text-2xl'>YOUR GOALS, OUR PURPOSE</h2>
         </div>

         <div className='pl-10 py-10 space-y-5'>
            <p>
               Our mission is simple. Provide you with critical support and accountability that empowers you to set
               the
               right health, wellness, and life goals so we can crush them together.
            </p>
            <p>
               At PrimeTime Training we we take a holistic approach that delivers sustainable results for our
               members.
               By educating about proper exercise, nutrition, mindset, and mobility, we ensure that our clients will
               not
               only get into shape but stay there long after they are done training at our facility.
            </p>
            <p>
               Ultimately, your goals are our purpose and our pride is founded in the relationships we’ve built, the
               lives we’ve positively changed, and the support we’ve given back to the local community.
            </p>
            <p>
               We welcome any and all who are willing to challenge themselves. Those who are fed up with the status
               quo
               and will not let excuses limit them. We are ready tackle physical/mental challenges together with you.
            </p>
            <p>
               We truly want to be the last trainer you ever need. We want you to have the tools and education to
               finally take control of your health and maintain it for the rest of your life!
            </p>
         </div>

      </div>
      <div className='w-1/2 p-20'>
         <CheckList
            list={[
               'Custom Program Development & Scheduling',
               'Personal Training, Lifestyle and Nutrition Coaching',
               'Goals and Motivators Assessment',
               'Functional Movement Screening',
               'Strive to Be Better Every Day!'
            ]}

            className='p-8'
         />
      </div>
   </section>
}

const AboutUsSection = () =>
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

const About = () => {
   return <>
      <DocHead title='About - PrimeTime Personal Training'/>

      <HeaderSection
         title='ABOUT US'
         summary={`We get to work with people who are ready for a change and fed up with the status quo.`}
         btnTitle='CONTACT US'
         btnHref='/contact'
      />

      <WhyChooseUs/>

      {/*<AboutUsSection />*/}

      <OurMissionSection />
      <SignUp/>

      <Banner/>
   </>
}

export default About;