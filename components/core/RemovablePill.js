import Chip from '@mui/material/Chip';

const RemovablePill = ({text, handleDelete}) => {
   const del = () =>
      handleDelete(text)

   return <Chip
      label={text}
      variant="solid"
      color='primary'
      onClick={del}
      onDelete={del}
   />
}

export default RemovablePill;