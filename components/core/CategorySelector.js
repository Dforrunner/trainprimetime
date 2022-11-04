import CheckIcon from '@mui/icons-material/Check';
import {Chip, Typography} from '@mui/material';
import {useEffect, useState} from 'react';
import AddIcon from '@mui/icons-material/Add';
import {v4 as uuidv4} from "uuid";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const AddCategoryDialog = ({onAdd = () => ''}) => {
   const [open, setOpen] = useState(false);
   const [categoryName, setCategoryName] = useState('');
   const [error, setError] = useState('');
   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   const handleChange = e => {
      setCategoryName(e.target.value);
      setError('');
   }


   const handleAddCategory = () => {
      //Check to make sure user is adding some string
      if(!categoryName.replace(' ', '').length){
         setError('Add a category name before adding')
         setCategoryName('');
         return
      }

      fetch('/api/blog/categories/create', {
         method: 'POST',
         body: JSON.stringify({categoryName})
      })
         .then(res => res.json())
         .then(({status, message}) => {
            if(status === 'error')
               return setError(message)

            setError('')
            setOpen(false)
            onAdd(categoryName)
            setCategoryName('')
         })
         .catch(console.error)
   }

   return (
      <div>
         <Chip
            label={'Create Category'}
            icon={<AddIcon />}
            color='third'
            onClick={handleClickOpen}
         />

         <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Create New Category</DialogTitle>
            <DialogContent>
               <DialogContentText>
                  Enter the name of the new category you'd like to create.
               </DialogContentText>
               <TextField
                  autoFocus
                  margin="dense"
                  label="Category name"
                  fullWidth
                  variant="standard"
                  value={categoryName}
                  onChange={handleChange}
                  error={!!error.length}
                  helperText={error}
               />
            </DialogContent>
            <DialogActions>
               <Button onClick={handleClose}>Cancel</Button>
               <Button onClick={handleAddCategory}>Add</Button>
            </DialogActions>
         </Dialog>
      </div>
   );
}


export default function CategorySelector({categories = [], onChange = () => ''}) {
   const [selected, setSelected] = useState([]);
   const [categoryList, setCategoryList] = useState([])

   const handleClick = val => {
      if (selected.includes(val)) {
         const filter = selected.filter(i => i !== val)
         setSelected(filter)
      } else {
         setSelected([...selected, val])
      }
      onChange(selected);
   }

   const handleAddNewCategory = newCategory => {
      console.log({newCategory})
      setCategoryList([...categoryList, newCategory])
      setSelected([...selected, newCategory])
   }

   useEffect(() => {
      if(categories.length){
         //Get names, capitalize them, then add them into an array
         const names = categories.reduce((acc, {name}) => {
            const capitalized = name[0].toUpperCase() + name.slice(1)
            acc.push(capitalized)
            return acc
         }, [])
         setCategoryList(names)
      }
   }, [categories])

   return (
      <div className='border-[1px] border-[rgba(0,0,0,0.2)] rounded p-3'>

         <div className='flex justify-between items-center w-full '>
            <Typography fontWeight='md' fontSize='lg' id='fav-movie' mb={2}>
               Select Categories
            </Typography>
            <AddCategoryDialog onAdd={handleAddNewCategory}/>
         </div>

         <div className={'flex flex-wrap gap-1'}>
            {categoryList.length

               ? categoryList.map(name => {
                  const checked = selected.includes(name);
                  return <Chip
                     key={uuidv4()}
                     label={name}
                     variant={checked ? 'soft' : 'plain'}
                     color={checked ? 'primary' : 'secondary'}
                     icon={checked && <CheckIcon sx={{zIndex: 1, pointerEvents: 'none'}}/>}
                     onClick={() => handleClick(name)}
                  />
               })

               : "Categories haven't been created"
            }
         </div>
         <p className='text-[12px] text-grey-600 ml-2 mt-1'>
            What categories should this post be assigned to? Select by clicking on the category
         </p>
      </div>
   );
}
