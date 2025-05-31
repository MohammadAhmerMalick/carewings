import HeroSection from '@/components/sections/HeroSection'
import RatingSection from '@/components/sections/RatingSection'
import HealthCare from '@/components/sections/HealthCareSection'
import AvailabilitySection from '@/components/sections/AvailabilitySection'
import TestimonialSliderSection from '@/components/sections/TestimonialSliderSection'
import OurDocutorsSliderSection from '@/components/sections/OurDocutorsSliderSection'
import ServiceHighlightSliderSection from '@/components/sections/ServiceHighlightSliderSection'
import FrequentlyAskedQuestionsSection from '@/components/sections/FrequentlyAskedQuestionsSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <RatingSection />
      <ServiceHighlightSliderSection />
      <OurDocutorsSliderSection />
      <HealthCare />
      <AvailabilitySection />
      <TestimonialSliderSection />
      <FrequentlyAskedQuestionsSection />
    </main>
  )
}
