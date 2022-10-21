import { useRouter } from 'next/router';
import {GoogleMaps} from "../../components/Sections";

const Location = () => {
   const router = useRouter()
   const { location } = router.query

   return <>
      <div className='w-full min-h-[500px] bg-white text-black'>
         <h1 className='text-center text-3xl pt-10'>OUR LOCATIONS</h1>

         <div className='w-[300px] h-[300px] border-[1px] border-[rgba(0,0,0,0.3)] rounded flex justify-center items-center'>
            sdf
         </div>

      </div>

      {/*<GoogleMaps />*/}
   </>
}
export default Location;