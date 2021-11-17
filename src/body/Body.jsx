import { ThemeProvider } from '@mui/system'
import './body.css'
import theme from '../Theme'
import NavDrawer from '../components/NavDrawer'
import { makeStyles } from '@mui/styles'

const estilo = makeStyles(theme => ({
    body: {
        position: 'relative',
        minHeight: '100vh',
    },
    sidebar: {
        float: 'right',
        position: 'relative',
        width: '25vw',
        minHeight: '10vh',
        height: 'fit-content',
    },
}))

export default function Body(props) {

    const classes = estilo()
    return (
   

    <ThemeProvider theme={theme} >
        <div className={classes.body}>
         <div className={classes.sidebar}>

            <NavDrawer  />        
        </div>
        </div>
    </ThemeProvider>
    )
}
