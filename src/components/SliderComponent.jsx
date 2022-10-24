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
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >



                {images.map(image => (
                    <SwiperSlide>
                        <img src={image.name} alt="" className='h-50'/>
                    </SwiperSlide>
                ))}

            </Swiper>
        </>
    )
}

export default SliderComponent
