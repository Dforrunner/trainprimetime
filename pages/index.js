import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import {Nav, Footer, FiveStars, HeadBase} from "../components";
import Link from 'next/link'
import {Dumbbell, Heart, NutritionPlan, Muscles} from "../components/Icons";
import Slider from "react-slick";
import {useEffect, useState} from "react";
import Map from "../components/GoogleMap";
import {SliderLeftBtn} from "../components/Buttons";

const LearnMoreBtn = ({href = '#', title = 'Learn More', className}) =>
    <a
        className={'inline-block rounded border border-secondary hover:border-primary hover:text-secondary px-8 py-2 text-sm font-medium hover:bg-[rgba(50,50,50,0.2)] active:bg-[rgb(50,50,50)] ' + className}
        href={href}
    >
        {title}
    </a>

const Services = () => {

    const Box = ({bgUrl = '', title, text, className}) => {
        return <div
            className={'w-full md:w-1/4 h-[380px] bg-cover bg-center hover:border-b-[4px] hover:border-secondary ' + className}>
            <div
                className='w-full h-full text-white flex flex-col justify-center items-center text-center p-5 bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(0,0,0,0.4)] drop-shadow-[0_0_2px_rgba(0,0,0,1)]'>
                <h2 className='text-[22px] text-bold'>{title}</h2>
                <p className='text-sm my-5 h-[100px] overflow-hidden'>{text} </p>
                <SliderLeftBtn href='/'/>
            </div>
        </div>
    }
    return <section>
        <div className='bg-[url("/orangeBg.png")] w-full h-[200px] flex flex-col justify-center items-center'>
            <h1 className='text-3xl'>WHAT WE OFFER</h1>
            <p>We want you to have the tools and education to finally take control of your health and maintain it for
                the rest of your life!</p>
        </div>
        <div className='w-full flex md:flex-row flex-col flew-wrap'>
            <Box title='1-ON-1 Training'
                 text='If you are not interested in group classes, we have a personal training program just for you. Our personal training program provides an individualized approach to your training. It will be a customized training program tailored for you and your current fitness abilities. You will work with a coach 1-on-1 to reach your fitness goals.'
                 href='/'
                 className="bg-[url('/private.jpeg')]"
            />
            <Box title='SEMI-PRIVATE TRAINING'
                 text='If you are looking for all the benefits of training with a personal trainer, enjoy the company of others, and are looking to save some money, then small group training is a great option. This is not a boot camp or large class setting where you can feel lost in the shuffle, feel like you can’t keep up, or are worried about your form and technique and the instructor is stretched too thin to notice.'
                 className="bg-[url('/semiPrivate.jpeg')]"
            />
            <Box title='NUTRITIONAL COACHING'
                 text='We provide nutritional consulting to all clients as part of our membership services, and offer extensive education and planning to all of our clients!. Additionally, we offer the finest nutritional supplements available through in-house our partner Seraphim Supplements.'
                 className="bg-[url('/nutrition.jpeg')]"
            />
            <Box title='ACCOUNTABILITY'
                 text='Not able to make it into the gym? Prefer a different kind of workout? Our Online Personal Training program connects you with a Personal Trainer and holds you accountable as you realize your customized health and fitness goals. 1:1 coaching relationship, nutritional consulting and customized workout programming make Primetime Online Personal Training your path to the body you deserve.'
                 className="bg-[url('/accountability.jpeg')]"
            />
        </div>

    </section>
}

const Card = ({icon, title, text}) => {
    return <div className='md:w-1/4 sm:w-1/2 h-1/2 flex flex-col justify-center mt-10 items-center'>
        {icon && <div
            className='w-[80px] h-[80px] rounded-full bg-[rgb(50,50,50)] hover:bg-[rgb(30,30,30)] flex justify-center items-center p-5 hover:drop-shadow-secondary'>
            {icon}
        </div>}
        <h3 className='font-bold text-md p-4 text-center'>{title}</h3>
        <p className='text-center text-sm w-3/4'>{text}</p>
    </div>
}

