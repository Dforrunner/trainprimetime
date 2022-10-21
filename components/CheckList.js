import {Checkmark} from "./Icons";
import { v4 as uuidv4 } from 'uuid';

const CheckList = ({list = [], className}) =>
   <ul className='h-full w-full flex flex-col justify-center'>
      {list.map(i =>
         <li
            key={uuidv4()}
            className={`flex items-center  border-[rgba(255,255,255,0.1)] border-y-[1px] 
                           hover:bg-black hover:text-white rounded ${className}`}>
            <Checkmark/>
            <span className='ml-2'>
                        {i}
                     </span>
         </li>
      )}
   </ul>

export default CheckList;