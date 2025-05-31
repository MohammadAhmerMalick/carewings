import SectionHeading from '@/common/SectionHeading'
import Container from '@/components/common/Container'
import TestimonialSlider from '@/components/TestimonialSlider'
// import SectionHeading from '@/components/common/SectionHeading'

const testimonial = [
  {
    id: 1,
    name: 'Ruth Gomez',
    subTitle: 'L & D Director, Media Rotana Hotel, Dubai',
    description:
      'The whole FirstResponse team was very polite and accommodating. They conducted themselves with professionalism. They were confident and knowledgeable about their products and services. Well done and Thank you.',
    createdAt: '2024-05-10T09:15:00Z',
  },
  {
    id: 2,
    name: 'Karen S. Randhawa',
    subTitle: 'Journalist - Khaleej Times',
    description:
      'FRH was a useful & handy service in time during an inconvenient situation. I appreciate the friendly & useful advice and help. We will recommend FRH to our family and friends.',
    createdAt: '2024-04-22T14:30:00Z',
  },
  {
    id: 3,
    name: 'Ruth Gomez',
    subTitle: 'L & D Director, Media Rotana Hotel, Dubai',
    description:
      'The whole FirstResponse team was very polite and accommodating. They conducted themselves with professionalism. They were confident and knowledgeable about their products and services. Well done and Thank you.',
    createdAt: '2024-05-10T09:15:00Z',
  },
  {
    id: 4,
    name: 'Karen S. Randhawa',
    subTitle: 'Journalist - Khaleej Times',
    description:
      'FRH was a useful & handy service in time during an inconvenient situation. I appreciate the friendly & useful advice and help. We will recommend FRH to our family and friends.',
    createdAt: '2024-04-22T14:30:00Z',
  },
  {
    id: 5,
    name: 'Ruth Gomez',
    subTitle: 'L & D Director, Media Rotana Hotel, Dubai',
    description:
      'The whole FirstResponse team was very polite and accommodating. They conducted themselves with professionalism. They were confident and knowledgeable about their products and services. Well done and Thank you.',
    createdAt: '2024-05-10T09:15:00Z',
  },
  {
    id: 6,
    name: 'Karen S. Randhawa',
    subTitle: 'Journalist - Khaleej Times',
    description:
      'FRH was a useful & handy service in time during an inconvenient situation. I appreciate the friendly & useful advice and help. We will recommend FRH to our family and friends.',
    createdAt: '2024-04-22T14:30:00Z',
  },
]

const TestimonialSliderSection = async () => {
  return (
    <section className="lg:my-20. my-10">
      <Container>
        <div className="mb-10 text-center">
          <SectionHeading>Testmonials</SectionHeading>
          <p className="mx-auto mt-2 max-w-xl text-lg">
            Everything you need to optimize your fleet operations, reduce costs,
            and improve efficiency.
          </p>
        </div>

        <TestimonialSlider testimonial={testimonial} />
      </Container>
    </section>
  )
}

export default TestimonialSliderSection
