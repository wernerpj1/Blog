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
    root: {
        position: 'relative',
        width: '100%',
        right: '0',
    },
    listItems: {
    display: 'flex',
    height: 'fit-content',
    width: '100%',
    marginLeft: 'auto', 
    marginRight: 'auto',
    },
    image: {
        
        position: 'relative',
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
                        <ListItemText primary="Sobre o Blog" className={classes.textoTitulo}/>
                    </ListItem>
                <Divider     />
                    <ListItem>
                    <img className={classes.image} src={imgDropa} alt="Em 1938 o arqueólogo Dr. Chi Pu Tei, escavando nas montanhas entre a fronteira do Tibete e da China, descobriu umas pedras em forma de disco, que mediam mais ou menos 24 centímetros e possuíam um furo no centro" />
                    </ListItem>
                    <ListItem >
                        <ListItemText secondary="Artigos que mostram que a história não é realmente
                                                como nos foi ensinada...
                                                Por que escondem a verdade?
                                                Quem esconde a verdade?" className={classes.textoTitulo}/>
                    </ListItem>
                <Divider  />
                    <ListItem className={classes.listItems}>
                            <ListItemText primary="Categorias" className={classes.textoTitulo}/>
                    </ListItem>
                <Divider  />
                    <ListItem className={classes.listItems}>
                            <ListItemText primary="items" className={classes.textoTitulo}/>
                    </ListItem>
                <Divider  />
                    <ListItem className={classes.listItems}>
                            <ListItemText primary="Siga-nos" className={classes.textoTitulo}/>
                    </ListItem>                    
                <Divider  />
                    <ListItem className={classes.listItems}>
                            <i className="topIcon fab fa-facebook-square"></i>
                            <i className="topIcon fab fa-twitter-square"></i>
                            <i className="topIcon fab fa-instagram-square"></i>
                    </ListItem>
            </List> 
        </div>
        
    )
}

export default NavDrawer
