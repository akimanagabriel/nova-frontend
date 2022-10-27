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
                className="w-[500px] md:w-[650px]"
            >



                {
                    images.map((image) => (
                        <div key={image.id} className='flex'>
                            <SwiperSlide>
                                <div className='flex flex-col md:flex-row space-x-3 items-center'>
                                    <img src={image.name} alt="" className='h-[200px]' />
                                    <div>
                                        <h1 className='text-4xl text-slate-800 font-bold'>{image.title}</h1>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio saepe fugit repellat officia corrupti eligendi aspernatur, deserunt nulla iusto </p>
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
