import {useEffect, useState} from 'react'
import {useQuill} from 'react-quilljs' //https://www.npmjs.com/package/react-quilljs
import 'quill/dist/quill.snow.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from "@mui/icons-material/Add";
import {Chip} from "@mui/material";

const modules = {
   toolbar: {
      container: [
         [
            {header: 1},
            {header: 2},
            {font: []}
         ],
         [{size: []}],
         ['direction', 'align', 'bold', 'italic', 'underline', 'strike', 'blockquote'],
         [{'color': []}, {background: []}],
         [
            {list: 'ordered'},
            {list: 'bullet'},
            {indent: '-1'},
            {indent: '+1'},
         ],
         ['link', 'image', 'video', 'code-block'],
         ['clean']
      ]
   },
   clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
   },
}

const Editor = ({setContent = () => ''}) => {
   const {quill, quillRef} = useQuill({modules, placeholder: 'Blog content...'});
   const [open, setOpen] = useState(false);
   const [html, setHtml] = useState('');

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   const insertHtml = () => {
      quill.clipboard.dangerouslyPasteHTML(html)
      setOpen(false)
      setHtml('')
   }

   useEffect(() => {
      if (quill)
         quill.on('text-change', () => setContent(quill.root.innerHTML));
   }, [quill])

   return <div className='relative'>
      <div className='absolute right-2 top-[-40px]'>
         <Chip
            label={'Insert Template'}
            icon={<AddIcon />}
            color='third'
            onClick={handleClickOpen}
         />
      </div>


      <Dialog open={open} onClose={handleClose}>
         <DialogTitle>Insert Template</DialogTitle>
         <DialogContent>
            <DialogContentText>
               Copy and paste your HTML template below, then click the Insert button to add it to the editor.
            </DialogContentText>
            <TextField
               autoFocus
               fullWidth
               placeholder={'Paste your html code here...'}
               multiline
               rows={10}
               value={html}
               onChange={e => setHtml(e.target.value)}
            />
         </DialogContent>
         <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={insertHtml}>Insert</Button>
         </DialogActions>
      </Dialog>

      <div className='h-[400px] border-[1px] border-[rgba(0,0,0,0.1)] rounded overflow-hidden bg-white text-black'>
         <div className='h-[90%] w-full'>
            <div ref={quillRef}/>
         </div>
      </div>
   </div>


}


export default Editor;