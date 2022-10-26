import Trainer from "../../components/Sections/Trainer";
import {Banner} from "../../components/Sections";


const Location = ({title, schedule}) => {
   return <div>
      <div className='px-20 bg-white w-full'>
         <h1 className='text-black text-2xl text-center py-10'> PrimeTime {title} Schedule</h1>

         <div className='text-container' dangerouslySetInnerHTML={{__html: schedule}}/>
      </div>

      <Trainer/>
      <Banner />npm i next@latest react@latest react-dom@latest eslint-config-next@latest
   </div>
}

export const getServerSideProps = async (context) => {
   const {location} = context.params;
   console.log({location})
   const loc = {
      'st-peters': {
         title: 'St. Peters',
         schedule: `<iframe src='https://primetimepersonaltraining.sites.zenplanner.com/calendar.cfm?frame=true' style='width: 100%; height: 1408px; overflow: hidden;' onload='window.scroll(0,0);' frameborder='0' id='idZenPlannerFrame' scrolling='no' height='1408px'>
                     </iframe>`
      },
      'creve-coeur': {
         title: 'Creve Couer',
         schedule: `<iframe src='https://trial-F32D97C1.zenplanner.com/zenplanner/portal/calendar.cfm?frame=true' style='width: 100%; height: 1348px; overflow: hidden;' onload='window.scroll(0,0);' frameborder='0' id='idZenPlannerFrame' scrolling='no' height='1348px'>
                     </iframe>`
      }
   }

   if(!Object.keys(loc).includes(location))
      return {
         notFound: true
      }

   return {
      props: {
         title: loc[location].title,
         schedule: loc[location].schedule
      }
   }
}

export default Location;