import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import {Button} from "@mui/material";
import {useRouter} from 'next/router'

const BlogCard = ({title, img, excerpt, date, slug = '', author}) => {
   const router = useRouter();

   const handleClick = () =>
      router.push(`/blog/${slug}` || '/blog')

   return (
      <Card
         className={`m-5 w-[350px] h-[450px] drop-shadow-[0_0_2px_rgba(0,0,0,0.3)] cursor-pointer`}
         onClick={handleClick}
      >

         <div className='relative w-[350px] h-[45%] '>
            <Image
               src='/img/dumbells.png'
               alt='green iguana'
               layout='fill'
               objectFit='cover'
               objectPosition='center'
            />
         </div>
         <div className='flex flex-col justify-between h-[55%] '>
            <CardContent>

               <Typography variant='h5' component='div' color='third.dark' >
                  {title}
               </Typography>
               <p className=' text-sm text-primary'>
                  {excerpt}
               </p>
            </CardContent>
            <CardActions className='flex justify-between'>
               <Typography variant='body2' color='text.secondary'>
                  {date}
               </Typography>
               <Button>
                  Read More
               </Button>
            </CardActions>
         </div>

      </Card>
   );
}

export default BlogCard;