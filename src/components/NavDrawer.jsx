import React from 'react'

import { makeStyles } from '@mui/styles'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../Theme'
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import imgDropa from '../assets/pedraDropa.jpg'

const estilo = makeStyles(theme => ({
    
    listItems: {
    height: 'fit-content',
    width: 'fit-content',
    marginLeft: 'auto', 
    marginRight: 'auto',
    },
    image: {
        width: '100%',
    }
    
}))



const NavDrawer = () => {

    const classes = estilo()

    return (
        
        <div className={classes.root}>
            <List>
                <Divider  />
                    <ListItem className={classes.listItems}>
                        <ListItemText primary="Sobre mim" className={classes.textoTitulo}/>
                    </ListItem>
                <Divider component="li" />
                    <ListItem>
                    <img className={classes.image} src={imgDropa} alt="m 1938 o arqueólogo Dr. Chi Pu Tei, escavando nas montanhas entre a fronteira do Tibete e da China, descobriu umas pedras em forma de disco, que mediam mais ou menos 24 centímetros e possuíam um furo no centro" />
                    </ListItem>
        <li></li>
            </List> 
        </div>
        
    )
}

export default NavDrawer
