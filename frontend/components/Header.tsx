'use client'

import Image from 'next/image'
import { FiPhone } from 'react-icons/fi'
import { GoDotFill } from 'react-icons/go'
import { FaWhatsapp } from 'react-icons/fa'

import { contact } from '@/data'
import Button from '@/common/Button'
import { classnames } from '@/utils'
import Container from '@/common/Container'
import useTopOffset from '@/hooks/useTopOffset'

const Header = () => {
  const { offset } = useTopOffset()

  return (
    <>
      <header
        className={classnames(
          'border-primary shadow-primary/5 fixed top-0 left-0 z-50 mx-auto w-full shadow-lg backdrop-blur-sm'
        )}
      >
        <div
          className={classnames(
            'flex h-20 items-center duration-300',
            offset > 100 ? 'bg-white/90 py-2 md:py-1' : 'bg-white py-4'
          )}
        >
          <Container className="flex w-full items-center justify-between !py-0 font-normal">
            <div className="flex items-center justify-between gap-4">
              <Image
                width={200}
                height={44}
                alt="AutoRent"
                src="/assets/images/logo.png"
                className={classnames(
                  'h-full object-contain duration-300',
                  offset > 100 ? 'max-h-9' : 'max-h-9 md:max-h-11'
                )}
              />
            </div>

            <div className="flex items-center gap-2">
              <GoDotFill className="hidden text-green-600 lg:flex" />
              <p className="mr-1 hidden font-medium lg:flex">
                Open 24/7 - 365 Days | Anytime, Anywhere
              </p>
              <Button
                theme="gradient"
                className="flex items-center gap-2 font-medium"
              >
                <FiPhone className="h-8" /> {contact.phone}
              </Button>
              <Button
                theme="gradient"
                className="hidden items-center gap-2 font-medium md:flex"
              >
                <FaWhatsapp className="h-8" /> {contact.whatsApp}
              </Button>
            </div>
          </Container>
        </div>
      </header>
    </>
  )
}

export default Header
