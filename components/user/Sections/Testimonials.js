import {FiveStars} from "../index";
import Slider from "react-slick";
import { v4 as uuidv4 } from 'uuid';

const defaultTestimonies = [
   {
      text: `If you are ready to make a change then this is the place to start! 
                Donโt walk, RUN to PrimeTime and sign yourself up. You wonโt regret it! 
                (Truth: you will actually probably feel regret for signing up while you 
                are in a session with one of the trainers but that feeling goes away 
                soon as the session ends, promise ๐๐ช๐๐`,
      name: 'Kris Redell'
   },
   {
      text: `Great group of trainers, so far what I have seen of what 
                they do for people is just liberating. If you get the chance check them out.`,
      name: 'Kimberly Withrow'
   },
   {
      text: `I had a fantastic experience with PrimeTime! I did the 6
                 week challenge and busted more goals than I thought I could. 
                 Thanks to Cameron and AJ for advice and for pushing me to do 
                 more! Canโt wait to keep going and see where I am in 6 months!`,
      name: 'Krisjeana Vernon'
   },
   {
      text: `These guys are the right kind of patient, but motivating. They will 
                teach you and encourage you to push yourself each time. The gym itself is a 
                great atmosphere. It has everything you could need without being overwhelming or overcrowded.`,
      name: 'Ashley Kay Rellergert'
   }
]

const Testimonials = ({testimonies = defaultTestimonies}) => {
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
      <div
         className={`py-2 px-5 md:p-10 h-[300px] text-primary flex flex-col justify-between items-center border-[1px] 
                        border-[rgba(0,0,0,0.3)] border-primary rounded-[5px] m-5 md:m-10`}>
         <FiveStars/>
         <p className='md:px-10 text-center md:text-lg'>&quot;{text}&quot;</p>
         <p>-{name}</p>
      </div>

   return <section className='w-full h-[520px] bg-white'>

      <h1 className='text-primary text-3xl pt-[60px] text-center'>TESTIMONIALS</h1>

      <Slider {...settings}>
         {testimonies.map(({text, name}) =>
            <Slide
               key={uuidv4()}
               text={text}
               name={name}
            />
         )}
      </Slider>
   </section>
}

export default Testimonials;