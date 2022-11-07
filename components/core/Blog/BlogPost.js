import {useState, useEffect} from 'react';
import {CategorySelector, Editor, TagAdder} from '../../../components/core';
import Button from '@mui/material/Button';
import dayjs from 'dayjs';
import Drawer from '@mui/material/Drawer';
import {Card, TextField, Typography} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton'
import {DesktopDatePicker} from '@mui/x-date-pickers/DesktopDatePicker';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import UploadIcon from '@mui/icons-material/Upload';
import Checkbox from '@mui/material/Checkbox';

const CustomInput = (props) =>
   <TextField
      {...props}
      variant='outlined'
      className='w-full'
   />

const saveBlog = async (blog) => {
   const response = await fetch('/api/blog/create', {
      method: 'POST',
      body: JSON.stringify(blog)
   })

   return await response.json();
}

const Blog = ({
                 handleSubmit,
                 setContent,
                 slugError,
                 setSlugError
              }) => {

   const [value, setValue] = useState(dayjs());
   const [schedulePublication, setSchedulePublication] = useState(false);
   const [selectedTags, setSelectedTags] = useState([]);
   const [selectedCategories, setSelectedCategories] = useState([]);
   const [existingTags, setExistingTags] = useState([]);
   const [existingCategories, setExistingCategories] = useState([]);

   const handleChange = (newValue) => {
      setValue(newValue);
   };

   const handleSchedule = (event) => {
      setSchedulePublication(event.target.checked);
   };

   const handleCategories = (data) =>
      setSelectedCategories(data)

   const onSubmit = e =>
      handleSubmit(e, {tags: selectedTags, categories: selectedCategories})


   useEffect(() => {
      fetch('/api/blog/get/filters')
         .then(res => res.json())
         .then(res => {
            const {status, data, message} = res;

            if (status === 'error')
               return console.error(message);

            setExistingCategories(data.categories);
            setExistingTags(data.tags);
         })
         .catch(console.error)
   }, [])

   return <form id={'blogPostForm'} onSubmit={onSubmit}>
      <Card className='py-5 px-10 my-5 w-full space-y-5'>
         <CustomInput
            required
            label='Title'
            name='title'
            helperText='Name your blog post!'
         />

         <CustomInput
            required
            error={slugError.status === 'error'}
            label='Slug'
            name='slug'
            helperText={
               slugError.status === 'error'
                  ? slugError.message
                  : 'Select a slug for this blog post, such as post-1, post-2, etc. NOTE: must be unique'
            }
            onKeyPress={() => setSlugError('')}
         />

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

         <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
               label='Article Date'
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

            <div className='border-[1px] border-[rgba(0,0,0,0.2)] rounded p-3'>

               <div className='flex items-center '>
                  <Checkbox checked={schedulePublication} onChange={handleSchedule}/>
                  Schedule to publish on a future date
               </div>

               {schedulePublication &&
               <div className='mt-4'>
                  <DesktopDatePicker
                     label='Schedule Publish Date'
                     inputFormat='MM/DD/YYYY'
                     value={value}
                     onChange={handleChange}
                     renderInput={(params) => <CustomInput
                        required
                        label='Date'
                        name='publishDate'
                        helperText='When do you want this post to be published?'
                        {...params}
                     />}
                  />
               </div>
               }
            </div>
         </LocalizationProvider>

         <TagAdder
            existingTags={existingTags}
            onChange={tags => setSelectedTags(tags)}
         />

         <CategorySelector
            categories={existingCategories}
            onChange={handleCategories}
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

const BlogDrawer = ({
                       handleSubmit,
                       setContent,
                       slugError,
                       setSlugError,
                       handlePublish,
                       open,
                       setOpen
                    }) => {

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

      <div className='w-full'>
         <Blog
            handleSubmit={handleSubmit}
            setContent={setContent}
            slugError={slugError}
            setSlugError={setSlugError}
         />
      </div>
   </Drawer>
}

const BlogPost = () => {
   const [openBlogDrawer, setOpenBlogDrawer] = useState(false);
   const [publish, setPublish] = useState(false);
   const [content, setContent] = useState('');
   const [slugError, setSlugError] = useState('');

   const handlePublish = () =>
      setPublish(true)


   const handleSubmit = async (e, filters) => {
      e.preventDefault();

      const getVal = (name) => e.target.elements[name].value

      const data = {
         title: getVal('title'),
         slug: getVal('slug'),
         date: getVal('date'),
         excerpt: getVal('excerpt'),
         author: getVal('author'),
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


      return
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