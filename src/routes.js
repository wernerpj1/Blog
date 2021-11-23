import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Body from './body/Body'

const Rotes = (props) => {
    return (
        <BrowserRouter history={props.history}>
            <Routes sx={{backgroundColor: 'green'}}>
                <Route path='/' element={<Body/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotes
