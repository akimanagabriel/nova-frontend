import React from 'react'

function GetStarted() {
    return (
        <>
            <div className='flex flex-col md:flex-row py-5 px-5 space-x-9'>
                <div className='bg-gray-200 py-8 px-5 rounded-lg w-100 md:w-5/12'>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-[900] text-slate-900">Get started with NOVA company limited</h1>
                    <p className='text-xl'>
                        Let us create your account in order to access our online services
                    </p>
                </div>

                <div className='flex flex-col space-y-5 w-100 md:w-7/12'>

                    <div className='flex flex-col'>
                        <label htmlFor="names" className='text-xl text-gray-500'>Full name</label>
                        <input type="text" placeholder='ex: John Doe' className='border-0 border-b-2 py-1 outline-0' />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="email" className='text-xl text-gray-500'>Email</label>
                        <input type="text" placeholder='ex:  novaservicesltd@gmail.com' className='border-0 border-b-2 py-1 outline-0' />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="password" className='text-xl text-gray-500'>Pasword</label>
                        <input type="password" placeholder='provide strong password' className='border-0 border-b-2 py-1 outline-0' />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="password-comfirm" className='text-xl text-gray-500'>Confirm your Pasword</label>
                        <input type="password" placeholder='provide strong password' className='border-0 border-b-2 py-1 outline-0' />
                    </div>

                    <div className='flex flex-col'>
                        <button className='bg-indigo-700 hover:bg-indigo-800 py-2 rounded-full text-white font-[500] w-100'>Get Started<i className='fa fa-angle-double-right pl-3' /></button>
                    </div>

                    <div className='flex items-center justify-center px-5'>
                        <div className='w-[100%] border'></div>
                        <span className='px-4'>or</span>
                        <div className='w-[100%] border'></div>
                    </div>

                    <div className='flex flex-col'>
                        <button className='bg-red-700 hover:bg-red-800 py-2 rounded-lg text-white font-[500] w-100'>
                            <i className='fa fa-google pr-3' />
                            Continue with gmail
                        </button>
                    </div>

                </div>

            </div>
        </>
    )
}

export default GetStarted
