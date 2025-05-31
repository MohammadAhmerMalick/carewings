'use client'

import { FaStar } from 'react-icons/fa6'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

import Card from '@/common/Card'

interface Testimonial {
  id: number
  name: string
  description: string
  createdAt: string
}
const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const { name, description, createdAt } = testimonial

  return (
    <Card>
      <div className="mb-4 flex items-center gap-4">
        <p className="bg-primary/10 flex size-12 items-center justify-center rounded-full text-3xl shadow-md">
          {name?.[0]}
        </p>

        <div className="grid flex-1 gap-1">
          <p className="text-xl font-semibold capitalize duration-300">
            {name}
          </p>
          <div className="flex items-center justify-between gap-2">
            <p className="flex w-min">
              <span className="flex items-center justify-between">
                {Array(5)
                  .fill(1)
                  .map((_, i) => (
                    <FaStar key={i} className="text-xl text-[#febe00]" />
                  ))}
              </span>
            </p>
            <p className="text-right text-sm duration-300">
              {new Date(createdAt).toDateString()}
            </p>
          </div>
        </div>
      </div>
      <p className="line-clamp-5 text-lg duration-300">{description}</p>
    </Card>
  )
}

const TestimonialSlider = ({ testimonial }: { testimonial: Testimonial[] }) => {
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
      {testimonial.map((review) => (
        <SwiperSlide key={review.id} className="pb-12">
          <TestimonialCard testimonial={review} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default TestimonialSlider
