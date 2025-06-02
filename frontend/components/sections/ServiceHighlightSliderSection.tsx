import SectionHeading from '@/common/SectionHeading'
import Container from '@/components/common/Container'
import ServiceHighlightSlider from '@/components/ServiceHighlightSlider'

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

        <ServiceHighlightSlider />
      </Container>
    </section>
  )
}

export default ServiceHighlightSliderSection
