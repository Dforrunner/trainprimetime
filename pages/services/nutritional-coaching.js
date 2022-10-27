import {HeaderSection} from "../../components/user/Sections";

const NutritionalCoaching = () => {
   return <div>
      <HeaderSection
         title='NUTRITIONAL COACHING'
         summary={`Learn about nutrition`}
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
               What is the best nutrition plan to achieve your specific goals? How can you optimize your nutrition to
               match your workout intensity and schedule? What is the best diet to lean and tone? These are the kinds of
               questions that we work with our clients to answer every day.
            </p>
            <p>
               The reality is, what you eat has far more impact on your health and how you look than does your workout
               strategy. And unfortunately, what constitutes a nutrition “fact” is often very difficult to figure out.
               Too much misinformation and psudo-science. Enough is enough.
            </p>
            <p>
               Your coach will provide reliable, evidence based nutritional consulting in an easy-to-understand format.
               No fads or starvation plans – only solid, individualized planning to get you back and track and help you
               stay there.
            </p>
            <p>
               Grab some time with us for a quick chat and together we determine what we can offer to help you look and
               feel like you deserve.
            </p>
         </div>

      </section>
   </div>
}

export default NutritionalCoaching;