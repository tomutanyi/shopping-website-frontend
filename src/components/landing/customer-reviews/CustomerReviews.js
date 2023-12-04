import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import user from './user.png'

function CustomerReviews() {
  return (
    <div>
        <h1 className='text-4xl font-bold text-center mb-5'>What our users say about us...</h1>
        <Carousel showThumbs={false} showArrows={true} autoPlay={true} infiniteLoop={true} stopOnHover={true} swipeable={true}>
            <div className="flex flex-row justify-center">
                <div className="flex w-1/2 justify-center border shadow-lg p-4">
                    <div className="flex flex-col justify-center w-1/12 mr-3 items-center">
                        <img src={user} alt="" className=""/>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold text-left">joelnyongesa</p>
                        <p className="text-sm text-left">Such a good platform. Saved me a lot of dollars</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-row justify-center">
                <div className="flex w-1/2 justify-center border shadow-lg p-4">
                    <div className="flex flex-col justify-center w-1/12 mr-3 items-center">
                        <img src={user} alt="" className=""/>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold text-left">marynjoki</p>
                        <p className="text-sm text-left">Cannot emphasize enough how useful this site is. Great job</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-row justify-center">
                <div className="flex w-1/2 justify-center border shadow-lg p-4">
                    <div className="flex flex-col justify-center w-1/12 mr-3 items-center">
                        <img src={user} alt="" className=""/>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold text-left">tomutanyi</p>
                        <p className="text-sm text-left">Amidst tough economic times, this is just the right tool to help you save. Always come here whenever I want to shop for any product online</p>
                    </div>
                </div>
            </div>
        </Carousel>
    </div>
  )
}

export default CustomerReviews