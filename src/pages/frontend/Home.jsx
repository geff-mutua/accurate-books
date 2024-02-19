import React from 'react'
import Navbar from '../../components/frontend/Navbar'
import Button from '../../components/frontend/shared/Button'
import banner from '../../assets/banner.png'
import {motion} from 'framer-motion'
import {fadeIn} from '../../utils/variants'

const Home = () => {
  return (
    <div>
       <Navbar />

       {/* Hero Message */}

      <motion.div
        variants={fadeIn("up",0.2 )}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false,amount:0.5}}
       className='text-center mt-[100px] py-12 mx-auto md:w-1/2 px-4 ' id='home'>
          <h3 className='text-[#2A2B2C] font-bold md:text-5xl text-3xl leading-normal mb-3'>Elevate Your Business with Effortless <span className='text-secondary'>Invoicing</span></h3>

          <Button
          text={'Request For Demo'}
          styles={'bg-primary rounded-full text-white py-3 mt-5 hover:border hover:bg-secondary'}
           />
      </motion.div>

      {/* Main Image Banner */}
      <motion.div
        variants={fadeIn("down",0.2 )}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false,amount:0.2}}
       className='flex flex-col items-center container mx-auto'>
         <img src={banner} className='w-11/12' alt="" />
      </motion.div>
    </div>
  )
}

export default Home