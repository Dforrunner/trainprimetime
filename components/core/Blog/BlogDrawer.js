import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import {Typography} from "@mui/material";
import Button from "@mui/material/Button";
import UploadIcon from "@mui/icons-material/Upload";
import BlogForm from "./BlogForm";

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
      PaperProps={{
         sx: {
            width: '100%',
         },
      }}
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
         <BlogForm
            handleSubmit={handleSubmit}
            setContent={setContent}
            slugError={slugError}
            setSlugError={setSlugError}
         />
      </div>
   </Drawer>
}

export default BlogDrawer;
