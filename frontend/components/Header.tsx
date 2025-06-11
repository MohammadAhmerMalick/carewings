'use client'

import Image from 'next/image'
import { FiPhone } from 'react-icons/fi'
import { GoDotFill } from 'react-icons/go'
import { FaWhatsapp } from 'react-icons/fa'

import { contact } from '@/data'
import { classnames } from '@/utils'
import Container from '@/common/Container'
import LinkButton from '@/common/LinkButton'
import useTopOffset from '@/hooks/useTopOffset'

const Header = () => {
  const { offset } = useTopOffset()

  return (
    <>
      <header
        className={classnames(
          'border-primary shadow-primary/20 fixed top-0 left-0 z-50 mx-auto w-full shadow-lg backdrop-blur-sm'
        )}
      >
        <div
          className={classnames(
            'flex items-center bg-white duration-300',
            offset > 100 ? 'py-2' : 'py-4'
          )}
        >
          <Container className="flex w-full items-center justify-between !py-0">
            <div className="flex items-center justify-between gap-4">
              <Image
                width={200}
                height={44}
                alt="CareWings"
                src="/assets/images/logo.jpg"
                className={classnames(
                  'w-full object-contain duration-300',
                  offset > 100 ? 'max-w-30' : 'max-w-30 md:max-w-40'
                )}
              />
            </div>

            <div className="flex items-center gap-2">
              <GoDotFill className="hidden text-green-600 lg:flex" />
              <p className="mr-1 hidden lg:flex">
                Open 24/7 - 365 Days | Anytime, Anywhere
              </p>
              <LinkButton
                theme="gradient"
                href={`tel:${contact.phone}`}
                className="phoneBtn flex items-center gap-2"
                data-gtm-label="Phone"
                data-gtm-action="Phone Click"
                data-gtm-category="Phone CTA"
              >
                <FiPhone className="h-8" /> {contact.phone}
              </LinkButton>
              <LinkButton
                theme="gradient"
                data-gtm-label="WhatsApp"
                data-gtm-action="WhatsApp Click"
                data-gtm-category="WhatsApp CTA"
                href={`https://wa.me/${contact.phoenWithCode}`}
                className="whatsappBtn hidden items-center gap-2 md:flex"
              >
                <FaWhatsapp className="h-8" /> {contact.phone}
              </LinkButton>
            </div>
          </Container>
        </div>
      </header>
    </>
  )
}

export default Header
