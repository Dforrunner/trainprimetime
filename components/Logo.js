import Link from "next/link";
import Image from "next/image";

const Logo = () =>
   <div className='h-full flex items-center'>
      <Link href='/'>
         <div className='relative w-[150px] h-[80%]'>
            <Image
               src='/primetime_logo.png'
               alt='PrimeTime Logo'
               layout={'fill'}
               objectFit='contain'
               objectPosition='left'
            />
         </div>
      </Link>
   </div>

export default Logo;