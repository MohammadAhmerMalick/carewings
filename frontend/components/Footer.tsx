import Image from 'next/image'
import { FaPhone } from 'react-icons/fa6'
import { IoLogoWhatsapp } from 'react-icons/io'

import { contact } from '@/data'
import Container from '@/common/Container'

const Footer = () => {
  return (
    <footer className="bg-gradient">
      <Container className="pb-20 text-center text-white md:pb-3">
        <p className="grid justify-center md:flex md:gap-20">
          <a
            data-gtm-label="Phone"
            data-gtm-action="Phone Click"
            data-gtm-category="Phone CTA"
            href={`tel:${contact.phone}`}
            className="flex items-center justify-center gap-2"
          >
            <FaPhone className="h-8" /> {contact.phone}
          </a>
        </p>
        <p>
          Copyright © 2023 CareWings Healthcare All rights reserved. Ministry
          of Health
        </p>
      </Container>

      <div className="fixed right-0 bottom-0 z-40 hidden gap-4 p-6 drop-shadow-lg md:grid">
        <a
          href={`tel:${contact.phone}`}
          className="bg-gradient flex size-16 items-center justify-center rounded-full border-4 border-white"
        >
          <FaPhone className="text-2xl text-white" />
        </a>
        <a
          data-gtm-label="WhatsApp"
          data-gtm-action="WhatsApp Click"
          data-gtm-category="WhatsApp CTA"
          href={`https://wa.me/${contact.phoenWithCode}`}
          className="bg-gradient flex size-16 items-center justify-center rounded-full border-4 border-white"
        >
          <Image
            width={75}
            height={75}
            alt="Anywhere"
            title="Anywhere"
            className="h-full scale-125 object-contain"
            src="/assets/icons/WhatsApp-Logo.wine.svg"
          />
        </a>
      </div>

      <div
        className="bg-gradient fixed right-0 bottom-0 left-0 z-40 grid grid-cols-2 border-t font-semibold md:hidden"
        style={{ boxShadow: ' 0 -10px 15px 0px #00000044' }}
      >
        <a
          data-gtm-label="Phone"
          data-gtm-action="Phone Click"
          data-gtm-category="Phone CTA"
          href={`tel:${contact.phone}`}
          className="flex items-center justify-center gap-2 border-r p-4"
        >
          <FaPhone className="text-2xl text-white lg:text-lg" />
          Call Us
        </a>

        <a
          data-gtm-label="WhatsApp"
          data-gtm-action="WhatsApp Click"
          data-gtm-category="WhatsApp CTA"
          href={`https://wa.me/${contact.phoenWithCode}`}
          className="flex items-center justify-center gap-2 p-2"
        >
          <IoLogoWhatsapp className="text-2xl text-white lg:text-xl" />
          WhatsApp Us
        </a>
      </div>
    </footer>
  )
}

export default Footer
