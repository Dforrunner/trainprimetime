import {useState, useEffect} from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const MenuProps = {
   PaperProps: {
      style: {
         maxHeight: ITEM_HEIGHT * 8 + 10,
         width: 350,
      }
   }
};

const MultipleSelectDropdown = ({label, options = [], onChange = ()=>{}}) => {
   const [val, setVal] = useState([]);

   const handleChange = e => {
      const value = e.target.value;

      setVal(
         // On autofill we get a stringified value.
         typeof value === 'string' ? value.split(',') : value,
      );
   };

   useEffect(() => {
      onChange(val)
   }, [val])

   return (
      <div>
         <FormControl sx={{m: 1, width: 400}}>
            <InputLabel>{label}</InputLabel>

            <Select
               multiple
               value={val}
               onChange={handleChange}
               input={<OutlinedInput label={label}/>}
               renderValue={selected => (
                  <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
                     {selected.map(val => (
                        <Chip key={val} label={val}/>
                     ))}
                  </Box>
               )}
               sx={{overflowY: 'auto', overflowX: 'hidden'}}
               MenuProps={MenuProps}
            >
               {options.map(name => (
                  <MenuItem key={name} value={name}>
                     <Checkbox checked={val.indexOf(name) > -1}/>
                     <ListItemText primary={name}/>
                  </MenuItem>
               ))}
            </Select>
         </FormControl>
      </div>

   );
}

export default MultipleSelectDropdown;
