import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const TooltipButton = ({title = '', icon, ...rest}) => {
   return (
      <Tooltip title={title}>
         <IconButton {...rest}>
            {icon}
         </IconButton>
      </Tooltip>
   );
}

export default TooltipButton;