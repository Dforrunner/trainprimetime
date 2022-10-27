import {DocHead} from "../../components/user";
import {ServicesSection, HeaderSection} from "../../components/user/Sections";



const Services = () => {
   return <>
      <DocHead title='Services - PrimeTime Personal Training'/>

      <HeaderSection
         title='SERVICES WE OFFER'
         summary={` PrimeTime proudly offers a wide variety of services catering primarily to individuals seeking
            real fitness and health improvements. For more information on each service below, please click through
            to its corresponding page or inquire by contacting us!`}
         btnTitle='JOIN TODAY'
         btnHref='/join'
      />

      <ServicesSection/>
   </>
}

export default Services;