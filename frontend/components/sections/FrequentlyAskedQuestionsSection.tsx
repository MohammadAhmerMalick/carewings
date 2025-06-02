import Container from '@/common/Container'
import Accordion from '@/common/Accordion'
import SectionHeading from '@/common/SectionHeading'

export const benefits = [
  {
    id: 4,
    title: 'What to do if you get sick in Dubai?',
    description:
      'Dubai is one of the hubs in medicine and scientific study in the MENA region. It has some of the best healthcare providers in the UAE and the most innovative healthcare business models to rival any in the world in terms of patient experience and comfort. If you’ve come from a country like the UK with a national health service, Dubai’s system can be confusing at first. Here you don’t need to register with a specific GP; you can make an appointment at any clinic in the city, so you can try a few to find the doctor you are most comfortable with. We recommend that you opt for the comfortable option provided by CareWings Healthcare to call the doctor at your Hotel Room or to your home in Dubai.',
  },
  {
    id: 1,
    title: 'Do Your Doctors Treat Patients If It Is An Emergency?',
    description:
      'No, if it is an emergency you should dial 999 and request an ambulance.',
  },
  {
    id: 2,
    title: 'Are Your Doctors Fully Qualified?',
    description:
      'All Doctors that work with CareWings Doctor On call Services are fully registered with the Dubai Health Authority (DHA). We have full time doctors that are internationally trained and who work in shifts to cover 24/7 service. They treat a range of level 4 or 5 illnesses or conditions that are not life-threatening. These conditions can range from illnesses such as cold and flu symptoms to minor lacerations and trauma. Not only will our doctors give you the right treatment, but they also genuinely care about making you feel better. Our doctors are always courteous and respectful when being welcomed into your home. Don’t hesitate to choose CareWings Doctor at Home Services for doctors you can rely on.',
  },
]

const FrequentlyAskedQuestionsSection = () => {
  return (
    <section className="my-10 lg:my-20">
      <Container className="!max-w-5xl">
        <div className="mb-10 text-center">
          <SectionHeading>Frequently Asked Questions</SectionHeading>
        </div>

        <div className="grid gap-4">
          {benefits.map(({ id, title, description }, i) => (
            <Accordion key={id} heading={title} defaultExpanded={!i}>
              {description}
            </Accordion>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default FrequentlyAskedQuestionsSection
