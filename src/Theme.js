import {createTheme} from '@mui/material/styles';

const theme = createTheme({
  palette: {
      primary: {
        light: '#b4a647',
        main: '#827717',
        dark: '#524c00',
        contrastText: '#fff',
      },
      background: {
        default: '#EEEEEE',
      }
  },
  typography: {
    fontFamily: [
      'Josefin Sans',
      'sans-serif',
    ].join(','),  
    h1: {
          fontSize: '40px',
          fontWeight: 300,
          fontFamily: 'Josefin Sans',
      }
  },
  components: {
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontWeight: 300,
          fontFamily: 'Josefin Sans',
          fontSize: '1.25em',
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: '#b4a647',
        }
      }
    }
  }

 } );

export default theme;