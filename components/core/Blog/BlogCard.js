import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import {Button} from "@mui/material";
import {useRouter} from 'next/router'
import {v4 as uuidv4} from 'uuid';
import CardActions from '@mui/material/CardActions';
import Grow  from '@mui/material/Grow';

const BlogCard = ({
                     title,
                     img,
                     excerpt,
                     date,
                     slug = '',
                     categories,
                     transitionDelay = 0
                  }) => {
   const router = useRouter();

   const handleClick = () =>
      router.push(`/blog/${slug}` || '/blog')

   return (
      <Grow in style={{
         transitionDuration: '800ms',
         transitionDelay
      }}>
         <Card
            className='m-5 w-full h-[550px] drop-shadow-[0_0_2px_rgba(0,0,0,0.2)] cursor-pointer'
            onClick={handleClick}
         >

            <div className='relative w-full h-[55%] md:h-[65%] '>

               <div className='relative w-full h-full'>
                  <Image
                     src={img || '/img/dumbells.png'}
                     alt='thumbnail image'
                     layout='fill'
                     objectFit='cover'
                     objectPosition='center'
                  />
               </div>

               <div className='w-full absolute bottom-2 left-2 bg flex flex-wrap gap-1'>
                  {categories.map(i =>
                     <span
                        key={uuidv4()}
                        className='bg-secondary-transparent py-1 px-2 rounded text-white text-sm'
                     >
                        {i}
                     </span>
                  )}
               </div>

            </div>
            <div className='flex flex-col justify-between h-[45%] md:h-[35%]'>
               <CardContent>
                  <Typography variant='h6' component='div' color='third.dark'>
                     {title}
                  </Typography>

                  <Typography sx={{
                     overflow: "hidden",
                     textOverflow: "ellipsis",
                     display: "-webkit-box",
                     WebkitLineClamp: "3",
                     WebkitBoxOrient: "vertical",
                     fontSize: '13px',
                     marginTop: 2
                  }}>
                     {excerpt}
                  </Typography>
               </CardContent>

               <CardActions className='flex justify-between '>
                  <Typography variant='body2' color='text.secondary'>
                     {date}
                  </Typography>
                  <Button>
                     Read More
                  </Button>
               </CardActions>
            </div>
         </Card>
      </Grow>

   );
}

export default BlogCard;