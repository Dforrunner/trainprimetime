import {useState} from 'react';
import Grow from "@mui/material/Grow";
import Card from "@mui/material/Card";
import Image from "next/image";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {v4 as uuidv4} from "uuid";
import CardActions from "@mui/material/CardActions";
import {Button} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import LaunchIcon from "@mui/icons-material/Launch";
import TooltipButton from "../TooltipButton";
import CircleIcon from '@mui/icons-material/Circle';
import { useSnackbar } from 'notistack';

const BlogCardHorizontal = (props) => {

   const {
      id,
      title,
      img,
      excerpt,
      date,
      publish,
      slug,
      categories,
      transitionDelay = 0
   } = props;

   const [published, setPublished] = useState(publish)
   const { enqueueSnackbar } = useSnackbar();

   const handlePublish = () => {
      fetch('/api/blog/update', {
         method: 'POST',
         body: JSON.stringify({id, data: {publish: !published, title, slug}})
      })
         .then(res => res.json())
         .then(res => {
            if(res.status === 'error'){
               enqueueSnackbar(`Failed to ${published ? 'un-' : ''}publish`, { variant: 'error' });
               return console.error(res.message)
            }

            setPublished(!published)
            // variant could be success, error, warning, info, or default
            enqueueSnackbar(`Successfully ${published ? 'un-' : ''}published!`, { variant: 'success' });
         })
         .catch(()=>{
            enqueueSnackbar(`Failed to ${published ? 'un-' : ''}publish`, { variant: 'error' });
         })
   }

   const handleView = () =>
      window.open(`/blog/${slug}`, '_blank')

   const handleEdit = () => {

   }

   return (
      <Grow in style={{
         transitionDuration: '800ms',
         transitionDelay
      }}>
         <Card
            className='m-5 w-full flex h-[250px] drop-shadow-[0_0_2px_rgba(0,0,0,0.2)] cursor-pointer'
         >
            <div className='relative w-[350px] h-full'>
               <div className='relative w-[350px] h-full'>
                  <Image
                     src={img || '/img/dumbells.png'}
                     alt='thumbnail image'
                     layout='fill'
                     objectFit='cover'
                     objectPosition='center'
                  />
               </div>
            </div>

            <div className='flex flex-col w-full relative'>
               <div className='absolute z-[2] top-0 right-0'>
                  <TooltipButton
                     title={published ? 'Published' : 'Not Published'}
                     icon={<CircleIcon />}
                     color={published ? 'success' : 'warning'}
                     className={published ? 'drop-shadow-[0_0_3px_#56CA00]' : 'drop-shadow-[0_0_3px_#FFB400]'}
                     onClick={handlePublish}
                  />
               </div>

               <CardContent className='h-full'>
                  <Typography variant='h6' component='div'>
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

                  <div className='w-full flex flex-wrap gap-1 mt-2'>
                     {categories.map(i =>
                           <span
                              key={uuidv4()}
                              className='bg-secondary p-1 rounded text-white text-[11px]'
                           >
                        {i}
                     </span>
                     )}
                  </div>

               </CardContent>

               <CardActions className='flex justify-between'>
                  <Typography variant='body2' color='text.secondary'>
                     {date}
                  </Typography>

                  <div className={'space-x-2'}>
                     <Button
                        variant={'outlined'}
                        onClick={handleEdit}
                        startIcon={<EditIcon/>}
                     >
                        Edit
                     </Button>
                     <Button
                        variant={'outlined'}
                        onClick={handleView}
                        startIcon={<LaunchIcon/>}
                     >
                        View
                     </Button>
                  </div>

               </CardActions>
            </div>
         </Card>
      </Grow>
   );
}

export default BlogCardHorizontal;