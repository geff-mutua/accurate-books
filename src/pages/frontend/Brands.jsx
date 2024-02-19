import brand1 from '../../assets/brands/brand1.png'
import microsoft from '../../assets/brands/microsoft.png'
import codebase from '../../assets/brands/codebase.png'
import cisco from '../../assets/brands/cisco.png'
import {motion} from 'framer-motion'
import {fadeIn} from '../../utils/variants'
const Brands = () => {
  return (
    <div
    className='max-w-screen-2xl md:px-14 px-8 bg-[#F7F7F7]  mb-14'>

        <div className='justify-center items-center py-8'>
            <h6 className='font-semibold text-center text-dark2'>Brands using Accurate Books</h6>

            <motion.div
                variants={fadeIn("up",0.2 )}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false,amount:0.2}}
                className='grid grid-cols-4 gap-4 place-items-center mt-4'>
                <img src={brand1} alt="" />
                <img src={microsoft} alt="" />
                <img src={cisco} alt="" />
                <img src={codebase} alt="" />
            </motion.div>
        </div>
    
    </div>
  )
}

export default Brands 