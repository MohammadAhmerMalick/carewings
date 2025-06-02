import Image from 'next/image'

const Favicon = ({ size = 512 }) => {
  return (
    <Image
      width={size}
      height={size}
      alt="Carewings"
      src="/assets/images/favicon.jpg"
    />
  )
}

export default Favicon
