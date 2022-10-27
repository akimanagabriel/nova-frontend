import React from 'react'
import {  Link, NavLink } from 'react-router-dom'
import { menuList } from './topMenu'

function TopHeader() {

    return (
        <>
            <div className='flex py-1 justify-between items-center px-5'>
                <p className='block'> <strong>Email: </strong> 
                    <a href='mailto:novaservicesltd@gmail.com' className='hover:text-orange-700'>novaservicesltd@gmail.com</a>
                </p>
                <p className='block'> <strong>Tel: </strong> <a href="tel:+250788552611" className='hover:text-orange-700'>+250 788 552 611</a> / <a className='hover:text-orange-700' href="tel:+250785122486">+250 785 122 486</a></p>
                <div>
                    <button className='bg-sky-800 px-6 py-2 rounded-full text-white hidden md:block'>Get Started</button>
                </div>
            </div>

            {/* Main header */}
            <div className='flex justify-between items-center bg-sky-700 px-5 py-2 sticky top-0 z-40'>
                <div className='text-2xl font-bold text-sky-50'>
                    <Link to={'/'}>NOVA</Link>
                </div>
                <div>
                    <ul className='flex space-x-5 py-2 text-sky-100'>
                        {menuList.map((menu) => {
                            return (<li key={menu.id.toString()}><NavLink className={'hover:font-bold'}  to={menu.url}>{menu.name}</NavLink></li>)
                        })}
                    </ul>
                </div>
            </div>
        </>

    )
}

export default TopHeader
