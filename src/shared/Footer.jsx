import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { services } from './menuLinks'

function Footer() {
    return (
        <>
            <div className='bg-slate-800'>
                <div className='px-5 py-12'>
                    <div className='flex justify-around gap-6'>
                        <Link to={'/'} className='text-slate-100 font-[900] text-3xl'>NOVA</Link>

                        {/* contact us */}

                        <div className='text-slate-200 space-y-4'>
                            <h1 className='text-slate-200 font-[400] text-xl'>Feedback</h1>

                            <div className='flex flex-col mt-5 w-100'>
                                <label htmlFor="email">Email</label>
                                <input type="text" name="email" id="email" className='px-3 py-3 text-slate-800 rounded shadow' />
                            </div>

                            <div className='flex flex-col mt-5 w-100'>
                                <label htmlFor="email">Comment or Observation</label>
                                <textarea type="text" name="email" id="email" className='px-3 py-3 text-slate-800 rounded shadow' />
                            </div>

                            <div className='flex flex-col mt-5 w-100'>
                                <button className='w-100 py-2 bg-indigo-700 rounded hover:bg-indigo-800'>Send</button>
                            </div>

                        </div>

                        <div className='text-slate-200 space-y-4'>
                            <h1 className='text-slate-200 font-[400] text-xl'>Address</h1>

                            <ul className='space-y-2'>
                                <li className='font-bold'>Location</li>
                                <li>
                                    <ul className='flex space-x-2'>
                                        <li>Muhima</li>
                                        <li>Nyarugenge</li>
                                        <li>Kigali</li>
                                        <li>Rwanda</li>
                                    </ul>
                                </li>
                                <li className='font-bold'>Contacts</li>
                                <li>
                                    <ul>
                                        <li><strong>Email: </strong>novaservicesltd@gmail.com</li>
                                        <li><strong>Tel: </strong>+250 788 552 611 / +250 785 122 486</li>
                                        <li>
                                            <a href={'https://www.facebook.com/Nova-Services-105379374399160/'} className='hover:underline'>
                                                <i className='fa fa-facebook p-2 bg-indigo-700 text-slate-50 rounded' /> Nova Services
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                        </div>

                        <div className='text-slate-200 space-y-4'>
                            <h1 className='text-slate-200 font-[400] text-xl'>Links</h1>

                            <ul className='space-y-2'>
                                {
                                    services.map((service) => (
                                        <li key={service.id}>
                                            <NavLink to={service.url} className='hover:underline'> {service.title} </NavLink>
                                        </li>
                                    ))
                                }
                            </ul>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
