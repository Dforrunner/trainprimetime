import {useEffect, useState} from "react";
import {Chip} from "@mui/material";
import {v4 as uuidv4} from "uuid";
import CheckIcon from "@mui/icons-material/Check";

const PillSelector = ({
                         data = [],
                         selectedData,
                         onChange = () => '',
                         noDataMessage = ''
}) => {
   const [selected, setSelected] = useState([]);

   const isSelected = name => {
      if(selectedData && selectedData.length)
         return selectedData.includes(name) || selected.includes(name)
      else
         return selected.includes(name)
   }

   const handleClick = name => {
      //ADD/REMOVE categories
      if (selected.length && isSelected(name)) {

         const filter = selectedData && selectedData.length
            ? selectedData.filter(i => i !== name)
            : selected.filter(i => i !== name)

         setSelected(filter)
      } else {
         setSelected([...selected, name])
      }
   }

   //Update onChange function param everytime selected categories change
   useEffect(() => {
      onChange(selected);
   }, [selected])

   return (
      <div className={'flex flex-wrap gap-1 mt-2'}>
         {data.length
            ? data.map(name => {
               const checked = isSelected(name);
               return <Chip
                  key={uuidv4()}
                  label={name}
                  variant={checked ? 'soft' : 'plain'}
                  color={checked ? 'primary' : 'secondary'}
                  icon={checked ? <CheckIcon sx={{zIndex: 1, pointerEvents: 'none'}}/> : <></>}
                  onClick={() => handleClick(name)}
               />
            })
            : noDataMessage
         }
      </div>
   );
}


export default PillSelector;