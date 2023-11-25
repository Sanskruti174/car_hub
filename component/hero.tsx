import Image from 'next/image';
import CustomButton from './CustomButton';
const Hero = () => {
  return (
    <div className='hero'>
       <div className='flex-1 pt-36 padding-x'> 
       <h1 className='hero__title'>
        Find , Book or rent a Car -- quickly and easily!
       </h1>
       <p className='hero_subtitle'> Stream line your car rental
        experiment with our effortless bokking</p>
        <CustomButton/>
       </div>
    </div>
  )
}
export default Hero