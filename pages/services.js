import {Footer, Nav} from "../components";
import {SliderLeftBtn} from "../components/Buttons";

const Services = () => {
    return <div>
        <Nav />


        <header className='w-full h-[500px] bg-[url("/dumbells.png")] bg-cover bg-center'>
            <div className='w-full h-full bg-[rgba(0,0,0,0.5)] flex flex-col justify-center px-[100px]'>
                <h1 className='text-4xl text-secondary font-bold relative font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-[335px] before:origin-left before:scale-x-0 before:bg-secondary before:transition hover:before:scale-100'>
                    SERVICES WE OFFER
                </h1>
                <p className='pt-2 pb-10'>
                    PrimeTime proudly offers a wide variety of services catering primarily to individuals seeking
                    real fitness and health improvements. For more information on each service below, please click through
                    to its corresponding page or inquire by contacting us!
                </p>

                <div className='w-[200px]'>
                    <SliderLeftBtn title='JOIN TODAY' href='/join' />
                </div>



            </div>

        </header>

        <section className='w-full min-h-[600px] bg-white text-black'>
            <h1>Services content ...</h1>

        </section>
        <Footer />
    </div>
}

export  default Services;