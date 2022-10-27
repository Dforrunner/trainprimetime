import Image from "next/image";
import Link from 'next/link'
import {useRouter} from 'next/router'
import {useState} from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import {styled, useTheme} from '@mui/material/styles'
import MuiCard from '@mui/material/Card'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel from '@mui/material/FormControlLabel'
import themeConfig from '../../config/themeConfig'
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'
import Logo from "../../components/user/Logo";

// ** Styled Components
const Card = styled(MuiCard)(({theme}) => ({
   [theme.breakpoints.up('sm')]: {width: '28rem'}
}))

const LinkStyled = styled('a')(({theme}) => ({
   fontSize: '0.875rem',
   textDecoration: 'none',
   color: theme.palette.primary.main
}))

const FormControlLabel = styled(MuiFormControlLabel)(({theme}) => ({
   '& .MuiFormControlLabel-label': {
      fontSize: '0.875rem',
      color: theme.palette.text.secondary
   }
}))

const LoginPage = () => {
   // ** State
   const [values, setValues] = useState({
      password: '',
      showPassword: false
   })

   // ** Hook
   const theme = useTheme()
   const router = useRouter()

   const handleChange = prop => event => {
      setValues({...values, [prop]: event.target.value})
   }

   const handleClickShowPassword = () => {
      setValues({...values, showPassword: !values.showPassword})
   }

   const handleMouseDownPassword = event => {
      event.preventDefault()
   }

   return (
      <Box className='w-screen h-screen bg-white flex justify-center items-center'>
         <Card className={'drop-shadow-[0_0_5px_rgba(0,0,0,0.3)]'}>
            <CardContent className='py-20 px-10'>
               <Box className='h-[100px] flex justify-center my-10'>
                  <Logo/>
               </Box>
               <Box sx={{mb: 6}}>
                  <Typography variant='h5' sx={{fontWeight: 600, marginBottom: 1.5}}>
                     PrimeTime Admin Dashboard
                  </Typography>
                  <Typography variant='body2'>Please sign-in to access PrimeTime admin dashboard</Typography>
               </Box>
               <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
                  <TextField autoFocus fullWidth id='email' label='Email' sx={{marginBottom: 4}}/>
                  <FormControl fullWidth>
                     <InputLabel htmlFor='auth-login-password'>Password</InputLabel>
                     <OutlinedInput
                        label='Password'
                        value={values.password}
                        id='auth-login-password'
                        onChange={handleChange('password')}
                        type={values.showPassword ? 'text' : 'password'}
                        endAdornment={
                           <InputAdornment position='end'>
                              <IconButton
                                 edge='end'
                                 onClick={handleClickShowPassword}
                                 onMouseDown={handleMouseDownPassword}
                                 aria-label='toggle password visibility'
                              >
                                 {values.showPassword ? <EyeOutline/> : <EyeOffOutline/>}
                              </IconButton>
                           </InputAdornment>
                        }
                     />
                  </FormControl>
                  <Box className='mb-5 flex items-center justify-between flex-wrap'>
                     <FormControlLabel control={<Checkbox/>} label='Remember Me'/>
                     <Link passHref href='/'>
                        <LinkStyled onClick={e => e.preventDefault()}>Forgot Password?</LinkStyled>
                     </Link>
                  </Box>
                  <Button
                     fullWidth
                     size='large'
                     variant='contained'
                     sx={{marginBottom: 7}}
                     onClick={() => router.push('/')}
                  >
                     Login
                  </Button>
               </form>
            </CardContent>
         </Card>
      </Box>
   )
}

export default LoginPage;

export const getServerSideProps = async (ctx) => {
   return {
      props: {
         typeLayout: 'admin',
      },
   };
};