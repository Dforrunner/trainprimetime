import {useState} from 'react';
import Button from '@mui/material/Button';
import BlogDrawer from "./BlogDrawer";


const saveBlog = async (blog) => {
   const response = await fetch('/api/blog/create', {
      method: 'POST',
      body: JSON.stringify(blog)
   })

   return await response.json();
}

const BlogPost = () => {
   const [openBlogDrawer, setOpenBlogDrawer] = useState(false);
   const [publish, setPublish] = useState(false);
   const [content, setContent] = useState('');
   const [slugError, setSlugError] = useState('');

   const handlePublish = () =>
      setPublish(true)


   const handleSubmit = async (e, filters, img) => {
      e.preventDefault();

      const getVal = (name) => e.target.elements[name].value

      const data = {
         title: getVal('title'),
         slug: getVal('slug'),
         date: getVal('date'),
         excerpt: getVal('excerpt'),
         author: getVal('author'),
         img,
         ...filters,
         content,
         publish
      }

      //Saving the data
      const res = await saveBlog(data)

      //Handling error responses
      if (res.status === 'error' && res.field === 'slug')
         setSlugError(res);
      else
         setSlugError('')

      //If Publish button is clicked then the drawer can be closed once the data has been saved to the DB and published
      if (publish)
         setOpenBlogDrawer(false);
   }

   return <>
      <Button onClick={() => setOpenBlogDrawer(true)} variant='contained'>Create New Post</Button>
      <BlogDrawer
         handleSubmit={handleSubmit}
         setContent={setContent}
         slugError={slugError}
         setSlugError={setSlugError}
         handlePublish={handlePublish}
         open={openBlogDrawer}
         setOpen={setOpenBlogDrawer}
      />
   </>
}
export default BlogPost;