import React from 'react'
import WebRoutes from "../routes/WebRoutes";

function Body() {
    return (
        <div className='w-full px-4'>
            {/* Main contents with routes*/}
            <WebRoutes />
        </div>
    )
}

export default Body
