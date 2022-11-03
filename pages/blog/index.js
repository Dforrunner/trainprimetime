import {DocHead} from "../../components/user";
import prisma from "../../prisma";
import {BlogCard} from "../../components/core/Blog";
import {v4 as uuidv4} from 'uuid';
import {HeaderSection} from "../../components/user/Sections";
import {useState} from "react";
import Pagination from '@mui/material/Pagination';

const Blog = ({blogs}) => {
   const [page, setPage] = useState(1);
   const postCount = blogs.length;
   const showPerPage = 6;
   const [visibleIndex, setVisibleIndex] = useState(0)
   const handleChange = (event, value) => {
      setPage(value);
      setVisibleIndex((value-1) * showPerPage)
   };

   return <>
      <DocHead title='Blog - PrimeTime Personal Training' />

      <HeaderSection
         title='OUR BLOG'
         summary={`Taking your fitness and nutrition education to the next level`}
         btnTitle='CONTACT US'
         btnHref='/contact'
      />

      {postCount
         ? <div className={'w-full flex flex-wrap bg-white text-black p-5'}>

            {blogs.slice(visibleIndex, visibleIndex+showPerPage).map(i =>
               <BlogCard
                  key={uuidv4()}
                  {...i}
               />
            )}
         </div>
         : <div className='text-3xl p-5 min-h-[480px]'>Coming Soon...</div>
      }


      {postCount > showPerPage &&
      <div className='flex justify-center my-10'>
         <Pagination count={Math.ceil(postCount/showPerPage)} page={page} onChange={handleChange} />
      </div>

      }


   </>
}

export const getStaticProps = async () => {
   const blogs = await prisma.blogs.findMany({
      where: {
         publish: true
      }
   });

   return {
      props: {
         blogs: blogs
      }
   }
}

export  default Blog;