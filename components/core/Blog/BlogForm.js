import {useEffect, useState} from "react";
import dayjs from "dayjs";
import {Card, TextField, Typography} from "@mui/material";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DesktopDatePicker} from "@mui/x-date-pickers/DesktopDatePicker";
import Checkbox from "@mui/material/Checkbox";
import {CategorySelector, Editor, TagAdder} from "../index";
import FileUploader from "../FileUploader";

const CustomInput = (props) =>
   <TextField
      {...props}
      variant='outlined'
      className='w-full'
   />

const BlogForm = ({
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
   const [img, setImg] = useState(null);

   const handleImgUpload = file =>
      setImg(file)

   const handleChange = (newValue) => {
      setValue(newValue);
   };

   const handleSchedule = (event) => {
      setSchedulePublication(event.target.checked);
   };

   const handleCategories = (data) =>
      setSelectedCategories(data)

   const onSubmit = e =>
      handleSubmit(e, {tags: selectedTags, categories: selectedCategories}, img)


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

         <div className='border-[1px] border-[rgba(0,0,0,0.2)] rounded p-3'>
            <Typography mb={2}>
               Header Image
            </Typography>

            <FileUploader
               onChange={handleImgUpload}
               showFilename={true}
               toBase64={true}
            />

            <p className='text-[12px] text-grey-600 ml-2 mt-1'>
               Select a header image for you post. This will also be used for the thumbnails
            </p>
         </div>

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

export default BlogForm;