import HomeOutline from 'mdi-material-ui/HomeOutline'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import WebIcon from '@mui/icons-material/Web';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const navigation = () => {
   return [
      {
         title: 'Dashboard',
         icon: HomeOutline,
         path: '/admin/dashboard'
      },
      {
         title: 'Account Settings',
         icon: AccountCogOutline,
         path: '/admin/dashboard/account-settings'
      },
      {
         sectionTitle: 'Pages'
      },
      {
         title: 'Blog',
         icon: WebIcon,
         path: '/admin/dashboard/blog'
      },
      {
         title: 'Schedule',
         icon: CalendarMonthIcon,
         path: '/admin/dashboard/schedule'
      },
      {
         title: 'Contact',
         icon: MailOutlineIcon,
         path: '/admin/dashboard/contact'
      },
      {
         sectionTitle: 'User Interface'
      }
   ]
}

export default navigation
