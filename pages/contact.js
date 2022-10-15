import {ContactForm, Footer, Nav} from "../components";

const Contact = () => {
    return <div>
        <Nav />

        <section className='bg-white p-10 text-black'>
            <ContactForm />
        </section>

        <Footer />
    </div>
}

export  default Contact;