import {DocHead} from "../../components/user";
import prisma from "../../prisma";
import {BlogCard} from "../../components/core/Blog";
import {v4 as uuidv4} from 'uuid';
import {HeaderSection} from "../../components/user/Sections";
import {useState, useEffect} from "react";
import Pagination from '@mui/material/Pagination';
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Magnify from "mdi-material-ui/Magnify";
import PillSelector from "../../components/core/PillSelector";


const Blog = ({posts, categoryList, tagList}) => {
   const [page, setPage] = useState(1);
   const [filterPosts, setFilterPosts] = useState(posts);
   const postCount = filterPosts.length;
   const showPerPage = 6;
   const [visibleIndex, setVisibleIndex] = useState(0)
   const [selectedCategories, setSelectedCategories] = useState([]);
   const [selectedTags, setSelectedTags] = useState([]);

   const handleChange = (event, value) => {
      setPage(value);
      setVisibleIndex((value - 1) * showPerPage)
   };

   const handleCategoryChange = data =>
      setSelectedCategories(data)

   const handleTagChange = data =>
      setSelectedTags(data)

   useEffect(() => {
      const filtered = [...posts].filter(post => {
         let hasCategory = true;
         let hasTags = true;
         if(selectedCategories.length)
            hasCategory = selectedCategories.every(i => post.categories.includes(i))
         if(selectedTags.length)
            hasTags = selectedTags.every(i => post.tags.includes(i))

         return hasCategory && hasTags
      })

      setFilterPosts(filtered)
   }, [selectedTags, selectedCategories])

   return <>
      <DocHead title='Blog - PrimeTime Personal Training'/>

      <div className='flex flex-col md:flex-row w-full flex-grow-1'>

         <div className='flex flex-col w-full md:w-[300px]'>
            <h1 className='w-full p-5 text-center bg-secondary text-white font-bold' >
               PRIMETIME BLOG
            </h1>

            <p className='text-sm p-5 text-grey-600 italic'>
               Taking your fitness and nutrition education to the next level!
            </p>

            <div className='px-5'>
               <div className='w-full font-bold text-center border-b-[1px]'>
                  Filter Posts
               </div>

               <div className='mt-5'>
                  <div className='text-sm font-bold'>
                     Category:
                  </div>
                  <PillSelector
                     data={categoryList}
                     onChange={handleCategoryChange}
                  />
               </div>

               <div className='mt-5'>
                  <div className='text-sm font-bold'>
                     Tags:
                  </div>
                  <PillSelector
                     data={tagList}
                     onChange={handleTagChange}
                  />
               </div>
            </div>

            <div className='inline-block md:hidden text-center pt-5 text-2xl'>
               BLOG POSTS
            </div>
         </div>

         <div className={'w-full'}>
            {postCount
               ? <div className={'w-full flex flex-wrap justify-center bg-white text-black p-5'}>

                  {filterPosts.slice(visibleIndex, visibleIndex + showPerPage).map(i =>
                     <BlogCard
                        key={uuidv4()}
                        {...i}
                     />
                  )}
               </div>
               : <div className='text-3xl p-5 min-h-[480px]'>No post found...</div>
            }

            {postCount > showPerPage &&
            <div className='flex justify-center my-10'>
               <Pagination count={Math.ceil(postCount / showPerPage)} page={page} onChange={handleChange}/>
            </div>
            }
         </div>


      </div>
   </>
}

export const getStaticProps = async () => {
   const [posts, categories, tags] = await prisma.$transaction([
      prisma.post.findMany({
         where: {
            publish: true
         }
      }),

      prisma.category.findMany(),
      prisma.tag.findMany()
   ]);

   const categoryList = categories.map(i => i.name);
   const tagList = tags.map(i => i.name)

   return {
      props: {
         posts,
         categoryList,
         tagList
      }
   }
}

export default Blog;