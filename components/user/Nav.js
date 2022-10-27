"use client"

import {useState, useEffect} from "react";
import Link from "next/link";
import {CloseIcon} from "./Icons";
import {v4 as uuidv4} from 'uuid';
import Logo from "./Logo";

const ListItem = ({
                     href, title, dropDown = [], setOpen = () => {
   }
                  }) => {

   const Button = ({href, title}) =>
      <Link href={href}>
            <span className='py-3 px-2 cursor-pointer text-center' onClick={() => {
               setOpen(false);
            }}>
               {title}
            </span>
      </Link>

   const baseClass = `w-full md:w-auto inline-block transition-all ease-in-out 
                      duration-500 hover:text-secondary py-3 px-3 text-center`

   return <>
      {dropDown.length
         ? <li className={baseClass + ' relative group'}>
            <Button href={href} title={title}/>

            <ul className={`absolute w-[200px] flex flex-col bg-white rounded mt-2 border-[1px] border-[rgba(0,0,0,0.3)] 
                           hidden group-hover:inline top-8 left-0`}>
               {dropDown.map(({title, href}) =>
                  <li key={uuidv4()}
                      className='py-2 border-b-[1px] border-[rgba(0,0,0,0.3)] hover:bg-primary hover:text-white'>
                     <Button href={href} title={title}/>
                  </li>
               )}
            </ul>
         </li>

         : <li className={baseClass}>
            <Button href={href} title={title}/>
         </li>
      }
   </>
}

const navLinks = [
   {
      href: '/',
      title: 'HOME'
   },
   {
      href: '/about',
      title: 'ABOUT'
   },
   {
      href: '/services',
      title: 'SERVICES'
   },
   {
      href: '/location',
      title: 'LOCATION',
      dropDown: [
         {
            title: 'St. Peters',
            href: '/location/st-peters'
         },
         {
            title: 'Creve Coeur',
            href: '/location/creve-coeur'
         }
      ]
   },
   {
      href: '/blog',
      title: 'BLOG'
   },
   {
      href: '/contact',
      title: 'CONTACT'
   },
   {
      href: 'https://trainprimetimevip.com/membership-access28613525?page_id=28613530&page_key=ymcztnlg37elix5k&login_redirect=1',
      title: 'MEMBERSHIP PORTAL'
   }
]

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

   return <>
      <nav className='bg-white transition-all duration-500 fixed w-full top-0 right-0 z-[300] '>

         <div className={`w-full flex flex-row justify-between items-center w-full bg-white drop-shadow border-black 
                         transition-all ease-in-out duration-500`}
              style={{
                 height: resize ? '60px' : '100px',
                 padding: resize ? '8px' : '15px'
              }}>

            <Logo/>


            <ul className='m-0 flex text-black hidden lg:flex'>
               {navLinks.map(i =>
                  <ListItem
                     key={uuidv4()}
                     {...i}
                  />
               )}
            </ul>


            {open

               ? <div onClick={() => setOpen(false)}>
                  <CloseIcon/>
               </div>

               : <div className='space-y-2 mr-5 lg:hidden' onClick={() =>
                  setOpen(true)}>
                  <div className='w-8 h-0.5 bg-[rgb(50,50,50)]'/>
                  <div className='w-8 h-0.5 bg-[rgb(50,50,50)]'/>
                  <div className='w-8 h-0.5 bg-[rgb(50,50,50)]'/>
               </div>
            }
         </div>


         <div className={open ? 'text-black lg:hidden w-full h-screen bg-white ' : 'hidden'}>

            <ul className='flex flex-col justify-center items-center pt-20'>
               {navLinks.map(i =>
                  <ListItem
                     key={uuidv4()}
                     {...i}
                     setOpen={setOpen}
                  />
               )}
            </ul>
         </div>
      </nav>

      <div className='bg-white' style={{
         height: resize ? '60px' : '100px'
      }}/>
   </>
}
export default Nav;