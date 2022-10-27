import {ContactForm, DocHead} from "../components/user";
import {HeaderSection} from "../components/user/Sections";

const Contact = () => {
    return <>
        <DocHead title='Contact Us - PrimeTime Personal Training' />

        <HeaderSection
            title='CONTACT US'
            summary={`Let's chat! Send us a message and one of our staff member will get back to you as soon as possible to 
                      answer any questions you may have.`}
            bgImg='/img/typing.jpg'
            btnHref='/join'
            btnTitle='JOIN TODAY'
        />

        <section className='bg-white p-20 min-h-[600px] text-black'>
            <ContactForm />
        </section>
    </>
}

export  default Contact;