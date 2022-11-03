import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { menuList } from './topMenu'

function TopHeader() {

    const [visible, setVisible] = useState(false)

    const handleMenus = ()=>{
        setVisible(!visible)
    }

    return (
        <>
            <div className='flex flex-col md:flex-row py-1 justify-between items-center px-5'>
                <p className='block'> <strong>Email: </strong>
                    <a href='mailto:novaservicesltd@gmail.com' className='hover:text-orange-700'>novaservicesltd@gmail.com</a>
                </p>
                <p className='block'> <strong>Tel: </strong> <a href="tel:+250788552611" className='hover:text-orange-700'>+250 788 552 611</a> / <a className='hover:text-orange-700' href="tel:+250785122486">+250 785 122 486</a></p>
                <div>
                    <button className='bg-sky-800 px-6 py-2 rounded-full text-white hidden md:block'>Get Started</button>
                </div>
            </div>

            {/* Main header */}
            <div className='flex flex-col md:flex-row justify-between md:items-center bg-sky-700 px-5 py-2 sticky top-0 z-40 shadow'>

                <div className='flex items-center justify-between'>
                    <div className='text-2xl font-bold text-sky-50'>
                        <Link to={'/'}>NOVA</Link>
                    </div>

                    <div className='md:hidden'>
                        <button className='text-white' onClick={handleMenus}><i className={visible?'fa fa-times' : 'fa fa-bars'}/></button>
                    </div>

                </div>

                <div>
                    {visible && 
                        <ul className="flex flex-col md:flex-row  md:space-x-5 py-2 text-sky-100">
                            {menuList.map((menu) => {
                                return (<li key={menu.id.toString()}><NavLink className={'hover:font-bold hover:underline'} to={menu.url}>{menu.name}</NavLink></li>)
                            })}
                        </ul>
                    }
                </div>

            </div>
        </>

    )
}

export default TopHeader
