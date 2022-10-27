import Link from "next/link";
import Image from "next/image";

const Logo = () =>
   <div className='h-full flex items-center'>
      <Link href='/'>
         <div className='relative min-w-[250px] h-[100%]'>
            <Image
               src='/img/primetime_logo.png'
               alt='PrimeTime Logo'
               layout={'fill'}
               objectFit='contain'
               objectPosition='left'
            />
         </div>
      </Link>
   </div>

export default Logo;