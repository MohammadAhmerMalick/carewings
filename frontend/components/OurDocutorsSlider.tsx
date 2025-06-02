'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

import Card from '@/common/Card'
import { contact, ourDocutors } from '@/data'
import LinkButton from '@/common/LinkButton'

interface OurDocutors {
  id: number
  name: string
  category: string
  languages: string
  description: string
}
const OurDocutorsCard = ({ ourDocutors }: { ourDocutors: OurDocutors }) => {
  const { name, category, languages, description } = ourDocutors

  return (
    <Card className="bg-gradient grid gap-4 md:grid-cols-2">
      <Image
        width={1920}
        height={1080}
        alt={description}
        title={description}
        src="/doctors/doctor-1.png"
        className="mx-auto w-60 object-contain"
      />

      <div className="flex flex-col gap-2">
        <p className="text-xl font-bold">
          {name} ({category})
        </p>
        <p>{description}</p>
        <p className="text-lg">
          <span className="font-semibold">Languages: </span>
          {languages}
        </p>

        <LinkButton
          size="big"
          theme="gradient"
          href={`tel:${contact.phone}`}
          className="flex items-center justify-center border-2 text-lg font-bold"
        >
          Know More
        </LinkButton>
      </div>
    </Card>
  )
}

const OurDocutorsSlider = () => {
  return (
    <Swiper
      loop
      breakpoints={{
        992: { slidesPerView: 2 },
      }}
      spaceBetween={24}
      autoplay={{ delay: 4000 }}
      modules={[Pagination, Autoplay]}
      pagination={{ dynamicBullets: true }}
    >
      {ourDocutors.map((doctor) => (
        <SwiperSlide key={doctor.id} className="pb-12">
          <OurDocutorsCard ourDocutors={doctor} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default OurDocutorsSlider
