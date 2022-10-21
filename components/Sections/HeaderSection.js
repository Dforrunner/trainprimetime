import Image from "next/image";
import {SliderLeftBtn} from "../Buttons";

const HeaderSection = ({title, summary, btnTitle, btnHref, bgImg = '/dumbells.png'}) =>
   <header className='w-full h-[500px] relative'>

      <div className='w-full h-full relative'>
         <Image src={bgImg} alt='' layout='fill' objectFit='cover' objectPosition='center' priority={true}/>
      </div>

      <div
         className='w-full h-full bg-[rgba(0,0,0,0.6)] flex flex-col justify-center px-[100px] absolute top-0 right-0'
      >
         <h1
            className={`text-4xl text-secondary font-bold relative font-medium before:absolute before:-bottom-1 
                     before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-secondary 
                     before:transition hover:before:scale-100 drop-shadow`}>
            {title}
         </h1>

         <p className='pt-2 pb-10'>
            {summary}
         </p>

         <div className='w-[200px]'>
            <SliderLeftBtn title={btnTitle} href={btnHref}/>
         </div>
      </div>
   </header>

export default HeaderSection;