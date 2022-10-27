import {HeaderSection} from "../../components/user/Sections";

const SemiPrivateTraining = () => {
   return <div>
      <HeaderSection
         title='SEMI-PRIVATE TRAINING'
         summary={`Work in a small group following a customized program`}
         btnTitle='START TODAY'
         btnHref='/join'
         bgImg='/semiPrivateTraining.jpg'
      />

      <section className='w-full h-[400px] bg-white text-primary'>
         <div className='text-center w-full pt-[60px]'>
            <h1 className='text-secondary text-lg'>SEMI-PRIVATE TRAINING</h1>
            <h2 className='text-2xl'>DREAMS AND TEAMS WORK TOGETHER</h2>
         </div>

         <p className='p-20'>
            This is a small group of up to 6 people following a customized program at a deliberate pace. We keep the
            groups small to allow the trainer to provide each individual the necessary amount of coaching and
            instruction while saving you up to 60% on the cost of having a trainer. Working in a small group can add
            extra motivation, increase the level of accountability, and provide some gym camaraderie. If you are looking
            to get fit and don’t mind making a couple of gym buddies along the way check out our small group training
            session.
         </p>
      </section>
   </div>
}

export default SemiPrivateTraining;