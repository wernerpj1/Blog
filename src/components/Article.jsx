import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../Theme'
import Box from '@mui/material/Box'
import { makeStyles } from '@mui/styles'

const estilo = makeStyles(theme => ({
    boxContent: {
        display: 'flex',
        width: '100%',
        height: 'fit-content'
    },
    boxArticle: {
        position: 'relative',
        display: 'flex',
        backgroundColor: 'gray',
        width: '450px',
        height: '25vh',
        margin: '3px'
    }
}))
const Article = () => {
    const classes = estilo();
    return (
        <ThemeProvider theme={theme} >
            
                <Box className={classes.boxArticle}>
                <p>oi</p>
                </Box>
                    <Box className={classes.boxArticle}>
                    <p>oi</p>
                    </Box>
                    <Box className={classes.boxArticle}>
                    <p>oi</p>
                    </Box>
                    <Box className={classes.boxArticle}>
                    <p>oi</p>
                    </Box>
                    <Box className={classes.boxArticle}>
                    <p>oi</p>
                    </Box>
                    <Box className={classes.boxArticle}>
                    <p>oi</p>
                    </Box>
                    <Box className={classes.boxArticle}>
                    <p>oi</p>
                    </Box>
                    <Box className={classes.boxArticle}>
                    <p>oi</p>
                    </Box>
        </ThemeProvider>
    )
}

export default Article
