import {useState} from 'react';
import {Editor} from '../../../../components/core';
import Button from '@mui/material/Button'
import {Card, TextField, Typography} from '@mui/material';

const CustomInput = (props) =>
   <TextField
      {...props}
      variant='outlined'
      className='w-full'
   />

const Page = () => {
   const [content, setContent] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();

      const getVal = (name) => e.target.elements[name].value

      const data = {
         title: getVal('title'),
         slug: getVal('slug'),
         date: getVal('date'),
         excerpt: getVal('excerpt'),
         author: getVal('author'),
         content
      }
      console.log(data)
   }

   return <div>
      <h1>Blog</h1>
      <form onSubmit={handleSubmit}>
         <Card className='p-5 my-5 w-full space-y-5'>
            <CustomInput
               required
               label='Title'
               name='title'
               helperText='Name your blog post!'
            />
            <CustomInput
               required
               label='Slug'
               name='slug'
               helperText='Select a slug for this blog post, such as post-1, post-2, etc.'
            />
            <CustomInput
               label='Date'
               name='date'
               helperText='What is the published date you would like to show for this post?'
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


         </Card>
         <Card className='p-5'>
            <div className='pb-5'>
               <Typography variant='h6'>Content</Typography>
               <Typography className='text-sm' variant='p'>Write your blog post!</Typography>
            </div>

            <Editor getHtmlContent={setContent}/>
         </Card>


         <div className='w-full flex justify-end py-3'>
            <Button variant='contained' type={'submit'}>Save Blog</Button>
         </div>
      </form>
   </div>
}

export default Page;


export const getServerSideProps = async (ctx) => {
   return {
      props: {
         typeLayout: 'dashboard',
      },
   };
};