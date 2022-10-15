import {useState, useEffect} from "react";
import Link from "next/link";
import Image from "next/image";

const ListItem = ({href, title}) =>
    <li className='inline-block text-center p-2 transition-all ease-in-out duration-500 hover:text-secondary'>
        <Link href={href}>
            {title}
        </Link>
    </li>

const Nav = () => {
    const [resize, setResize] = useState(false);

    const handleScroll = () => {
        window.scrollY >= 210
            ? setResize(true)
            : setResize(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    return <nav
        className='flex flex-row justify-between items-center w-full sticky z-[100] bg-white top-0 right-0 border-b-[1px] border-black transition-all ease-in-out duration-500'
        style={{
            height: resize ? '50px' : '100px',
            padding: resize ? '8px' : '15px'
        }}
    >

        <Link href='/'>
            <Image className='h-full' src='/primetime_logo.png' alt='PrimeTime Logo' width='200' height='70'/>
        </Link>


        <ul className='m-0 flex text-black'>
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
    </nav>
}

export default Nav;