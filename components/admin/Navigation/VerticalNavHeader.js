// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Logo from "../../user/Logo";

// ** Styled Components
const MenuHeaderWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingRight: theme.spacing(4.5),
  transition: 'padding .25s ease-in-out',
  minHeight: theme.mixins.toolbar.minHeight
}))


const VerticalNavHeader = props => {
  // ** Props
  const { verticalNavMenuBranding: userVerticalNavMenuBranding } = props

  return (
    <MenuHeaderWrapper className='nav-header' sx={{ pl: 4 }}>
      {userVerticalNavMenuBranding ? (
        userVerticalNavMenuBranding(props)
      ) : (
        <Link href={'/admin/dashboard'}>
            <span className={'w-full flex justify-center items-center'}>
                <span className={'h-[50px] w-[150px]'}>
                  <Logo />
                </span>

            </span>
        </Link>
      )}
    </MenuHeaderWrapper>
  )
}

export default VerticalNavHeader
