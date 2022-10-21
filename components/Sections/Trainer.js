import Image from "next/image";

const TrainerCard = () =>
   <div className='w-[300px] h-[400px] bg-white group relative rounded overflow-hidden'>
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

const Trainer = () =>
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

export default Trainer;