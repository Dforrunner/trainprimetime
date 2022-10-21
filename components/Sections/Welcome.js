import {SliderLeftBtn} from "../Buttons";
import Image from "next/image";

const Welcome = () => {
   return <section className='w-full h-[580px] bg-white text-primary relative overflow-hidden'>
      <div
         className={`w-full h-full py-[100px] px-8 md:px-10 xl:px-20 absolute bg-gradient-to-r 
                     from-white via-white to-[rgba(255,255,255,0.5)] md:to-transparent z-[1]`}>
         <h1 className='lg:text-4xl text-2xl'>WELCOME TO PRIMETIME</h1>
         <div className='w-full md:w-1/2 text-[15px] md:text-[16px] mb-5'>
            <p className=' mt-5'>
               We get to work with people who are ready for a change and fed up with the status quo. Where other
               programs may have failed in the past, we take a holistic approach that delivers sustainable results
               for our members. By educating in exercise, nutrition, mindset, and mobility, we ensure that our
               clients will not only get into shape but stay there long after they are done training at our
               facility.
            </p>
            <p className='mt-5'>
               We truly want to be the last trainer you ever need. We want you to have the tools and education to
               finally take control of your health and maintain it for the rest of your life!
            </p>
         </div>


         <SliderLeftBtn href='/about'/>
      </div>

      <div className='w-[70%] float-right mr-[-150px] h-full relative'>
         <Image src='/pt_group.jpeg' alt='Group Picture' layout='fill' objectFit='cover' objectPosition='right'/>
      </div>
   </section>
}

export default Welcome;