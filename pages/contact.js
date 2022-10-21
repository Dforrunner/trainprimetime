import {ContactForm, DocHead} from "../components";

const Contact = () => {
    return <>
        <DocHead title='Contact Us - PrimeTime Personal Training' />


        <section className='bg-white p-10 text-black'>
            <ContactForm />
        </section>
    </>
}

export  default Contact;