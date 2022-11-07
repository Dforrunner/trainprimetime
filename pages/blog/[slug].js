import prisma from "../../prisma";
import Image from 'next/image';
import Chip from '@mui/material/Chip';
import {v4 as uuidv4} from "uuid";

const BlogPost = ({post}) => {
   const {title,excerpt, author, date, tags, categories, content} = post
   return <div className='min-h-[600px] relative'>

      <div className='sticky z-[-1] top-0 w-full h-[500px]'>
         <div className='relative w-full h-[500px]'>
            <Image
               src={'/img/dumbells.png'}
               layout='fill'
               objectFit='cover'
               objectPosition='center'
            />
         </div>
      </div>

      <div className='w-[90%] m-auto mt-[-120px] p-10 bg-white rounded'>
         <div className='text-center space-y-4'>
            <div className='flex justify-center items-center gap-1'>
               {categories && categories.map(i =>
                  <span key={uuidv4()} className='p-2 bg-secondary rounded text-white text-sm'>{i}</span>
               )

               }
            </div>
            <h1 className='text-2xl'>{title}</h1>
            <p className='text-sm'>{date} | By {author} </p>
            <p>
               {excerpt}
            </p>
         </div>

         <div className='py-10' dangerouslySetInnerHTML={{__html: content}} />

         <div className='mt-10 my-20 flex flex-wrap gap-1 items-center'>
            TAGS:
            {tags && tags.map(i =>
               <Chip
                  key={uuidv4()}
                  label={i}
                  color={'primary'}
               />
            )}
         </div>
      </div>

   </div>
}

export default BlogPost;

export async function getServerSideProps({ params }) {
   const slug = params.slug;

   const post = await prisma.post.findFirst({
      where: {
         slug: slug
      }
   });

   return {
      notFound: !post,
      // Passed to the page component as props
      props: {post}
   }
}