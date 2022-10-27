import {HeaderSection} from "../../components/user/Sections";

const Accountability = () => {
   return <div>
      <HeaderSection
         title='ACCOUNTABILITY'
         summary={`Work in a small group following a customized program`}
         btnTitle='START TODAY'
         btnHref='/join'
         bgImg='/nutrition.jpeg'
      />

      <section className='w-full m-h-[400px] bg-white text-primary'>
         <div className='text-center w-full pt-[60px]'>
            <h1 className='text-secondary text-lg'>SEMI-PRIVATE TRAINING</h1>
            <h2 className='text-2xl'>DREAMS AND TEAMS WORK TOGETHER</h2>
         </div>

         <div className='p-20 space-y-4'>
            <p>
               Through the years of working one on one with clients, listening to their wants and needs, hearing the
               excuses, and seeing their struggles… we have created the ULTIMATE body and life transformation program to
               shatter all false beliefs, struggles and battles you face as you start (and conquer) your transformation
               story.
            </p>
            <p>
               Now, we have taken those exact same results driven programs that we do in our gym, and now offer them
               remotely and online to people JUST LIKE YOU. And the best part is, YOU HAVE YOUR OWN PERSONAL COACH!
            </p>
            <p>
               Yes a real person you will be in contact with constantly! Schedule a quick call below to have one of our
               amazing team of trainers be your personal coach. We have your back and YOUR goals as our first priority!
            </p>
         </div>
      </section>
   </div>
}

export default Accountability;