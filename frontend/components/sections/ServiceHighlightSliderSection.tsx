import SectionHeading from '@/common/SectionHeading'
import Container from '@/components/common/Container'
import ServiceHighlightSlider from '@/components/ServiceHighlightSlider'

const serviceHighlight = [
  {
    id: 1,
    description: 'Medicine delivery at your location',
  },
  {
    id: 2,
    description: 'Follow-up Service',
  },
  {
    id: 3,
    description: 'Consultation, lab testing & treatment services',
  },
  {
    id: 4,
    description: 'Medicine delivery at your location',
  },
  {
    id: 5,
    description: 'Follow-up Service',
  },
  {
    id: 6,
    description: 'Consultation, lab testing & treatment services',
  },
  {
    id: 7,
    description: 'Medicine delivery at your location',
  },
  {
    id: 8,
    description: 'Follow-up Service',
  },
  {
    id: 9,
    description: 'Consultation, lab testing & treatment services',
  },
]

const ServiceHighlightSliderSection = async () => {
  return (
    <section className="my-10 lg:my-20">
      <Container>
        <div className="mb-10 text-center">
          <SectionHeading>Service Highlights</SectionHeading>
          <p className="mx-auto mt-2 max-w-3xl text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            quia numquam dolore. Ex facilis doloribus dolor dolore soluta,
          </p>
        </div>

        <ServiceHighlightSlider serviceHighlight={serviceHighlight} />
      </Container>
    </section>
  )
}

export default ServiceHighlightSliderSection
