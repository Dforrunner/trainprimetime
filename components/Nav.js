import {useState, useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import {CloseIcon} from "./Icons";

const ListItem = ({href, title}) =>
    <li className='w-full md:w-auto py-5 inline-block text-center p-2 transition-all ease-in-out duration-500 hover:text-secondary'>
        <Link href={href}>
            {title}
        </Link>
    </li>

const Nav = () => {
    const [resize, setResize] = useState(false);
    const [open, setOpen] = useState(false);

    const handleScroll = () => {
        window.scrollY >= 10
            ? setResize(true)
            : setResize(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    return <nav className='bg-white transition-all duration-500' style={{
        height: resize ? '50px' : '100px'
    }}>

        <div className={`w-full flex flex-row justify-between items-center w-full bg-white drop-shadow border-black 
                         transition-all ease-in-out duration-500 fixed w-full top-0 right-0 z-[300]`}
             style={{
                 height: resize ? '50px' : '100px',
                 padding: resize ? '8px' : '15px'
             }}>
            <Link href='/'>
                <div className='relative w-[250px] h-[80%]'>
                    <Image
                       src='/primetime_logo.png'
                       alt='PrimeTime Logo'
                       layout={'fill'}
                       objectFit='contain'
                       objectPosition='left'
                    />
                </div>
            </Link>


            <ul className='m-0 flex text-black hidden lg:flex'>
                <ListItem href='/' title='HOME'/>
                <ListItem href='/about' title='ABOUT'/>
                <ListItem href='/services' title='SERVICES'/>
                <ListItem href='/schedule' title='SCHEDULE'/>
                <ListItem href='/franchise' title='FRANCHISE'/>
                <ListItem href='/blog' title='BLOG'/>
                <ListItem href='/contact' title='CONTACT'/>
                <ListItem
                    href='https://trainprimetimevip.com/membership-access28613525?page_id=28613530&page_key=ymcztnlg37elix5k&login_redirect=1'
                    title='MEMBERSHIP PORTAL'/>
            </ul>


            <div className="space-y-2 mr-5 lg:hidden" onClick={() =>
                setOpen(true)}>
                <div className="w-8 h-0.5 bg-[rgb(50,50,50)]"/>
                <div className="w-8 h-0.5 bg-[rgb(50,50,50)]"/>
                <div className="w-8 h-0.5 bg-[rgb(50,50,50)]"/>
            </div>
        </div>


        <div className={open ? 'text-black absolute lg:hidden w-full h-screen top-0 z-[450] bg-white ' : 'hidden'} >
            <div className='ml-[80%] m-10' onClick={() => setOpen(false)}>
                <CloseIcon />
            </div>
            <ul className='flex flex-col justify-center items-center mt-[150px]'>
                <ListItem href='/' title='HOME'/>
                <ListItem href='/about' title='ABOUT'/>
                <ListItem href='/services' title='SERVICES'/>
                <ListItem href='/schedule' title='SCHEDULE'/>
                <ListItem href='/franchise' title='FRANCHISE'/>
                <ListItem href='/blog' title='BLOG'/>
                <ListItem href='/contact' title='CONTACT'/>
                <ListItem
                    href='https://trainprimetimevip.com/membership-access28613525?page_id=28613530&page_key=ymcztnlg37elix5k&login_redirect=1'
                    title='MEMBERSHIP PORTAL'/>
            </ul>
        </div>

    </nav>
}
export default Nav;