import Image from 'next/image'
import { FaPhone } from 'react-icons/fa6'
import { IoLogoWhatsapp } from 'react-icons/io'

import { contact } from '@/data'
import Container from '@/common/Container'

const HeroSection = () => {
  return (
    <section className="mt-20 lg:mt-0 lg:h-screen">
      <Image
        width={1920}
        height={1080}
        alt="Doctor at you doorstep"
        title="Doctor at you doorstep"
        src="/assets/images/hero.png"
        className="absolute hidden h-full w-full object-cover lg:block"
      />
      <Image
        width={1920}
        height={1080}
        alt="Doctor at you doorstep"
        title="Doctor at you doorstep"
        src="/assets/images/hero-mobile.png"
        className="w-full object-contain lg:hidden"
      />
      <Container>
        <div className="relative z-20 mr-auto ml-auto rounded-2xl bg-white p-4 text-center lg:mt-[40vh] lg:mr-0 lg:max-w-[460px] lg:shadow-xl">
          <p className="text-xl font-semibold lg:mt-2">
            I want to connect with a Doctor
          </p>

          <div className="mt-12 grid gap-14 text-lg md:grid-cols-2 lg:gap-2">
            <div className="bg-gradient relative mx-auto w-full max-w-72 rounded-2xl p-2">
              <div className="bg-gradient absolute -top-8 right-0 left-0 mx-auto flex size-14 items-center justify-center rounded-full border-2 border-white p-2 lg:size-12">
                <FaPhone className="text-2xl text-white lg:text-lg" />
              </div>

              <div className="text-primary rounded-xl bg-white p-3 font-semibold">
                {contact.phone}
              </div>
            </div>

            <div className="bg-gradient relative mx-auto w-full max-w-72 rounded-2xl p-2">
              <div className="bg-gradient absolute -top-8 right-0 left-0 mx-auto flex size-14 items-center justify-center rounded-full border-2 border-white p-2 lg:size-12">
                <IoLogoWhatsapp className="text-2xl text-white lg:text-xl" />
              </div>

              <div className="text-primary rounded-xl bg-white p-3 font-semibold">
                {contact.phone}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HeroSection
