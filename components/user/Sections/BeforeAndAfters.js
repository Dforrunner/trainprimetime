import Image from "next/image";
import Slider from "react-slick";
import { v4 as uuidv4 } from 'uuid';

const list = [
   '/img/ba.jpeg',
   '/img/ba1.jpeg',
   '/img/ba2.jpeg',
   '/img/ba3.jpeg',
   '/img/ba4.jpeg',
   '/img/ba5.jpeg'
]

const BeforeAndAfters = ({imageList = list}) => {

   const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
         {
            breakpoint: 1500,
            settings: {
               slidesToShow: 3,
            }
         },
         {
            breakpoint: 800,
            settings: {
               slidesToShow: 2,
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 1
            }
         }
      ]
   };

   const Slide = ({imgSrc}) =>
      <div className='m-2'>
         <Image src={imgSrc} alt='Before and after image' width={450} height={450} layout='responsive'/>
      </div>

   return <section className='w-full m-h-[650px] bg-primary p-10 pb-20'>
      <div className='text-center w-full py-10'>
         <h1 className='text-secondary text-lg'>BEFORE & AFTER</h1>
         <h2 className='text-2xl'>SEE OUR MEMBER RESULTS</h2>
      </div>

      <Slider {...settings}>
         {imageList.map((src, index) =>
            <Slide key={uuidv4()} imgSrc={src}/>
         )}
      </Slider>
   </section>
}

export default BeforeAndAfters;