import {useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {v4 as uuidv4} from 'uuid';
import * as React from "react";

const Dropdown = ({label, options, onChange}) => {
   const [val, setVal] = useState('');

   const handleChange = e => {
      setVal(e.target.value);
      onChange(e.target.value)
   };

   return (
      <Box sx={{ minWidth: 120 }}>
         <FormControl fullWidth>
            <InputLabel>{label}</InputLabel>
            <Select
               value={val}
               label={label || ''}
               onChange={handleChange}
            >
               <MenuItem value="">
                  <em>None</em>
               </MenuItem>
               {options.map(i =>
                  <MenuItem key={uuidv4()} value={i}>{i}</MenuItem>
               )}
            </Select>
         </FormControl>
      </Box>
   );
}

export default Dropdown;