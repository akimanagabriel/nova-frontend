import React from 'react'
import { Routes, Route } from "react-router-dom"
import GetStarted from '../app/GetStarted'
import Home from '../app/Home'
import ServiceWrapper from '../app/ServiceWrapper'
import ErrorPage from '../shared/ErrorPage'

function WebRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/get-started' element={<GetStarted />} />
            <Route path='/services' element={<ServiceWrapper />} />
            
            <Route path='*' element={<ErrorPage/>} />
        </Routes>
    )
}

export default WebRoutes
