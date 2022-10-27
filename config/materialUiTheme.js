import { createTheme } from '@mui/material/styles';
import themeConfig from "./themeConfig";

// Create a theme instance.
const theme = createTheme({
   palette: {
      primary: {
         main: themeConfig.colors.primary,
      },
      secondary: {
         main: themeConfig.colors.secondary,
      }
   },
});

export default theme;