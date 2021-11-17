import "./header.css"
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box'
import imgHeader from '../assets/machu-picchu-2.jpg'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../Theme.js'
import { Typography } from "@mui/material";


export default function Header() {
    return (
        <div classname="header"> 
           <ThemeProvider theme={theme}>
           <Typography sx={{ display: 'flex', 
           alignItems: 'center', 
           justifyContent: 'center', 
           width: '100vw'}}
            variant='h1'>A história de verdade</Typography>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100vw'}}>    
                <img src={imgHeader} alt="Descoberta no ano de 1911" />
            </Box>
            
           </ThemeProvider>
        </div>
    )
}