const WhyChooseUs = () => {
    return <section className='w-full lg:h-[450px] bg-primary'>
        <div className='text-center w-full pt-[60px]'>
            <h1 className='text-secondary text-lg'>WHY CHOOSE US?</h1>
            <h2 className='text-2xl'>PUSH YOUR LIMITS FORWARD</h2>
        </div>

        <div className='w-full h-full flex flex-row flex-wrap lg:px-20 justify-center pb-10'>
            <Card icon={<Muscles/>}
                  title={'Take Control Of Your Future'}
                  text={'Achieve your fitness and health goals and have fun doing it.'}
            />

            <Card icon={<Dumbbell/>}
                  title={'Our Equipment'}
                  text={'Safe and effective modern equipment for better training.'}
            />

            <Card icon={<NutritionPlan/>}
                  title={'Nutrition Coaching'}
                  text={'Nutritional consultation, education and planning for all of our clients.'}
            />

            <Card icon={<Heart/>}
                  title={'Personalized Plans'}
                  text={'Customized training program tailored for you and your current fitness abilities'}
            />
        </div>
    </section>
}


const Welcome = () => {
    return <section className='w-full h-[550px] bg-white text-primary relative overflow-hidden'>
        <div
            className='w-full lg:w-[90%] h-full py-[100px] px-8 md:px-20 absolute bg-gradient-to-r from-white via-white to-transparent'>
            <h1 className='lg:text-4xl text-2xl'>WELCOME TO PRIMETIME</h1>
            <div className='w-full md:w-1/2 text-[15px] mb-5'>
                <p className=' mt-5'>
                    We get to work with people who are ready for a change and fed up with the status quo. Where other
                    programs may have failed in the past, we take a holistic approach that delivers sustainable results
                    for
                    our members. By educating in exercise, nutrition, mindset, and mobility, we ensure that our clients
                    will
                    not only get into shape but stay there long after they are done training at our facility.
                </p>
                <p className='mt-2'>
                    We truly want to be the last trainer you ever need. We want you to have the tools and education to
                    finally take control of your health and maintain it for the rest of your life!
                </p>
            </div>


            <SliderLeftBtn href='/about'/>
        </div>

        <img src='/pt_group.jpeg' alt='Group Picture' className='h-full w-auto float-right md:mr-[-75px]'/>
    </section>
}

const Results = () => {
    const [slideNum, setSlideNum] = useState(3);

    const handleScroll = () => {
        if (window.innerWidth > 1500) return setSlideNum(4)
        if (window.innerWidth > 800) return setSlideNum(3)
        if (window.innerWidth > 600) return setSlideNum(2)
        if (window.innerWidth < 600) return setSlideNum(1)
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 500,
        slidesToShow: slideNum,
        slidesToScroll: 1
    };

    const Slide = ({imgSrc}) =>
        <div className='m-2 bg-third'>
            <img src={imgSrc} alt='Before and after image'/>
        </div>

    return <section className='w-full h-[630px] bg-primary p-10'>
        <div className='text-center w-full py-10'>
            <h1 className='text-secondary text-lg'>BEFORE & AFTER</h1>
            <h2 className='text-2xl'>SEE OUR MEMBER RESULTS</h2>
        </div>

        <Slider {...settings}>
            <Slide imgSrc={'/ba.jpeg'}/>
            <Slide imgSrc={'/ba1.jpeg'}/>
            <Slide imgSrc={'/ba2.jpeg'}/>
            <Slide imgSrc={'/ba3.jpeg'}/>
            <Slide imgSrc={'/ba4.jpeg'}/>
            <Slide imgSrc={'/ba5.jpeg'}/>
        </Slider>
    </section>
}

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 2000,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const Slide = ({text, name}) =>
        <div className='p-10 h-[300px] text-primary flex flex-col justify-center items-center border-[1px] border-[rgba(0,0,0,0.3)] border-primary rounded-[5px] m-10'>
            <FiveStars/>
            <p className='p-10 text-center'>"{text}"</p>
            <p>-{name}</p>
        </div>

    return <section className='w-full h-[520px] bg-white'>

        <h1 className='text-primary text-3xl pt-[60px] text-center'>TESTIMONIALS</h1>

        <Slider {...settings}>
            <Slide
                text={`If you are ready to make a change then this is the place to start! 
                Don’t walk, RUN to PrimeTime and sign yourself up. You won’t regret it! 
                (Truth: you will actually probably feel regret for signing up while you 
                are in a session with one of the trainers but that feeling goes away 
                soon as the session ends, promise 😜💪😁👊)`}
                name={'Kris Redell'}/>
            <Slide
                text={`Great group of trainers, so far what I have seen of what 
                they do for people is just liberating. If you get the chance check them out.`}
                name={'Kimberly Withrow'}/>
            <Slide
                text={`I had a fantastic experience with PrimeTime! I did the 6
                 week challenge and busted more goals than I thought I could. 
                 Thanks to Cameron and AJ for advice and for pushing me to do 
                 more! Can’t wait to keep going and see where I am in 6 months!`}
                name={'Krisjeana Vernon'}/>
            <Slide
                text={`If you are ready to make a change then this is the place to start! 
                Don’t walk, RUN to PrimeTime and sign yourself up. You won’t regret it! 
                (Truth: you will actually probably feel regret for signing up while you are 
                in a session with one of the trainers but that feeling goes away soon as 
                the session ends, promise 😜💪😁👊`}
                name={'Kris Redell'}/>
            <Slide
                text={`These guys are the right kind of patient, but motivating. They will 
                teach you and encourage you to push yourself each time. The gym itself is a 
                great atmosphere. It has everything you could need without being overwhelming or overcrowded.`}
                name={'Ashley Kay Rellergert'}/>
        </Slider>
    </section>
}

