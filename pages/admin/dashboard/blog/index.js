import {useState} from 'react';
import {BlogCard, BlogPost} from "../../../../components/core/Blog";
import prisma from "../../../../prisma";
import {v4 as uuidv4} from "uuid";
import Pagination from '@mui/material/Pagination';

const Page = ({blogs}) => {
   const [page, setPage] = useState(1);
   const postCount = blogs.length;
   const showPerPage = 4;
   const [visibleIndex, setVisibleIndex] = useState(0)
   const handleChange = (event, value) => {
      setPage(value);
      setVisibleIndex((value-1) * showPerPage)
   };

   return <div>
      <h1>Blog</h1>
      <BlogPost />

      <div className='flex flex-wrap'>
         {blogs.slice(visibleIndex, visibleIndex+showPerPage).map(i =>
            <BlogCard
               key={uuidv4()}
               {...i}
            />
         )}
      </div>
      {postCount > showPerPage &&
         <div className='flex justify-center'>
            <Pagination count={Math.ceil(postCount/showPerPage)} page={page} onChange={handleChange} />
         </div>

      }

   </div>
}

export default Page;



export const getServerSideProps = async (ctx) => {
   const blogs = await prisma.blogs.findMany();

   return {
      props: {
         blogs: blogs,
         typeLayout: 'dashboard',
      },
   };
};