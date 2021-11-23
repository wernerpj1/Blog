import { ThemeProvider } from '@mui/system'
import './body.css'
import theme from '../Theme'
import NavDrawer from '../components/NavDrawer'
import { makeStyles } from '@mui/styles'
import Box from '@mui/material/Box'
import Article from '../components/Article'

const estilo = makeStyles(theme => ({
    body: {
        position: 'relative',
        display: 'flex',
        minHeight: '100vh',
        width: '100%',
        
    },
    sidebar: {
        backgroundColor: '#dce775',
        position: 'relative',
        width: '30vw',
        minHeight: '10vh',
        height: 'fit-content',
        float: 'right' 
    },
    content: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '70vw',
        height: 'fit-content',
        backgroundColor: '#f0f4c3',
    },
   
}))

export default function Body(props) {

    const classes = estilo()
    return (
   

    <ThemeProvider theme={theme} >
        <div className={classes.body}>
            <div className={classes.content}>
                <Article />                
            </div>
            <div className={classes.sidebar}>
               <NavDrawer/>        
            </div>
        </div>
    </ThemeProvider>
    )
}
