import SectionHeading from '@/common/SectionHeading'
import Container from '@/components/common/Container'
import TestimonialSlider from '@/components/TestimonialSlider'

const testimonial = [
  {
    id: 1,
    name: 'Sarah Thompson',
    subTitle: 'Resident Doctor, Atlantis The Palm',
    description:
      'The in-house medical team at Atlantis The Palm provided outstanding care during my stay. Dr. Thompson was attentive and ensured my comfort throughout my recovery.',
    createdAt: '2024-04-15T10:30:00Z',
  },
  {
    id: 2,
    name: 'Ahmed Al Farsi',
    subTitle: 'On-call Doctor, Burj Al Arab',
    description:
      'Dr. Al Farsi was extremely professional and responsive. His expertise made my experience at Burj Al Arab both safe and pleasant.',
    createdAt: '2024-03-22T14:45:00Z',
  },
  {
    id: 3,
    name: 'Emily Chen',
    subTitle: 'Medical Consultant, Jumeirah Beach Hotel',
    description:
      'Having Dr. Chen available at Jumeirah Beach Hotel gave me peace of mind. Her prompt attention and care were exceptional.',
    createdAt: '2024-02-10T09:00:00Z',
  },
  {
    id: 4,
    name: 'Michael Rodriguez',
    subTitle: 'Hotel Doctor, Address Downtown',
    description:
      'Dr. Rodriguez went above and beyond to assist me during my stay at Address Downtown. His professionalism and kindness were truly appreciated.',
    createdAt: '2024-01-18T16:20:00Z',
  },
  {
    id: 5,
    name: 'Priya Singh',
    subTitle: 'Resident Physician, The Ritz-Carlton Dubai',
    description:
      'The Ritz-Carlton Dubai’s medical services are top-notch. Dr. Singh was caring, knowledgeable, and made my recovery smooth and stress-free.',
    createdAt: '2024-05-05T11:10:00Z',
  },
]

const TestimonialSliderSection = async () => {
  return (
    <section className="my-10 lg:my-20">
      <Container>
        <div className="mb-10 text-center">
          <SectionHeading>Our Happy Clients</SectionHeading>
        </div>

        <TestimonialSlider testimonial={testimonial} />
      </Container>
    </section>
  )
}

export default TestimonialSliderSection
