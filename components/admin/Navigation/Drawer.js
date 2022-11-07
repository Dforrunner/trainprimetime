// ** MUI Imports
import {styled, useTheme} from '@mui/material/styles'
import MuiSwipeableDrawer from '@mui/material/SwipeableDrawer'
import Box from '@mui/material/Box';

const SwipeableDrawer = styled(MuiSwipeableDrawer)({
   overflowX: 'hidden',
   transition: 'width .25s ease-in-out',
   '& ul': {
      listStyle: 'none'
   },
   '& .MuiListItem-gutters': {
      paddingLeft: 4,
      paddingRight: 4
   },
   '& .MuiDrawer-paper': {
      left: 'unset',
      right: 'unset',
      overflowX: 'hidden',
      transition: 'width .25s ease-in-out, box-shadow .25s ease-in-out',
   }
})

const Drawer = props => {
   // ** Props
   const {hidden = false, children, navWidth, navVisible, setNavVisible} = props

   // ** Hook
   const theme = useTheme()

   const styles = {
      width: navWidth,
      '& .MuiDrawer-paper': {
         borderRight: 0,
         backgroundColor: theme.palette.background.default
      }
   }

   return (
      <>
         {hidden
            ? <SwipeableDrawer
               className='layout-vertical-nav'
               variant={'temporary'}
               open={navVisible}
               onOpen={() => setNavVisible(true)}
               onClose={() => setNavVisible(false)}
               ModalProps={{
                  keepMounted: true // Better open performance on mobile.
               }}
               PaperProps={{sx: {width: navWidth}}}
               sx={styles}
            >
               {children}
            </SwipeableDrawer>
            : <Box
               className='layout-vertical-nav'
               sx={styles}
            >
               {children}
            </Box>

         }

      </>

   )
}

export default Drawer
