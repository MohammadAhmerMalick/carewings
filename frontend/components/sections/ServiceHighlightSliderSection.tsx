import SectionHeading from '@/common/SectionHeading'
import Container from '@/components/common/Container'
import ServiceHighlightSlider from '@/components/ServiceHighlightSlider'

const ServiceHighlightSliderSection = async () => {
  return (
    <section className="my-10 lg:my-20">
      <Container>
        <div className="mb-10 text-center">
          <SectionHeading>Service Highlights</SectionHeading>
        </div>

        <ServiceHighlightSlider />
      </Container>
    </section>
  )
}

export default ServiceHighlightSliderSection
