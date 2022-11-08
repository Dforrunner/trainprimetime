import {useState, useEffect} from 'react';
import {BlogPost, BlogCardHorizontal} from "../../../../components/core/Blog";
import prisma from "../../../../prisma";
import {v4 as uuidv4} from "uuid";
import Pagination from '@mui/material/Pagination';
import Dropdown from "../../../../components/core/Dropdown";
import Typography from '@mui/material/Typography';
import {MultipleSelectDropdown} from "../../../../components/core";

const Page = ({posts = [], categoryList}) => {
   const [postList, setPostList] = useState(posts)
   const [page, setPage] = useState(1);
   const [showPerPage, setShowPerPage] = useState(3)
   const postCount = postList.length;
   const [visibleIndex, setVisibleIndex] = useState(0)
   const [statusFilter, setStatusFilter] = useState('');
   const [categoryFilter, setCategoryFilter] = useState([])

   const handleChange = (event, value) => {
      setPage(value);
      setVisibleIndex((value - 1) * showPerPage)
   };

   useEffect(() => {
      const filter = [...posts].filter(post => {
         let isStatus = true;
         let isCategory = true;
         if(statusFilter)
            isStatus =
               (statusFilter === 'Un-Published' && !post.publish) ||
               (statusFilter === 'Published' && post.publish);

         if(categoryFilter.length)
            isCategory = categoryFilter.every(category => post.categories.includes(category))

         return isStatus && isCategory
      })

      setPostList(filter)
   }, [statusFilter, categoryFilter])

   return <div>

      <div className='flex justify-between items-center'>
         <div className='flex items-center'>
            <Typography mr={2}>
               Filter:
            </Typography>
            <Dropdown
               label={'Status'}
               options={['Published', 'Un-Published']}
               onChange={val => setStatusFilter(val)}
            />

            <MultipleSelectDropdown
               label={'Category'}
               options={categoryList}
               onChange={val => setCategoryFilter(val)}
            />
         </div>

         <BlogPost/>
      </div>


      <div className='flex flex-wrap justify-center'>
         {postList.slice(visibleIndex, visibleIndex + showPerPage).map(i =>
            <BlogCardHorizontal
               key={uuidv4()}
               {...i}
            />
         )}
      </div>

      {postCount > showPerPage &&
      <div className='flex justify-center'>
         <Pagination
            count={Math.ceil(postCount / showPerPage)}
            page={page}
            onChange={handleChange}
         />
      </div>

      }

   </div>
}

export default Page;


export const getServerSideProps = async (ctx) => {
   const [posts, categories, tags] = await prisma.$transaction([
      prisma.post.findMany(),
      prisma.category.findMany(),
      prisma.tag.findMany()
   ]);

   const categoryList = categories.map(i => i.name);
   const tagList = tags.map(i => i.name)

   return {
      props: {
         posts,
         categoryList,
         tagList,
         typeLayout: 'dashboard',
      }
   }
};