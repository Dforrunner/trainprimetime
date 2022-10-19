import Image from "next/image";
import Slider from "react-slick";

const BeforeAndAfters = () => {


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
         <Slide imgSrc={'/ba.jpeg'}/>
         <Slide imgSrc={'/ba1.jpeg'}/>
         <Slide imgSrc={'/ba2.jpeg'}/>
         <Slide imgSrc={'/ba3.jpeg'}/>
         <Slide imgSrc={'/ba4.jpeg'}/>
         <Slide imgSrc={'/ba5.jpeg'}/>
      </Slider>
   </section>
}

export default BeforeAndAfters;