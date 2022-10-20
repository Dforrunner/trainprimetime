import {ContactForm, Footer, Nav} from "../components";
import Head from "next/head";

const Contact = () => {
    return <>
        <Head>
            <title>
                Contact Us - PrimeTime Personal Training
            </title>
        </Head>

        <Nav />

        <section className='bg-white p-10 text-black'>
            <ContactForm />
        </section>

        <Footer />
    </>
}

export  default Contact;