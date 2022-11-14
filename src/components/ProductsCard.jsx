import React from 'react'
import { Link } from 'react-router-dom'
import noImage from '../images/no-image.png'

function ProductsCard({ product }) {
    return (
        <>
            <div className='shadow-lg rounded p-3 border my-3'>
                <div className='flex items-center gap-3'>

                    <img src={product.image[0] || noImage} alt={'img'} className='h-10' />

                    <div>
                        <Link to={'/product/view/' + product._id} className=' block font-bold text-lg text-indigo-900 hover:text-orange-700'>{product.name || 'Un named'}</Link>
                        <small className='bg-gray-300 px-3 rounded-full'>{product.category || 'Un categorised'}</small>
                        <p>{product.description || 'No details available'}</p>
                        <p>
                            <Link to={'/product/order/' + product._id} className='mt-3  font-bold underline rounded-full hover:text-orange-700'>
                                Order Now
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductsCard
