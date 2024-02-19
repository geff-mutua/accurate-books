import React from 'react'
import {motion} from 'framer-motion'
import {fadeIn} from '../../utils/variants'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'

const Features = () => {
  return (
    <div className='max-w-screen-2xl py-24 px-4 mt-16 mx-auto' id='features'>
        <motion.div
         variants={fadeIn("up",0.2 )}
         initial="hidden"
         whileInView={"show"}
         viewport={{once:false,amount:0.2}}
         className='text-center'>
            <h6 className='text-tartiary font-semibold mb-4 '>Features</h6>
            <h3 className='font-extrabold md:w-3/5 text-3xl mx-auto md:text-5xl mb-2'>Analytics that feels like it’s from <span className='text-secondary'>the future</span></h3>
            <p className='text-md md:w-1/3 mx-auto px-4 text-[#475467]'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>

        </motion.div>

        {/* Show Features */}
        <div className='mt-16'>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10 md:w-11/12 mx-auto'>
                <div className='border shadow-3xl px-4 md:px-6 py-10 rounded-lg hover:-translate-y-4 transition-all duration-300 cursor-pointer'> 
                    <div className='flex justify-center'>
                        <img className='text-center' src={icon1} alt="" /> 
                    </div>
                    <h3 className='text-md text-dark mb-3 font-semibold text-center'>Share team Inboxes</h3>
                    <p className='text-md text-dark2 text-center'>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
                </div>

                <div className='border shadow-3xl px-4 md:px-6 py-10 rounded-lg hover:-translate-y-4 transition-all duration-300 cursor-pointer'> 
                <div className='flex justify-center'>
                        <img className='text-center' src={icon2} alt="" /> 
                    </div> 
                    <h3 className='text-md text-dark mb-3 font-semibold text-center'>Deliver instant answers</h3>
                    <p className='text-md text-dark2 text-center'>An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
                </div>

                <div className='border shadow-3xl px-4 md:px-6 py-10 rounded-lg hover:-translate-y-4 transition-all duration-300 cursor-pointer'>  
                <div className='flex justify-center'>
                        <img className='text-center' src={icon3} alt="" /> 
                    </div>
                    <h3 className='text-md text-dark mb-3 font-semibold text-center'>Manage your team with reports</h3>
                    <p className='text-md text-dark2 text-center'>Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features