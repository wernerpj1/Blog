import imgHeader from '../assets/machu-picchu-2.jpg'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../Theme.js'
import { Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import './header.css';
const estilo = makeStyles(theme => ({
    header: {
        position: 'relative',
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
    },
    picture: {
        position: 'relative',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        width: '100%',
    }
}))
export default function Header() {
    const classes = estilo()
    return ( 
           <ThemeProvider theme={theme}>
               <CssBaseline />
            <div className={classes.header}>
                <Box sx={{width: '100%'}}>
                    <Typography sx={{position: 'relative', 
                                     display: 'flex', 
                                     alignItems: 'center', 
                                     justifyContent: 'center', 
                                     backgroundColor: 'green',
                                 }}
                     variant='h1'>A história de verdade
                     </Typography>
                </Box>
                <Box className={classes.picture}>    
                     <img className="picture" src={imgHeader} alt="Descoberta no ano de 1911"/>
                </Box>
            </div>
           </ThemeProvider>
        
    )
}
