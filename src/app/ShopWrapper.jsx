import React from 'react'

import computerImage from '../images/computer1.jpg'
import epsonPrinter from '../images/epson.jfif'
import macbook from '../images/macbook.jfif'

function ShopWrapper() {
    const products = [
        {
            id: 1,
            image: computerImage,
            title: "Computer Dell Optplex 1809",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        }, {
            id: 2,
            image: macbook,
            title: "Mac laptop osx 12",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        }, {
            id: 3,
            image: epsonPrinter,
            title: "Printer EPSON L3100",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",

        }, {
            id: 3,
            image: epsonPrinter,
            title: "Printer EPSON L3100",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",

        }, {
            id: 3,
            image: epsonPrinter,
            title: "Printer EPSON L3100",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",

        }, {
            id: 3,
            image: epsonPrinter,
            title: "Printer EPSON L3100",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",

        }, {
            id: 3,
            image: epsonPrinter,
            title: "Printer EPSON L3100",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",

        }, {
            id: 3,
            image: epsonPrinter,
            title: "Printer EPSON L3100",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",

        }, {
            id: 3,
            image: epsonPrinter,
            title: "Printer EPSON L3100",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",

        }, {
            id: 3,
            image: epsonPrinter,
            title: "Printer EPSON L3100",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",

        }, {
            id: 3,
            image: epsonPrinter,
            title: "Printer EPSON L3100",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",

        }, {
            id: 3,
            image: epsonPrinter,
            title: "Printer EPSON L3100",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",

        }
    ]
    return (
        <>
            <div className='mt-4'>
                <h1 className="text-2xl">Shopping</h1>


                <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                    {
                        products.map((product, index) => (
                            <div key={index} className='mb-5'>
                                <div className='border shadow flex flex-col gap-3'>
                                    <img src={product.image} alt={product.title} className='max-h-sm md:max-h-xs w-100' />
                                    <div className='px-3 pb-3'>

                                        <h1 className='font-[900]'>{product.title}</h1>
                                        <p>{product.description}</p>
                                        <p>
                                            <button className='px-4 py-2 bg-orange-500 text-white font-bold mt-2 rounded hover:bg-orange-600'>
                                                <i className='fa fa-cart-plus mr-2' />
                                                Add to cart
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>


            </div>
        </>
    )
}

export default ShopWrapper
