'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

import Card from '@/common/Card'
import { contact, ourDoctors } from '@/data'
import LinkButton from '@/common/LinkButton'

interface OurDocutor {
  name: string
  image: string
  language: string
  description: string
}
const OurDocutorCard = ({ ourDoctor }: { ourDoctor: OurDocutor }) => {
  const { name, language, image, description } = ourDoctor

  return (
    <Card className="bg-gradient grid gap-4 md:grid-cols-2">
      <Image
        alt={name}
        title={name}
        width={1920}
        height={1080}
        src={`/doctors/${image}`}
        className="mx-auto w-full max-w-96 rounded-2xl object-contain"
      />

      <div className="flex flex-col gap-2">
        <p className="text-xl font-bold">{name}</p>
        <p className="text-sm">{description}</p>
        <p className="text-lg">
          <span className="font-semibold">Languages: </span>
          {language}
        </p>

        <LinkButton
          size="big"
          theme="gradient"
          href={`tel:${contact.phone}`}
          data-gtm-label="Phone"
          data-gtm-action="Phone Click"
          data-gtm-category="Phone CTA"
          className="phoneBtn flex items-center justify-center border-2 text-lg font-bold"
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
        1200: { slidesPerView: 2 },
      }}
      spaceBetween={24}
      autoplay={{ delay: 4000 }}
      modules={[Pagination, Autoplay]}
      pagination={{ dynamicBullets: true }}
    >
      {ourDoctors.map((doctor) => (
        <SwiperSlide key={doctor.name} className="pb-12">
          <OurDocutorCard ourDoctor={doctor} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default OurDocutorsSlider
