import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../app/Home'
import ErrorPage from '../shared/ErrorPage'

function WebRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            
            <Route path='*' element={<ErrorPage/>} />
        </Routes>
    )
}

export default WebRoutes
