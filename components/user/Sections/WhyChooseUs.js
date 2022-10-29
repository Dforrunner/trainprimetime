import {Dumbbell, Heart, Muscles, NutritionPlan} from "../Icons";

const Card = ({icon, title, text}) => {
   return <div className='md:w-1/4 sm:w-1/2 h-1/2 flex flex-col justify-center mt-10 items-center text-white'>
      <div className={`w-[80px] h-[80px] rounded-full bg-[rgb(50,50,50)] hover:bg-[rgb(30,30,30)] flex 
                       justify-center items-center p-5 hover:drop-shadow-secondary`}>
         {icon}
      </div>
      <h3 className='font-bold text-md p-4 text-center '>{title}</h3>
      <p className='text-center text-sm w-3/4'>{text}</p>
   </div>
}

const WhyChooseUs = () => {
   return <section className='w-full min-h-[480px] bg-primary'>
      <div className='text-center w-full pt-[60px]'>
         <h1 className='text-secondary text-lg'>WHY CHOOSE US?</h1>
         <h2 className='text-2xl text-white'>PUSH YOUR LIMITS FORWARD</h2>
      </div>

      <div className='w-full h-full flex flex-row flex-wrap lg:px-20 justify-center py-5'>
         <Card
            icon={<Muscles/>}
            title={'Take Control Of Your Future'}
            text={'Achieve your fitness and health goals and have fun doing it.'}
         />

         <Card
            icon={<Dumbbell/>}
            title={'Our Equipment'}
            text={'Safe and effective modern equipment for better training.'}
         />

         <Card
            icon={<NutritionPlan/>}
            title={'Nutrition Coaching'}
            text={'Nutritional consultation, education and planning for all of our clients.'}
         />

         <Card
            icon={<Heart/>}
            title={'Personalized Plans'}
            text={'Customized training program tailored for you and your current fitness abilities'}
         />
      </div>
   </section>
}

export default WhyChooseUs;