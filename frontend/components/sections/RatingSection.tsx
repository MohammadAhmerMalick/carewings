import { FaStar } from 'react-icons/fa6'

import Container from '@/common/Container'

const RatingSection = () => {
  return (
    <section>
      <Container>
        <div className="bg-gradient rounded-2xl p-6">
          <div className="grid grid-cols-4 rounded-xl bg-white px-4 py-8 text-center font-medium text-black">
            <div className="border-primary flex flex-col justify-center border-r-2">
              <p className="flex items-center justify-center gap-2 text-5xl">
                4.9 <FaStar className="text-yellow-500" />
              </p>
              <p className="mt-1 text-xl">Rating on Google</p>
            </div>

            <div className="border-primary flex flex-col justify-center border-r-2">
              <p className="text-5xl">24x7x365</p>
              <p className="mt-1 text-xl">Availability for your healthcare</p>
            </div>

            <div className="border-primary flex flex-col justify-center border-r-2">
              <p className="text-5xl">50+</p>
              <p className="mt-1 text-xl">
                Years of Combined Healthcare Experience
              </p>
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-5xl">1,000+</p>
              <p className="mt-1 text-xl">Happy Smiles Everyday</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default RatingSection
