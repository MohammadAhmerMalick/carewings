import { IoMail } from 'react-icons/io5'
import { FaPhone } from 'react-icons/fa6'

import { contact } from '@/data'
import Container from '@/common/Container'

const Footer = () => {
  return (
    <footer className="bg-gradient">
      <Container className="text-center font-medium text-white">
        <p className="grid justify-center md:flex md:gap-20">
          <span className="flex items-center justify-center gap-2">
            <FaPhone className="h-8" /> {contact.phone}
          </span>
          <span className="flex items-center justify-center gap-2">
            <IoMail className="h-8" /> {contact.email}
          </span>
        </p>
        <p>
          Copyright © 2023 First Response Healthcare All rights reserved.
          Ministry of Health
        </p>
      </Container>
    </footer>
  )
}

export default Footer
