import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import noImage from '../images/no-image.png'

import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Autoplay, Navigation } from 'swiper'
import api from './../config/basicConfig';
import LoadingComponent from './LoadingComponent'

function SliderComponent({ images }) {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(_ => {
        axios.get(api.offlineUrl + "/api/products")
            .then(({ data }) => {
                setProducts(data.filter(d => d.image[0] && d.name))
                setLoading(false)
                console.log(data);
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="w-[400px] md:w-[650px]"
            >


                {loading && <LoadingComponent />}
                {!loading &&
                    products.map(p => (
                        <div key={p._id} className='flex gaby'>
                            <SwiperSlide>
                                <div className='flex flex-col md:flex-row space-x-12 items-center'>
                                    <img src={p.image || noImage} alt="img" className='h-[200px]' />
                                    <div className='pb-10'>
                                        <h1 className='text-xl md:text-2xl text-slate-800 font-bold'>{p.name}</h1>
                                        <p>{p.description || 'Un describedde'}</p>
                                        <button className='py-3 px-5 py-2 border border-sky-700 mt-4 rounded-full hover:bg-sky-700 hover:text-white'>Place Order</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                    ))

                }

            </Swiper>
        </>
    )
}

export default SliderComponent
