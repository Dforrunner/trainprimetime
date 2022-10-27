import {GoogleMaps} from "../../components/user/Sections";
import Link from "next/link";
import {useRouter} from 'next/router'

const Card = ({href, children}) => {
   const router = useRouter();

   return <div
      onClick={() => router.push(href)}
      className='group relative inline-block overflow-hidden border border-secondary px-20 py-10 focus:outline-none focus:ring rounded cursor-pointer'>
      <Link href={href}>
            <span>
                <span
                   className='absolute inset-y-0 left-0 w-[2px] bg-secondary transition-all group-hover:w-full group-active:bg-secondary'
                />

                <span className={"relative transition-colors group-hover:text-white"}>
                   {children}
                </span>
            </span>
      </Link>
   </div>

}

const Location = () => {

   return <>
      <div className='w-full min-h-[500px] bg-white text-black'>
         <h1 className='text-center text-3xl py-10'>OUR LOCATIONS</h1>

         <GoogleMaps/>

         <div className='w-full flex justify-evenly py-10'>


            <Card href={'/location/st-peters'}>
               <b>St. Peters, MO</b> <br/>
               4039 N St. Peters Pkwy <br/>
               St. Peters, MO 63304 <br/>
               (636) 303-1780
            </Card>

            <Card href={'/location/creve-coeur'}>
               <b>Creve Coeur, MO</b> <br/>
               11949 Olive Blvd <br/>
               Creve Coeur, MO 63141 <br/>
               (636) 242-6039
            </Card>
         </div>


      </div>


   </>
}
export default Location;