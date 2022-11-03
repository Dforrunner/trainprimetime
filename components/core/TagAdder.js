import {Cancel} from "@mui/icons-material";
import {Stack, TextField} from "@mui/material";
import {Box} from "@mui/system";
import {useState} from "react";
import AddIcon from '@mui/icons-material/Add';

const Tags = ({data, handleDelete}) => {
   return (
      <Box className='rounded py-1 px-3 border-[1px] border-third text-third min-w-[50px]'>
         <Stack direction='row' gap={1} className='group relative w-full'>
            <span className='text-center w-full'>{data}</span>
            <span className='hidden group-hover:inline absolute left-0 top-0 bg-white w-full text-center cursor-pointer'
                  onClick={() => {
                     handleDelete(data);
                  }}
            >
               <Cancel color='third'/>
            </span>

         </Stack>
      </Box>
   );
};

const TagAdder = ({onChange = () => {}}) => {
   const [tags, setTags] = useState([]);
   const [value, setValue] = useState('');

   const addTag = val => {
      if (val.replace(' ', '').length)
         setTags([...tags, val]);
         onChange(tags);
      setValue('');
   }

   const handleDelete = (value) => {
      const newtags = tags.filter((val) => val !== value);
      setTags(newtags);
   };

   const handleChange = (e) =>
      setValue(e.target.value)

   const handleAdd = () =>
      addTag(value)

   const handleKeyDown = e => {
      if (e.key === 'Enter') {
         e.preventDefault();
         addTag(e.target.value)
      }
   };

   return (
      <div className='border-[1px] border-[rgba(0,0,0,0.2)] rounded p-3'>
         <div className='my-3 flex flex-wrap gap-1'>
            {tags.length
               ? tags.map((data, index) =>
                  <Tags data={data} handleDelete={handleDelete} key={index}/>
               )
               : 'Add Tags'
            }
         </div>

         <TextField
            fullWidth
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder={"Enter tags"}
            helperText='Press enter to add the tags. Click on the tag to remove it. These are be used to filter posts'
            InputProps={{
               startAdornment: <span className='text-third mr-3 cursor-pointer' onClick={handleAdd}><AddIcon /></span>,
            }}
         />


      </div>
   );
}

export default TagAdder;