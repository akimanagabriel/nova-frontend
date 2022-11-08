import React from 'react'

function ServiceComponet({ service }) {
    return (
        <>
            <div className='py-5'>
                <div className='flex flex-col md:flex-row gap-5'>
                    <div>
                        <img src={service.image} alt="service profile" className='w-100 md:max-w-sm rounded' />
                    </div>
                    <div>
                        <h1 className='text-2xl font-[600]'>{service.title}</h1>
                        <p className='mt-3'>{service.description}</p>
                        <div className='mt-4'>
                            <button className='px-4 py-2 rounded bg-sky-700 text-white hover:bg-sky-800'>Request Service</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceComponet
