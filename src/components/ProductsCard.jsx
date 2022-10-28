import React from 'react'
import { Link } from 'react-router-dom'

function ProductsCard({ product }) {
    return (
        <>
            <div className='shadow-lg rounded p-3 border my-3'>
                <div className='flex items-center gap-3'>

                    <img src={product.image} alt='pc' className='h-10' />

                    <div>
                        <Link to={'/product/view/' + product.id} className='font-bold text-indigo-900 hover:text-orange-700'>{product.title}</Link>
                        <p>{product.description}</p>
                        <p>
                            <Link to={'/product/order/' + product.id} className='mt-3  font-bold underline rounded-full hover:text-orange-700'>
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
