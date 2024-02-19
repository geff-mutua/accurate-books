import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../utils/variants'
import aboutMain from '../../assets/aboutMain.png'
import about2 from '../../assets/about2.png'
import about3 from '../../assets/about3.png'
import Button from '../../components/frontend/shared/Button'

const About = () => {
    return (
        <div className='py-18 md:px-14 px-4 max-w-screen-2xl mx-auto mb-3' id='about'>
            <motion.div

                variants={fadeIn("left", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.5 }}

            >
                <div className='text-center mx-auto md:w-3/5'>
                <h6 className='text-tartiary font-semibold mb-4 '>About</h6>
                    <h3 className='md:text-5xl text-3xl font-semibold mb-5'> Account software for small businesses and <span className='text-primary'>freelancers.</span> </h3>
                    <p className='text-md text-dark'>Empower your small business or freelance venture with our user-friendly online accounting software. Say goodbye to complexity and hello to streamlined financial management. From hassle-free invoicing to intuitive expense tracking, our platform is designed to save you time and provide real-time insights. Stay organized, make informed decisions, and grow your business with confidence. Start simplifying your accounting today.</p>
                </div>
            </motion.div>

            <div className='mt-[100px] flex flex-col lg:flex-row justify-between items-center gap-10'>
                <motion.div
                 variants={fadeIn("right", 0.2)}
                 initial="hidden"
                 whileInView={"show"}
                 viewport={{ once: false, amount: 0.5 }}
                
                className='w-4/12 p-6 bg-[#0F2B87] rounded-2xl text-white hidden md:block'>
                    <img src={aboutMain} className='w-100' alt="" />
                    <h3 className='text-3xl'>Free</h3>
                    <p className='text-md'>That's right, completely free. The Standard plan of the On-Premise (self-hosted) version is free in terms of price and freedom (source code available).</p>
                </motion.div>
                <div className='md:w-8/12'>
                    <div 
                       
                    className='bg-[#F2F2F2] mb-8 rounded-3xl flex p-10 items-center'>
                        <motion.div

                            variants={fadeIn("down", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.5 }}
                        
                        className='justify-items-center'>
                            <h2 className='font-semibold text-3xl'>Online</h2>
                            <p className='text-md mb-4'>See your financials online anytime, anywhere on your computer, tablet or phone. Run your business from anywhere and know your cash position.</p>
                            <Button
                             text={"Get Started"}
                             styles={'rounded bg-secondary text-white py-2'}
                             />
                        </motion.div>
                        <motion.div
                         variants={fadeIn("left", 0.2)}
                         initial="hidden"
                         whileInView={"show"}
                         viewport={{ once: false, amount: 0.5 }}
                         className='hidden md:flex' >
                            <img src={about2} alt="" />
                        </motion.div>
                    </div>

                    <motion.div
                     variants={fadeIn("up", 0.2)}
                     initial="hidden"
                     whileInView={"show"}
                     viewport={{ once: false, amount: 0.5 }}
                    
                    className='bg-[#4B6CDA]  rounded-3xl flex p-8 items-center text-white'>
                    <div className='hidden md:flex' >
                            <img src={about3} alt="" />
                        </div>
                        <div className='justify-items-center pl-3'>
                            <h2 className='font-semibold text-3xl'>Open Source</h2>
                            <p className='text-md mb-3'>As we talk about your financials, you must be sure that data is in safe and software doesn't abuse them. Open Source software provides you full privacy.</p>
                            <Button 
                            text={'Try demo account'}
                            styles={'bg-white text-primary py-2'}/>
                        </div>
                       
                    </motion.div>

                </div>
            </div>
        </div>
    )
}

export default About