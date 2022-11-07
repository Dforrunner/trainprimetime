import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import {Button} from "@mui/material";
import {useRouter} from 'next/router'
import {v4 as uuidv4} from 'uuid';

const FilterPills = ({title, data, onClick}) =>
   <div className='flex flex-wrap gap-1 max-h-[25px] overflow-hidden'>
      <span className='text-sm font-bold'>
         {title}:
      </span>
      {data.map(i =>
         <span
            key={uuidv4()}
            className={`px-2 py-[2px] border-[1px] border-grey text-grey-600 rounded-[25px] text-[11px]
                                    hover:bg-secondary hover:text-white hover:border-secondary cursor-pointer`}
            onClick={() => onClick(i)}
         >
            {i}
         </span>
      )}
   </div>

const BlogCard = ({
                     title,
                     img,
                     excerpt,
                     date,
                     slug = '',
                     author,
                     tags,
                     categories,
                     handleTagClick = () => {
                     },
                     handleCategoryClick = () => {
                     }
                  }) => {
   const router = useRouter();

   const handleClick = () =>
      router.push(`/blog/${slug}` || '/blog')

   return (
      <Card
         className={`m-5 w-[350px] h-[500px] drop-shadow-[0_0_2px_rgba(0,0,0,0.3)] cursor-pointer`}
         onClick={handleClick}
      >
         <div className='relative w-[450px] h-[40%] '>
            <Image
               src={img || '/img/dumbells.png'}
               alt='thumbnail image'
               layout='fill'
               objectFit='cover'
               objectPosition='center'
            />
         </div>
         <div className='flex flex-col justify-between h-[60%] '>
            <CardContent>

               <Typography variant='h6' component='div' color='third.dark'>
                  {title}
               </Typography>

               <div className='flex flex-col justify-between h-[80%]'>

                  <Typography sx={{
                     overflow: "hidden",
                     textOverflow: "ellipsis",
                     display: "-webkit-box",
                     WebkitLineClamp: "4",
                     WebkitBoxOrient: "vertical",
                     fontSize: '13px',
                     marginTop: 2,
                     height: '80px'
                  }}>
                     {excerpt}
                  </Typography>

                  <div className='space-y-1'>
                     <FilterPills
                        title={'categories'}
                        onClick={handleCategoryClick}
                        data={categories}
                     />

                     <FilterPills
                        title={'tags'}
                        onClick={handleTagClick}
                        data={tags}
                     />
                  </div>
               </div>
            </CardContent>
            <div className='flex h-[38px] p-2 items-center justify-between '>
               <Typography variant='body2' color='text.secondary'>
                  {date}
               </Typography>
               <Button>
                  Read More
               </Button>
            </div>
         </div>

      </Card>
   );
}

export default BlogCard;