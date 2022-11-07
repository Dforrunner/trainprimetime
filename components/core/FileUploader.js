import {useState} from "react";
import Button from '@mui/material/Button';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import AttachFileIcon from '@mui/icons-material/AttachFile';

//Convert files to base64
const convertToBase64 = file => new Promise((resolve, reject) => {
   const reader = new FileReader();
   reader.readAsDataURL(file);
   reader.onload = () => resolve(reader.result);
   reader.onerror = error => reject(error);
});

const FileUploader = ({
                         title = 'Upload',
                         showFilename = false,
                         toBase64 = false,
                         onChange
}) => {
   const [attachment, setAttachment] = useState(null);

   const handleChange = async (event) => {
      let file = event.target.files[0];
      setAttachment(file);

      if(toBase64)
         file = await convertToBase64(file)

      if (!!onChange)
         onChange(file);
   };

   return (
      <div className='flex items-center gap-2'>
         <Button variant='contained' component='label' startIcon={<PhotoCamera />}>
            {title}
            <input hidden accept='image/*' multiple type='file' onChange={handleChange}/>
         </Button>
         {attachment?.name && showFilename &&
         <span>
               <AttachFileIcon/>
            {attachment?.name}
            </span>
         }


      </div>
   );
};

export default FileUploader;
