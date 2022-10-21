import { useRouter } from 'next/router';
import Trainer from "../../components/Sections/Trainer";

const Location = () => {
   const router = useRouter()
   const { location } = router.query

   return <div>
      <h1>Location {location}</h1>
      <Trainer />
   </div>
}



export default Location;