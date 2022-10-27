import '../styles/globals.css'
import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import BlankLayout from "../layouts/BlankLayout";
import {SessionProvider} from "next-auth/react"
import { Router } from 'next/router'
import {CacheProvider} from '@emotion/react'
import {createEmotionCache} from '../utils/createEmotionCache';
import { SettingsConsumer, SettingsProvider } from '../context/settingsContext'
import NProgress from 'nprogress'
import themeConfig from '../config/themeConfig'
import ThemeComponent from '../theme/ThemeComponent'
import 'react-perfect-scrollbar/dist/css/styles.css'

const clientSideEmotionCache = createEmotionCache()

// ** Pace Loader
if (themeConfig.routingLoader) {
   Router.onRouteChangeStart = () => {
      NProgress.start();
   };

   Router.onRouteChangeComplete = () => {
      NProgress.done();
   };

   Router.onRouteChangeError = () => {
      NProgress.done();
   };
}

function MyApp({Component, pageProps, emotionCache = clientSideEmotionCache,}) {

   let Layout;

   if (pageProps.typeLayout === 'dashboard')
      Layout = DashboardLayout;
   else if (pageProps.typeLayout === 'admin')
      Layout = BlankLayout;
   else
      Layout = MainLayout;

   return <SessionProvider session={pageProps.session}>
      <CacheProvider value={emotionCache}>
         <SettingsProvider>
            <SettingsConsumer>
               {({ settings }) =>
                  <ThemeComponent settings={settings}>
                     <Layout>
                        <Component {...pageProps} />
                     </Layout>
                  </ThemeComponent>
               }
            </SettingsConsumer>
         </SettingsProvider>


      </CacheProvider>
   </SessionProvider>

}

export default MyApp
