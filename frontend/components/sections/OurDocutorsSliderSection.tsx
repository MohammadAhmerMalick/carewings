import SectionHeading from '@/common/SectionHeading'
import Container from '@/components/common/Container'
import OurDocutorsSlider from '@/components/OurDocutorsSlider'

const ourDocutors = [
  {
    id: 1,
    name: 'Dr. Mohamed Nadir Smati',
    category: 'General Practitioner',
    languages: 'English, Arabic, French',
    description:
      "DHA Licensed General Practitioner who graduated from Badji Mokhtar University of Annaba, Algeria and completed a postgraduate one year internship in the renowned Annaba's University Hospital (1087 beds).",
  },
  {
    id: 2,
    name: 'Dr. Mohamed Nadir Smati',
    category: 'General Practitioner',
    languages: 'English, Arabic, French',
    description:
      "DHA Licensed General Practitioner who graduated from Badji Mokhtar University of Annaba, Algeria and completed a postgraduate one year internship in the renowned Annaba's University Hospital (1087 beds).",
  },
  {
    id: 3,
    name: 'Dr. Mohamed Nadir Smati',
    category: 'General Practitioner',
    languages: 'English, Arabic, French',
    description:
      "DHA Licensed General Practitioner who graduated from Badji Mokhtar University of Annaba, Algeria and completed a postgraduate one year internship in the renowned Annaba's University Hospital (1087 beds).",
  },
  {
    id: 4,
    name: 'Dr. Mohamed Nadir Smati',
    category: 'General Practitioner',
    languages: 'English, Arabic, French',
    description:
      "DHA Licensed General Practitioner who graduated from Badji Mokhtar University of Annaba, Algeria and completed a postgraduate one year internship in the renowned Annaba's University Hospital (1087 beds).",
  },
  {
    id: 5,
    name: 'Dr. Mohamed Nadir Smati',
    category: 'General Practitioner',
    languages: 'English, Arabic, French',
    description:
      "DHA Licensed General Practitioner who graduated from Badji Mokhtar University of Annaba, Algeria and completed a postgraduate one year internship in the renowned Annaba's University Hospital (1087 beds).",
  },
]

const OurDocutorsSliderSection = async () => {
  return (
    <section className="lg:my-20. my-10">
      <Container>
        <div className="mb-10 text-center">
          <SectionHeading>Our Doctors</SectionHeading>
          <p className="mx-auto mt-2 max-w-3xl text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            quia numquam dolore. Ex facilis doloribus dolor dolore soluta,
          </p>
        </div>

        <OurDocutorsSlider ourDocutors={ourDocutors} />
      </Container>
    </section>
  )
}

export default OurDocutorsSliderSection
