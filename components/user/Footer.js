import {FacebookWhite, InstagramWhite} from "./Icons";
import ContactForm from './ContactForm'
import Image from "next/image";


const Footer = () => {
   return <footer className='w-full m-h-[650px] flex flex-col justify-center items-center bg-primary text-white'>
      <div className='w-full flex flex-col md:flex-row justify-center items-center md:justify-between bg-primary'>
         <div className='w-full md:w-1/2 h-auto'>
            <div className='w-full h-[100px] relative mt-10 md:mt-0'>
               <Image
                  src='/img/logoWhiteBorder.png'
                  alt='Logo'
                  layout='fill'
                  objectFit='contain'
                  objectPosition='center'
               />
            </div>


            <p className='p-5 text-muted text-center md:text-left'>
               We truly want to be the last trainer you ever need. We want you to have the tools and education to
               finally take control of your health and maintain it for the rest of your life!
            </p>

            <div className='w-full h-1/2 flex flex-col md:flex-row items-center mt-10'>
               <div className='w-1/2 h-full flex flex-col items-center justify-center'>
                  <h2>Follow us on social media</h2>
                  <ul>
                     <li className='w-[40px] py-1'>
                        <a href='https://www.facebook.com/trainprimetime' target='_blank' rel='noreferrer'>
                           <FacebookWhite/>
                        </a>
                     </li>
                     <li className='w-[40px] py-1'>
                        <a href='https://www.instagram.com/trainprimetime/?hl=en'
                           target='_blank' rel='noreferrer'>
                           <InstagramWhite/>
                        </a>
                     </li>

                  </ul>
               </div>
               <div className='w-1/2 h-full flex flex-col items-center'>

               </div>
            </div>
         </div>

         <div className='w-full md:w-1/2 p-5 md:p-10'>
            <ContactForm/>
         </div>
      </div>


      <p
         className='mt-10 h-full text-muted w-full bg-primary-dark text-sm text-center p-5'>
         Copyright &copy;2022 Train Primetime | All Rights Reserved
      </p>
   </footer>
}

export default Footer;