const SignUp = () => {
    return <section className='flex justify-center items-center flex-col w-full h-[400px] bg-cover bg-center bg-[url(/membership.png)]'>
        <h1 className='text-4xl'>SIGN UP TODAY AND GET</h1>
        <h2 className='text-6xl text-bold'>21 DAY FREE TRIAL</h2>
        <div className='p-10'>
            <a className='glow-btn' href="/join">START FREE TRIAL</a>
        </div>
    </section>
}

const Banner = () => {
    return <section className='w-full h-[100px] bg-secondary flex justify-center items-center'>
        <h1 className='text-5xl text-bold'>COME TRAIN WITH US!</h1>
    </section>
}

const GoogleMap = () => {
    return <section className='h-[500px]'>
        <Map />
    </section>
}

const Locations = () => {
    return <section className='h-[200px] bg-white text-primary flex flex-row justify-center items-center gap-10'>
        <h1 className='text-primary text-2xl text-center '>OUR LOCATIONS:</h1>

            <div className='w-[300px] text-center border-[1px] border-[rgba(0,0,0,0.4)] rounded p-5'>
                <a href='https://g.page/TrainPrimeTime?share' target='_blank' className='hover:underline'>
                    <h2 className='text-lg text-bold text-secondary'>St. Peters, MO</h2>
                    <p>4039 N St. Peters Pkwy</p>
                    <p>St. Peters, MO 63304</p>
                </a>

                <a href="tel:(636) 303-1780" rel="noopener noreferrer" className='text-bold text-third hover:underline'>(636) 303-1780</a>
            </div>

            <div className='w-[300px] text-center border-[1px] border-[rgba(0,0,0,0.4)] rounded p-5 '>
                <a href='https://goo.gl/maps/5LHvuxoi4CAJQR2B8' target='_blank' className='hover:underline'>
                    <h2 className='text-lg text-bold text-secondary'>Creve Coeur, MO</h2>
                    <p>11949 Olive Blvd</p>
                    <p>Creve Coeur, MO 63141</p>
                </a>

                <a href="tel:(636) 303-1780" rel="noopener noreferrer" className='text-bold text-third hover:underline'>(636) 242-6039</a>
            </div>


    </section>
}

export default function Home() {
    return (
        <div>
            <Head>
                <title>PrimeTime Personal Training - The Best Fitness Training In St. Peters &amp; Creve Coeur, MO</title>
                <HeadBase />
            </Head>

            <Nav/>

            <header className={styles.header}>
                <div>
                    <h1 className='animate__animated animate__slideInLeft'>LOOK FORWARD TO <b>TRAINING</b><br/> A NEW YOU</h1>
                    <div className='animate__animated animate__slideInUp h-[80px]'>
                        <a className='glow-btn' href="/join">BECOME A MEMBER</a>
                    </div>

                </div>
            </header>

            <WhyChooseUs/>
            <Welcome/>
            <Services/>
            <Results/>
            <SignUp />
            <Testimonials/>
            <Banner />
            <GoogleMap />
            <Locations />

            <Footer/>
        </div>
    )
}
