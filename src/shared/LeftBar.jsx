import React from 'react'
import ProductsCard from '../components/ProductsCard'
import computerImage from '../images/computer1.jpg'
import epsonPrinter from '../images/epson.jfif'
import macbook from '../images/macbook.jfif'


function LeftBar() {

    const products = {
        computer: {
            id: 1,
            image: computerImage,
            title: "Computer Dell Optplex 1809",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        },
        laptop: {
            id: 2,
            image: macbook,
            title: "Mac laptop osx 12",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        },
        printer: {
            id: 3,
            image: epsonPrinter,
            title: "Printer EPSON L3100",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        }
    }

    return (
        <div className='w-full md:w-5/12'>
            <div className=' p-3'>
                <h1 className='md:text-2xl font-bold text-sky-900'>Available Goods</h1>
                {/* list of items */}

                <div>

                    <ProductsCard product={products.computer} />
                    <ProductsCard product={products.laptop} />
                    <ProductsCard product={products.printer} />
                    <ProductsCard product={products.computer} />
                    <ProductsCard product={products.laptop} />
                    <ProductsCard product={products.printer} />

                </div>

            </div>
        </div>
    )
}

export default LeftBar
