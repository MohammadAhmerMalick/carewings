import Container from '@/common/Container'
import Image from 'next/image'
import Button from '../common/Button'

const AvailabilitySection = () => {
  return (
    <section className="my-10 mt-40 bg-neutral-100 lg:mb-20">
      <Container className="grid grid-cols-3 gap-2 text-center">
        <div className="relative p-4 pt-26 text-black">
          <div className="bg-gradient absolute -top-28 right-0 left-0 mx-auto mb-4 max-w-52 rounded-2xl p-3">
            <div className="relative z-20 rounded-xl bg-white py-6 shadow-xl">
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
          <div className="bg-gradient absolute -top-28 right-0 left-0 mx-auto mb-4 max-w-52 rounded-2xl p-3">
            <div className="relative z-20 rounded-xl bg-white py-6 shadow-xl">
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
        <div>
          <p className=" shadow-xl mb-18 bg-gradient mx-auto -mt-16 max-w-max rounded-3xl border-4 border-red-800 p-8 text-2xl font-semibold text-white">
            Anywhere Anytime
          </p>
          <Button
            theme="gradient"
            size="big"
            className="!text-xl font-semibold"
          >
            Get a Doctor at Home Now
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default AvailabilitySection
