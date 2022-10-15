import {footer} from '../styles/Footer.module.scss';
import {FacebookWhite, InstagramWhite} from "./Icons";
import ContactForm from './ContactForm'

const Footer = () => {
    return <footer className="w-full h-[650px] flex flex-col justify-center items-center bg-primary">
        <div className="w-full flex flex-row justify-between bg-primary">
            <div className='w-1/2 h-auto'>
                <div className='p-10 w-1/2'>
                    <img src='/logoWhiteBorder.png' alt='Logo'/>
                </div>


                <p className='p-5 text-muted'>
                    We truly want to be the last trainer you ever need. We want you to have the tools and education to
                    finally take control of your health and maintain it for the rest of your life!
                </p>

                <div className='w-full h-1/2 flex mt-10'>
                    <div className='w-1/2 h-full flex flex-col items-center'>
                        <h2>Follow us on social media</h2>
                        <ul>
                            <li className='w-[40px] py-1'>
                                <a href='https://www.facebook.com/trainprimetime' target='_blank'>
                                    <FacebookWhite/>
                                </a>
                            </li>
                            <li className='w-[40px] py-1'>
                                <a href='https://www.instagram.com/trainprimetime/?hl=en'
                                   target='_blank'>
                                    <InstagramWhite/>
                                </a>
                            </li>

                        </ul>
                    </div>
                    <div className='w-1/2 h-full flex flex-col items-center'>

                    </div>
                </div>
            </div>

            <div className='w-1/2 p-10'>
                <ContactForm/>
            </div>
        </div>


        <div
            className='mt-10 h-full flex justify-center items-center text-muted w-full bg-black text-sm'>Copyright &copy;2022
            Train Primetime | All Rights Reserved
        </div>
    </footer>
}

export default Footer;