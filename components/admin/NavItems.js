import HomeOutline from 'mdi-material-ui/HomeOutline'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'

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
         sectionTitle: 'User Interface'
      }
   ]
}

export default navigation
