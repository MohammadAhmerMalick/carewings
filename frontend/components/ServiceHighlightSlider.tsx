'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

import Card from '@/common/Card'

interface ServiceHighlight {
  id: number
  description: string
}
const ServiceHighlightCard = ({
  serviceHighlight,
}: {
  serviceHighlight: ServiceHighlight
}) => {
  const { description } = serviceHighlight

  return (
    <Card className="bg-gradient mx-auto max-w-72 !p-4 text-center">
      <div className="flex h-52 flex-col justify-center gap-4 rounded-lg bg-white p-5 text-black shadow-lg">
        <Image
          width={1920}
          height={1080}
          alt={description}
          title={description}
          src="/assets/icons/service-highlight.png"
          className="h-18 object-contain"
        />
        <p className="text-lg font-semibold">{description}</p>
      </div>
    </Card>
  )
}

const ServiceHighlightSlider = ({
  serviceHighlight,
}: {
  serviceHighlight: ServiceHighlight[]
}) => {
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
      {serviceHighlight.map((review) => (
        <SwiperSlide key={review.id} className="pb-12">
          <ServiceHighlightCard serviceHighlight={review} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ServiceHighlightSlider
