import {Footer, Nav} from "../components";
import Head from "next/head";

const Blog = () => {
    return <>
        <Head>
            <title>
                Blog - PrimeTime Personal Training
            </title>
        </Head>

        <Nav />

        <section className='w-full min-h-[600px] bg-white text-black'>
            <h1>Blog content ...</h1>

        </section>

        <Footer />
    </>
}

export  default Blog;