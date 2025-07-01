import { type ReactNode } from 'react'
import { IconType } from 'react-icons'
import { BsClock } from 'react-icons/bs'
import { FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { BiHeart, BiHome, BiUser } from 'react-icons/bi'

import { contact } from '@/data'

const services = [
  {
    Icon: BiHeart,
    heading: 'Pain Relief Therapy',
    para: (
      <p>
        Specialized treatment for neck pain, back pain, and plantar fasciitis
      </p>
    ),
  },
  {
    Icon: BiUser,
    heading: 'Pediatric Physiotherapy',
    para: (
      <p>
        Safe and effective physiotherapy care specifically designed for children
      </p>
    ),
  },
  {
    Icon: BiHome,
    heading: 'Physiotherapy at Home Dubai',
    para: (
      <p>
        Convenient <h3 className="inline font-semibold">Physio at home</h3> services with
        personalized care
      </p>
    ),
  },
  {
    Icon: BsClock,
    heading: '24/7 Availability',
    para: <p>Available anytime, anywhere - 365 days a year</p>,
  },
]

interface ServiceCardsProps {
  para: string | ReactNode
  Icon: IconType
  heading: string
}

const ServiceCards = ({ para, Icon, heading }: ServiceCardsProps) => {
  return (
    <div className="rounded-4xl border-teal-100 bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl">
      <div className="p-4">
        <div className="flex items-start space-x-4">
          <div className="rounded-full bg-teal-100 p-2">
            <Icon className="size-6 text-teal-600" />
          </div>
          <div>
            <h2 className="text mb-1 font-semibold">{heading}</h2>
            <p className="text-sm text-gray-600">{para}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const PhysiotherapySection = () => {
  return (
    <section className="bg-gradient-to-br from-teal-50 to-emerald-50 px-4 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <h1 className="mb-10 text-center text-2xl font-semibold text-black lg:text-4xl">
          Professional Physiotherapy Services at Home
        </h1>

        {/* Main Content */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <div className="rounded-4xl border-teal-100 md:bg-white md:p-6 md:shadow-lg">
            <p className="leading-relaxed text-gray-700 md:text-lg">
              Looking for trusted pain relief in Dubai? Our expert team offers
              professional physiotherapy in Dubai, including physical therapy
              for neck pain, back pain, and plantar fasciitis physical therapy.
              We specialize in pediatric physiotherapy in Dubai, ensuring safe,
              effective care for children. Whether you need a clinic or prefer
              convenient physio at home in Dubai, we provide personalized
              physiotherapy home services. Searching for the best physio near
              me? Our experienced team is here to help with pt therapy, physical
              PT, and targeted physio for back pain and other conditions. Book
              your near me physical therapy session today for fast, effective
              relief.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid gap-6">
            {services.map(({ para, heading, Icon }, index) => (
              <ServiceCards
                Icon={Icon}
                key={index}
                para={para}
                heading={heading}
              />
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <div className="inline-block rounded-2xl border border-teal-100 bg-white p-4 shadow-lg md:p-6">
            <p className="mb-2 text-gray-600">
              Ready to start your recovery journey?
            </p>
            <div className="flex items-center justify-center space-x-6">
              <a
                data-gtm-label="Phone"
                data-gtm-action="Phone Click"
                data-gtm-category="Phone CTA"
                href={`tel:${contact.phone}`}
                className="flex items-center space-x-2"
              >
                <FiPhone className="h-5 w-5 text-teal-600" />
                <span className="font-semibold text-teal-800">
                  {contact.phone}
                </span>
              </a>
              <div className="text-teal-300">|</div>
              <a
                data-gtm-label="WhatsApp"
                data-gtm-action="WhatsApp Click"
                data-gtm-category="WhatsApp CTA"
                href={`https://wa.me/${contact.phoenWithCode}`}
                className="flex items-center space-x-2"
              >
                <FaWhatsapp className="h-5 w-5 text-teal-600" />
                <span className="font-semibold text-teal-800">
                  {contact.phone}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PhysiotherapySection
