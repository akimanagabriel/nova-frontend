import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination, Autoplay, Navigation } from 'swiper'

function SliderComponent({ images }) {
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



                {
                    images.map((image) => (
                        <div key={image.id} className='flex'>
                            <SwiperSlide>
                                <div className='flex flex-col md:flex-row space-x-3 items-center'>
                                    <img src={image.name} alt="" className='h-[200px]' />
                                    <div className='pb-10'>
                                        <h1 className='text-xl md:text-2xl text-slate-800 font-bold'>{image.title}</h1>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio saepe fugit repellat officia corrupti eligendi aspernatur, deserunt nulla iusto </p>
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
