import {TextField} from "@mui/material";
import {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import RemovablePill from './RemovablePill';

const TagAdder = ({existingTags, onChange = () => {}}) => {
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
                  <RemovablePill text={data} handleDelete={handleDelete} key={index}/>
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