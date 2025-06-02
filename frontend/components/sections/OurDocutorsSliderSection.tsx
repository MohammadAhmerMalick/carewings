import SectionHeading from '@/common/SectionHeading'
import Container from '@/components/common/Container'
import OurDocutorsSlider from '@/components/OurDocutorsSlider'

const OurDocutorsSliderSection = async () => {
  return (
    <section className="my-10 lg:my-20">
      <Container>
        <div className="mb-10 text-center">
          <SectionHeading>Our Doctors</SectionHeading>
        </div>

        <OurDocutorsSlider />
      </Container>
    </section>
  )
}

export default OurDocutorsSliderSection
