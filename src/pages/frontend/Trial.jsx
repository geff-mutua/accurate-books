import trial from "../../assets/trial.png"
import Button from "../../components/frontend/shared/Button"
const Trial = () => {
  return (
    <div className='max-w-screen-2xl md:px-14 px-8 py-8 mx-auto'>
       <div className="md:flex justify-center">
            <div className='bg-primary  md:rounded-tl-2xl md:rounded-bl-2xl rounded text-white px-8 flex items-center py-2'>
                <div>
                    <h2 className="font-bold md:text-5xl text-3xl">Give us a shot</h2>
                    <p className="text-lg mt-3">Join over 4,000+ startups already growing with Untitled.</p>

                    <div className="my-10 md:flex md:gap-4 gap-1 ">
                        <Button text={"Get Started"} styles={'rounded-lg border py-2 bg-white text-primary hover:bg-primary hover:text-white mb-5'} />
                        <Button text={"Demo Account"}  styles={'rounded-lg py-2 bg-secondary text-white hover:bg-white hover:text-primary mb-5 md:ml-5'} />
                    </div>
                </div>
            </div>
            <div className="hidden md:flex">
                <img src={trial} className="rounded-tr-2xl " alt="" />
            </div>
       </div>
    </div>
  )
}

export default Trial