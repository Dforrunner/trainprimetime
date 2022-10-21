import { useRouter } from 'next/router';
import Trainer from "../../components/Sections/Trainer";

const Location = () => {
   const router = useRouter()
   const { location } = router.query

   return <div>
      <h1>Location {location}</h1>
      <Trainer />

      <div className='p-20 bg-white w-full'>
         <div className="text-container" dangerouslySetInnerHTML={{ __html:`<iframe src="https://primetimepersonaltraining.sites.zenplanner.com/calendar.cfm?frame=true" style="width: 100%; height: 1408px;" onload="window.scroll(0,0);" frameborder="0" id="idZenPlannerFrame" height="1408px">
</iframe>`}} />
      </div>
   </div>
}



export default Location;