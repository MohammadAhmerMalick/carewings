'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

import Card from '@/common/Card'
import { serviceHighlights } from '@/data'

interface ServiceHighlight {
  alt: string
  text: string
  image: string
}

const ServiceHighlightCard = ({ text, image, alt }: ServiceHighlight) => {
  return (
    <Card className="bg-gradient mx-auto max-w-72 !p-4 text-center">
      <div className="flex h-52 flex-col justify-center gap-4 rounded-3xl bg-white p-5 text-black shadow-lg">
        <Image
          alt={alt}
          title={text}
          width={1920}
          height={1080}
          className="h-18 object-contain"
          src={`/assets/images${image}`}
          style={{
            filter: 'hue-rotate(177deg) brightness(0.5)',
          }}
        />
        <p className="text-lg font-semibold">{text}</p>
      </div>
    </Card>
  )
}

const ServiceHighlightSlider = () => {
  return (
    <Swiper
      loop
      breakpoints={{
        576: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
      }}
      spaceBetween={24}
      autoplay={{ delay: 4000 }}
      modules={[Pagination, Autoplay]}
      pagination={{ dynamicBullets: true }}
    >
      {serviceHighlights.map(({ alt, text, image }, i) => (
        <SwiperSlide key={i} className="pb-12">
          <ServiceHighlightCard text={text} alt={alt} image={image} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ServiceHighlightSlider
