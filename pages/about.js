import {Footer, Nav} from "../components";
import {SliderLeftBtn} from "../components/Buttons";

const About = () => {
    return <div>
        <Nav/>

        <header className='w-full h-[500px] bg-[url("/dumbells.png")] bg-cover bg-center'>
            <div className='w-full h-full bg-[rgba(0,0,0,0.5)] flex flex-col justify-center px-[100px]'>
                <h1 className='text-4xl text-secondary font-bold relative font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-[155px] before:origin-left before:scale-x-0 before:bg-secondary before:transition hover:before:scale-100'>
                    About us
                </h1>
                <p className='pt-2 pb-10'>
                    We get to work with people who are ready for a change and fed up with the status quo.
                </p>

                <div className='w-[200px]'>
                    <SliderLeftBtn title='CONTACT US' href='/contact' />
                </div>

            </div>

        </header>
        <section className='w-full min-h-[600px] bg-white text-black'>
            <h1>About content ...</h1>
            {/*<p>*/}
            {/*    We get to work with people who are ready for a change and fed up with the status quo. Where other*/}
            {/*    programs may have failed in the past, we take a holistic approach that delivers sustainable results for*/}
            {/*    our members. By educating in exercise, nutrition, mindset, and mobility, we ensure that our clients will*/}
            {/*    not only get into shape but stay there long after they are done training at our facility.*/}
            {/*</p>*/}
        </section>


        <Footer/>
    </div>
}

export default About;