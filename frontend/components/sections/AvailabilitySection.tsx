import Image from 'next/image'

import { contact } from '@/data'
import Container from '@/common/Container'
import LinkButton from '@/common/LinkButton'

const AvailabilitySection = () => {
  return (
    <section className="my-10 mt-40 bg-neutral-100 lg:mb-20">
      <Container className="grid grid-cols-2 gap-2 text-center md:grid-cols-3">
        <div className="relative p-4 pt-26 text-black">
          <div className="bg-gradient absolute -top-28 right-0 left-0 mx-auto mb-4 max-w-52 rounded-4xl p-3">
            <div className="relative z-20 rounded-3xl bg-white py-6 shadow-xl">
              <Image
                width={1920}
                height={1080}
                alt="Anywhere"
                title="Anywhere"
                className="h-20 object-contain"
                src="/assets/icons/service-highlight.png"
              />
              <p className="mt-4 text-xl font-semibold text-black">Anywhere</p>
            </div>
            <div className="absolute right-0 bottom-0 left-0 h-1/2 bg-neutral-100"></div>
          </div>

          <p>
            Since home is where the heart is, there’s no place better than home
            to get the greatest home health care services.
          </p>
        </div>
        <div className="relative p-4 pt-26 text-black">
          <div className="bg-gradient absolute -top-28 right-0 left-0 mx-auto mb-4 max-w-52 rounded-4xl p-3">
            <div className="relative z-20 rounded-3xl bg-white py-6 shadow-xl">
              <Image
                width={1920}
                height={1080}
                alt="Anywhere"
                title="Anywhere"
                className="h-20 object-contain"
                src="/assets/icons/service-highlight.png"
              />
              <p className="mt-4 text-xl font-semibold text-black">Anytime</p>
            </div>
            <div className="absolute right-0 bottom-0 left-0 h-1/2 bg-neutral-100"></div>
          </div>

          <p>
            Since home is where the heart is, there’s no place better than home
            to get the greatest home health care services.
          </p>
        </div>
        <div className="col-span-2 md:col-span-1">
          <p className="bg-gradient mx-auto -mt-16 mb-18 hidden max-w-max rounded-3xl border-4 border-red-800 p-8 text-2xl font-semibold text-white shadow-xl md:block">
            Anywhere Anytime
          </p>
          <LinkButton
            size="big"
            theme="gradient"
            href={`tel:${contact.phone}`}
            className="min-h-max py-2 !text-xl font-semibold"
          >
            Get a Doctor at Home Now
          </LinkButton>
        </div>
      </Container>
    </section>
  )
}

export default AvailabilitySection
