import React from 'react'

function InfoBar({ updates }) {
    return (
        <>
            {
                updates.map(info => (
                    <div key={info.id} className='my-3'>
                        <h1 className='text-sky-800 text-2xl font-bold'>{info.title}</h1>
                        <p>{info.content}</p>
                    </div>
                ))
            }
        </>
    )
}

export default InfoBar
