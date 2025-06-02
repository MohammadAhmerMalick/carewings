import { FaStar } from 'react-icons/fa6'

import Container from '@/common/Container'

const RatingSection = () => {
  return (
    <section>
      <Container>
        <div className="bg-gradient rounded-4xl p-4 lg:p-6">
          <div className="grid grid-cols-2 rounded-3xl bg-white text-center text-neutral-700 lg:grid-cols-4">
            <div className="border-primary flex flex-col justify-center border-r-2 p-4">
              <p className="flex items-center justify-center gap-2 text-2xl text-black sm:text-5xl">
                5.0 <FaStar className="text-yellow-500" />
              </p>
              <p className="mt-1 lg:text-xl">Rating on Google</p>
            </div>

            <div className="border-primary flex flex-col justify-center p-4 sm:border-r-2">
              <p className="text-2xl text-black sm:text-5xl">24x7x365</p>
              <p className="mt-1 lg:text-xl">
                Availability for your healthcare
              </p>
            </div>

            <div className="border-primary flex flex-col justify-center border-r-2 p-4">
              <p className="text-2xl text-black sm:text-5xl">50+</p>
              <p className="mt-1 lg:text-xl">
                Years of Combined Healthcare Experience
              </p>
            </div>

            <div className="flex flex-col justify-center p-4">
              <p className="text-2xl text-black sm:text-5xl">1,000+</p>
              <p className="mt-1 lg:text-xl">Happy Smiles Everyday</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default RatingSection
