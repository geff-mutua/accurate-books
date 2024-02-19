import brandLogo from "../../assets/brandLogo.png"
const Footer = () => {
    return (
        <div className="bg-[#F9FAFB] md:px-14 p-4 mx-auto max-w-screen-2xl text-dark">

            <div className='my-12 flex flex-col md:flex-row gap-10'>
                <div className='md:w-3/12 space-y-8'>
                    <a href="/" className='text-2xl items-center flex space-x-3 font-semibold text-primary'>
                        <img src={brandLogo} alt="" className='inline-block items-center' />

                    </a>

                    <h4 className='text-xl'>Stay up to date</h4>

                    <input type="emal" name="email" id="email" placeholder='Your email'
                        className="bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none" />
                    {/* <input type="submit" value={'Subscribe'} className='px-4 py-2 bg-secondary text-white rounded-md -ml-2 cursor-pointer hover:bg-primary hover:text-white transition-all duration-300' name="" id="" /> */}

                </div>

                {/* Footer Navigation */}
                <div className='md:w-9/12 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start'>
                    <div className='mt-5 space-y-4'>
                        <h4 className='text-xl'>Contacts</h4>
                        <ul className='space-y-3'>
                            <a href='/' className='block hover:text-gray-300'>VERTEX HUB GROUP LIMITED</a>
                            <a className='block hover:text-gray-300'>Riverside Park Waiyaki Way, Nairobi</a>
                            <a className='block hover:text-gray-300'>Phone: +254 700 354 050</a>
                            <a className='block hover:text-gray-300'>Email: info@vertexhubgroup.com</a>
                        </ul>

                    </div>

                    <div className='mt-5 space-y-4'>
                        <h4 className='text-xl'>Solutions</h4>
                        <ul className='space-y-3'>
                            <a href='/' className='block hover:text-gray-300'>Hubx</a>
                            <a href='/features' className='block hover:text-gray-300'>LoanMint</a>
                            <a href='/about' className='block hover:text-gray-300'>Enterprise Solutions </a>
                            <a href='/pricing' className='block hover:text-gray-300'>Software Development</a>
                        </ul>
                    </div>

                    <div className='mt-5 space-y-4'>
                        <h4 className='text-xl'>Resources</h4>
                        <ul className='space-y-3'>
                            <a href='/' className='block hover:text-gray-300'>Blog</a>
                            <a href='/features' className='block hover:text-gray-300'>News Letter</a>
                            <a href='/about' className='block hover:text-gray-300'>Help centre</a>
                            <a href='/pricing' className='block hover:text-gray-300'>Career</a>
                        </ul>
                    </div>



                </div>

            </div>

            <hr />

            <div className='flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8'>
                <p>© Copyright Vertex Hub Group Limited. All Rights Reserved</p>
                <div className='flex items-center space-x-10'>
                    <a className='w-8 cursor-pointer hover:translate-y-4 duration-300 transition-all'>Terms</a>
                    <a className='w-8 cursor-pointer hover:translate-y-4 duration-300 transition-all'>Privacy</a>
                    <a className='w-8 cursor-pointer hover:translate-y-4 duration-300 transition-all'>Cookies</a>
                </div>
            </div>

        </div>
    )
}

export default Footer