import hero from './hero-image.svg';

function Hero() {
  return (
    <div className="bg-gray-100 py-24">
      <div className="container mx-auto py-24">
        <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight mb-4">
                Shoppers:  Your Smart Shopping Companion
            </h1>
            <p className="italic text-gray-600 text-lg mb-6 lg:text-left text-center">
                Elevating Your Shopping Decisions
            </p>
        </div>

          <div className="lg:w-1/2 flex justify-center">
            <img
              src={hero}
              alt="hero shoppers community"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-700 text-lg mb-4">
            Tired of feeling overwhelmed by the multitude of options when
            shopping online?
          </p>
          <p className="text-gray-700 text-lg mb-4">
            Say goodbye to the confusion. Shopcrawl provides instant clarity by
            analyzing marginal benefits and cost benefits,{' '}
            <strong className="text-blue-500">
              guiding you to make informed decisions.
            </strong>
          </p>
          <p className="text-gray-700 text-lg">
            Welcome to a new era of intelligent shopping with Shoppers - Your
            trusted companion for maximizing value in every purchase.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;

