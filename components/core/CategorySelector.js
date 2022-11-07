import {Chip, Typography} from '@mui/material';
import {useEffect, useState} from 'react';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PillSelector from "./PillSelector";

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
         .then(({status, data, message}) => {
            if(status === 'error')
               return setError(message)

            setError('')
            setOpen(false)
            onAdd(data.name)
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


const CategorySelector = ({categories = [], onChange = () => ''}) => {
   const [selected, setSelected] = useState([]);
   const [categoryList, setCategoryList] = useState([])

   const handleChange = data =>
      setSelected(data)

   /**
    * @param newCategory :{id: int, name: string}
    */
   const handleAddNewCategory = newCategory => {
      setCategoryList([...categoryList, newCategory])
      setSelected([...selected, newCategory])
   }

   //Update category list state and re-render
   useEffect(() => {
      if(categories.length)
         setCategoryList(categories)
   }, [categories])

   //Update onChange function param everytime selected categories change
   useEffect(() => {
      onChange(selected);
   }, [selected])

   return (
      <div className='border-[1px] border-[rgba(0,0,0,0.2)] rounded p-3'>

         <div className='flex justify-between items-center w-full '>
            <Typography mb={2}>
               Select Categories
            </Typography>

            <AddCategoryDialog
               onAdd={handleAddNewCategory}
            />
         </div>

         <PillSelector
            data={categoryList}
            selectedData={selected}
            noDataMessage={'Categories haven\'t been created'}
            onChange={handleChange}
         />

         <p className='text-[12px] text-grey-600 ml-2 mt-1'>
            What categories should this post be assigned to? Select by clicking on the category
         </p>
      </div>
   );
}

export default CategorySelector;