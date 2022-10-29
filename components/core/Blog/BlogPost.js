import {useEffect, useState} from 'react';
import {Editor} from '../../../components/core';
import Button from '@mui/material/Button';
import dayjs from 'dayjs';
import Drawer from '@mui/material/Drawer';
import {Card, TextField, Typography} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SaveIcon from '@mui/icons-material/Save';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import {DesktopDatePicker} from '@mui/x-date-pickers/DesktopDatePicker';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import UploadIcon from '@mui/icons-material/Upload';


const CustomInput = (props) =>
   <TextField
      {...props}
      variant='outlined'
      className='w-full'
   />

const saveBlog = async (blog) => {
   const response = await fetch('/api/blogs', {
      method: 'POST',
      body: JSON.stringify(blog)
   })

   return await response.json();

}

const Blog = ({handleSubmit, setContent, slugError}) => {
   const [value, setValue] = useState(dayjs());

   const handleChange = (newValue) => {
      setValue(newValue);
   };

   return <form id={'blogPostForm'} onSubmit={handleSubmit}>
      <Card className='py-5 px-10 my-5 w-full space-y-5'>
         <CustomInput
            required
            label='Title'
            name='title'
            helperText='Name your blog post!'
         />
         <CustomInput
            required
            error={slugError}
            label='Slug'
            name='slug'
            helperText={
               slugError
                  ? slugError.message
                  : 'Select a slug for this blog post, such as post-1, post-2, etc. NOTE: must be unique'
            }
         />
         <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
               label='Date desktop'
               inputFormat='MM/DD/YYYY'
               value={value}
               onChange={handleChange}
               renderInput={(params) => <CustomInput
                  required
                  label='Date'
                  name='date'
                  helperText='What is the published date you would like to show for this post?'
                  {...params}
               />}
            />
         </LocalizationProvider>
         <CustomInput
            label='Excerpt'
            name='excerpt'
            helperText='Add a short excerpt to summarize this post'
            multiline
            rows={4}
         />

         <CustomInput
            label='Author'
            name='author'
            helperText='Who should be credited for this post?'
         />


      </Card>
      <Card className='py-5 px-10'>
         <div className='pb-5'>
            <Typography variant='h6'>Content</Typography>
            <Typography className='text-sm' variant='p'>Write your blog post!</Typography>
         </div>

         <Editor setContent={setContent}/>
      </Card>
   </form>
}

const BlogDrawer = ({handleSubmit, setContent, slugError, saved, handleSave, handlePublish, open, setOpen}) => {


   const handleOpen = () =>
      setOpen(true);


   const handleClose = () =>
      setOpen(false);

   return <Drawer
      anchor={'right'}
      open={open}
      onClose={() => setOpen(false)}
   >
      <AppBar sx={{position: 'sticky', top: 0, padding: '0 10px 0 10px'}}>
         <Toolbar>
            <IconButton
               edge='start'
               color='inherit'
               onClick={handleClose}
               aria-label='close'
            >
               <CloseIcon/>
            </IconButton>
            <Typography sx={{ml: 2, flex: 1, color: 'white'}} variant='h6' component='div'>
               Create a new blog post
            </Typography>
            <Button
               color='secondary'
               variant='contained'
               onClick={handleSave}
               startIcon={saved ? <DownloadDoneIcon /> : <SaveIcon/>}
               type={'submit'}
               form={'blogPostForm'}
               sx={{
                  marginRight: 2
               }}
            >
               Save
            </Button>

            <Button
               color='success'
               variant='contained'
               onClick={handlePublish}
               startIcon={<UploadIcon/>}
               type={'submit'}
               form={'blogPostForm'}
            >
               Publish
            </Button>
         </Toolbar>
      </AppBar>

      <div className='w-full md:w-[80vw]'>
         <Blog
            handleSubmit={handleSubmit}
            setContent={setContent}
            slugError={slugError}
         />
      </div>
   </Drawer>
}

const BlogPost = () => {
   const [openBlogDrawer, setOpenBlogDrawer] = useState(false);
   const [publish, setPublish] = useState(false);
   const [content, setContent] = useState('');
   const [slugError, setSlugError] = useState('');
   const [saved, setSaved] = useState(false);
   const [initialSave, setInitialSave] = useState(true);
   const [postID, setPostID] = useState(null);



   const handlePublish = () =>
      setPublish(true)


   const handleSave = (res) => {

      //If the id variable is set then we'll pass it in. This will indicate to the API that the data needs to be
      //updated rather then creating a new insert into the database. This will be set only if the save button is
      //pressed
      if(res.data)
         setPostID(res.data.id)

      setInitialSave(false);
      setPublish(false)
      setSaved(true);

      const timer = setTimeout(() =>{
         setSaved(false);
         clearTimeout(timer);
      }, 2000)
   }

   const handleSubmit = async (e) => {
      e.preventDefault();

      const getVal = (name) => e.target.elements[name].value

      const data = {
         id: postID,
         initialSave,
         blogData: {
            title: getVal('title'),
            slug: getVal('slug'),
            date: getVal('date'),
            excerpt: getVal('excerpt'),
            author: getVal('author'),
            content,
            publish,
         }
      }

      //Saving the data
      const res = await saveBlog(data)

      //Handling error responses
      if (res.status === 'error' && res.field === 'slug')
         setSlugError(res);
      else
         setSlugError('')

      //If publish is false then it means the Save button is clicked
      if(!publish)
         handleSave(res);

      //If Publish button is clicked then the drawer can be closed once the data has been saved to the DB and published
      if(publish)
         setOpenBlogDrawer(false);
   }

   return <>
      <Button onClick={() => setOpenBlogDrawer(true)} variant='contained'>Create New Blog</Button>
      <BlogDrawer
         handleSubmit={handleSubmit}
         setContent={setContent}
         slugError={slugError}
         saved={saved}
         handleSave={handleSave}
         handlePublish={handlePublish}
         open={openBlogDrawer}
         setOpen={setOpenBlogDrawer}
      />
   </>
}
export default BlogPost;


export const getServerSideProps = async (ctx) => {
   return {
      props: {
         typeLayout: 'dashboard',
      },
   };
};