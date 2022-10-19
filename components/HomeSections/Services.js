import {SliderLeftBtn} from "../Buttons";

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
            <p className='text-center px-10'>We want you to have the tools and education to finally take control of your health and maintain it for
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

export default Services;