/* eslint-disable tailwindcss/no-custom-classname */

'use client'

import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Keyboard, Scrollbar, Navigation, Pagination, Autoplay } from 'swiper/modules'
import Image from 'next/image'

export default function Banner() {
 const [ready, setReady] = useState(false)
 return (
  <div className="group relative">
   <Swiper
    className={ready ? 'h-auto' : 'h-0'}
    onSwiper={() => {
     setReady(true)
    }}
    loop
    spaceBetween={15}
    grabCursor
    autoplay={{
     disableOnInteraction: false,
     delay: 3000,
     pauseOnMouseEnter: true,
    }}
    keyboard={{
     enabled: true,
    }}
    breakpoints={{
     600: {
      slidesPerView: 2,
      slidesPerGroup: 2,
     },
     640: {
      slidesPerView: 3,
      slidesPerGroup: 3,
     },
     768: {
      slidesPerView: 4,
      slidesPerGroup: 4,
     },
    }}
    navigation={{
     nextEl: '.custom-prev-button',
     prevEl: '.custom-next-button',
    }}
    modules={[Keyboard, Scrollbar, Navigation, Pagination, Autoplay]}
   >
    {Array(8)
     .fill(null)
     .map((_, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <SwiperSlide className="select-none" key={i}>
       <div className="group/item relative overflow-hidden rounded-md">
        <Image
         className="transition group-hover/item:scale-110"
         src="https://i.seadn.io/s/production/05ae99f6-6e1a-45aa-85f6-292a68d105e4.png?auto=format&dpr=1&w=828"
         alt="test"
         width={750}
         height={750}
        />
        <div className="absolute inset-x-0 -bottom-16 bg-blue-600 transition-all ease-in group-hover/item:bottom-0">
         <div className="w-full text-center">nft #{i + 1}</div>
        </div>
       </div>
      </SwiperSlide>
     ))}
   </Swiper>

   <button
    type="button"
    className="custom-prev-button absolute -left-5 top-1/2 z-10 -translate-y-1/2 rounded-full bg-blue-500 px-4 py-2 font-bold text-white
     opacity-0 transition-all duration-200 ease-in hover:bg-blue-700 group-hover:block group-hover:text-white group-hover:opacity-100"
   >
    ◀️
   </button>
   <button
    type="button"
    className="custom-prev-button absolute -right-5 top-1/2 z-10 -translate-y-1/2 rounded-full bg-blue-500 px-4 py-2 font-bold
     text-white opacity-0 transition duration-200 hover:bg-blue-700 group-hover:block group-hover:text-white group-hover:opacity-100"
   >
    ▶️
   </button>
  </div>
 )
}
