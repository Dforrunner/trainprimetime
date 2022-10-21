import {HeaderSection} from "../../components/Sections";
import {CheckList} from "../../components";


const PersonalTraining = () => {
   return <div>
      <HeaderSection
         title='1-ON-1 TRAINING'
         summary={`Our trainer will design personalized strength and conditioning programs
                     unique to your fitness goals and needs.`}
         btnTitle='START TODAY'
         btnHref='/join'
         bgImg='/privateTrainer.jpg'
      />

      <section className='w-full m-h-[400px] bg-white text-black pb-20'>
         <div className='text-center w-full pt-[60px]'>
            <h1 className='text-secondary text-lg'>PRIVATE TRAINING</h1>
            <h2 className='text-2xl'>WHAT CAN WE HELP YOU ACHIEVE?</h2>
         </div>

         <div className='flex p-20'>
            <CheckList
               list={[
                  'Lose weight',
                  'Build muscle ',
                  'Train for a specific sport',
                  'Recover from and help prevent injuries',
                  'Improve mobility, flexibility, and cardiovascular endurance',
                  'Help with your diet and nutritional needs',
               ]}
               className='p-5'
            />

            <CheckList
               list={[
                  'Break through fitness plateaus',
                  'Keep you on track with weekly scheduled appointments',
                  'Help you identify and improve muscle imbalances',
                  'Help you progress at a pace customized specifically for you',
                  'Track your progress to show the results of your hard work',
               ]}
               className='p-5'
            />
         </div>


      </section>
   </div>
}

export default PersonalTraining;