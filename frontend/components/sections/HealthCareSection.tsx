import Image from 'next/image'

import Button from '@/common/Button'
import Container from '@/common/Container'

const HealthCare = () => {
  return (
    <section className="lg:my-20. my-10">
      <Container className="grid grid-cols-2 gap-2">
        <div className="space-y-2">
          <Image
            width={1920}
            height={1080}
            src="/assets/images/image-tag.png"
            alt="About First Response Healthcare"
            title="About First Response Healthcare"
            className="size-60 max-w-lg object-contain"
          />
          <h2 className="text-2xl font-semibold text-black">
            About First Response Healthcare
          </h2>
          <p>
            First Response Healthcare is a proficient and world-class home
            healthcare company committed to providing patient centred,
            high-quality and comprehensive care that brings value to our
            patients, their families,and the community by large. As the name
            indicates, we excel at providing prompt and reliable medical care to
            our patients to help them achieve rapid recovery from illnesses and
            be in the best of their health always.
          </p>
          <h3 className="pt-2 text-xl font-semibold text-black">
            Doctor On Call Services from First Response Healthcare
          </h3>
          <ul className="list-disc pl-6">
            <li>Information : Call us to make an Appointment at 0505050 387</li>
            <li>
              Time for appointments : Anytime 24/7 365 days a year we are just a
              call away
            </li>
            <li>
              Time to reach you : We arrive the fastest, within 30* minutes of
              your call
            </li>
            <li>
              Areas our home doctors service covers : Entire Emirate of Dubai
            </li>
            <li>
              Where all our Doctors can visit you in Dubai : Home, Hotel or
              Office
            </li>
            <li>
              You wll be glad to know that our Doctor at Home On Call service is
              available on weekends and public holidays.
            </li>
          </ul>

          <p className="text-primary font-semibold">
            * - Depending on your location in Dubai
          </p>

          <Button theme="gradient" size="big" className="mt-4">
            Get a Doctor at Home Now
          </Button>
        </div>

        <Image
          width={1920}
          height={1080}
          src="/assets/images/health-care.png"
          alt="About First Response Healthcare"
          title="About First Response Healthcare"
          className="mx-auto h-full w-full max-w-lg object-contain"
        />
      </Container>
    </section>
  )
}

export default HealthCare
