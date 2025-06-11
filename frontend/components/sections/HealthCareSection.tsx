import Image from 'next/image'

import { contact } from '@/data'
import Container from '@/common/Container'
import LinkButton from '@/common/LinkButton'

const HealthCare = () => {
  return (
    <section className="my-10 lg:my-20">
      <Container className="flex grid-cols-2 flex-col-reverse gap-2 md:grid">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-black">
            About CareWings Healthcare
          </h2>
          <p>
            CareWings Healthcare is a proficient and world-class home healthcare
            company committed to providing patient centred, high-quality and
            comprehensive care that brings value to our patients, their
            families,and the community by large. As the name indicates, we excel
            at providing prompt and reliable medical care to our patients to
            help them achieve rapid recovery from illnesses and be in the best
            of their health always.
          </p>
          <h3 className="pt-2 text-xl font-semibold text-black">
            Doctor On Call Services from CareWings Healthcare
          </h3>
          <ul className="list-disc pl-6">
            <li>
              Information : Call us to make an Appointment at {contact.phone}
            </li>
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
              You will be glad to know that our Doctor at Home On Call service
              is available on weekends and public holidays.
            </li>
          </ul>

          <p className="text-primary font-semibold">
            * - Depending on your location in Dubai
          </p>

          <LinkButton
            size="big"
            theme="gradient"
            data-gtm-label="Phone"
            data-gtm-action="Phone Click"
            data-gtm-category="Phone CTA"
            href={`tel:${contact.phone}`}
            className="phoneBtn mt-4 flex w-max items-center"
          >
            Get a Doctor at Home Now
          </LinkButton>
        </div>

        <Image
          width={1920}
          height={1080}
          src="/assets/images/health-care.jpg"
          alt="About CareWings Healthcare"
          title="About CareWings Healthcare"
          className="mx-auto h-full w-full max-w-lg object-contain"
        />
      </Container>
    </section>
  )
}

export default HealthCare
