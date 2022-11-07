import {TextField, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import RemovablePill from './RemovablePill';
import Chip from '@mui/material/Chip';
import {v4 as uuidv4} from "uuid";
import CheckIcon from "@mui/icons-material/Check";

const TagAdder = ({existingTags, onChange = () => {}}) => {
   const [tags, setTags] = useState([]);
   const [selectedExistingTags, setSelectedExistingTags] = useState([])
   const [value, setValue] = useState('');

   const tagChecked = (key, val) =>
      selectedExistingTags.filter(i => i[key] === val).length;

   const addTag = val => {
      //Ensure tag is only selected once
      if (val.replace(' ', '').length){
         const tagExists = existingTags.filter(i => i.name === val)
         if(tagExists.length && !tagChecked('name', val)){
            setSelectedExistingTags([...selectedExistingTags, tagExists[0]])
         }else if(!tags.includes(val) && !tagChecked('name', val)){
            setTags([...tags, val]);
         }
      }
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

   const handleSelectExistingTag = data => {
      if(tagChecked('id', data.id)){
         const filter = selectedExistingTags.filter(i => i.id !== data.id);
         setSelectedExistingTags(filter)
      }else{
         setSelectedExistingTags([...selectedExistingTags, data])
      }
   }

   useEffect(() => {
      onChange({newTags: tags, existingTags: selectedExistingTags});
   }, [selectedExistingTags, tags])

   return (
      <div className='border-[1px] border-[rgba(0,0,0,0.2)] rounded p-3'>
         <div className='w-full'>
            <Typography>Add New Tags</Typography>
            <div className='my-3 flex flex-wrap gap-1'>
               {tags.map((data, index) =>
                  <RemovablePill text={data} handleDelete={handleDelete} key={index}/>
               )}
            </div>
         </div>

         <TextField
            fullWidth
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder={"Enter tags"}
            helperText='Press enter to add the tags. Click on the tag to remove it'
            InputProps={{
               startAdornment: <span className='text-third mr-3 cursor-pointer' onClick={handleAdd}><AddIcon /></span>,
            }}
         />

         <Typography mt={4}>
            Select From Existing Tags
         </Typography>

         <div className='flex gap-1 py-4'>
            {existingTags.map(i =>{
               const checked = tagChecked('name', i.name)
               return (
                  <Chip
                     key={uuidv4()}
                     label={i.name}
                     variant={checked ? 'soft' : 'plain'}
                     color={checked ? 'primary' : 'secondary'}
                     icon={checked && <CheckIcon sx={{zIndex: 1, pointerEvents: 'none'}}/>}
                     onClick={() => handleSelectExistingTag(i)}
                  />
               )
            })}
         </div>

         <p className='text-[12px] text-grey-600 ml-2 mt-1'>
            Add tags to your post. These will be used to filter posts and also added as SEO keywords
         </p>
      </div>
   );
}

export default TagAdder;