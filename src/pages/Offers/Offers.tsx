import Container from "../../components/shared/Containeer/Containeer";

const Offers = () => {
  return (

    <Container>
<div className="  py-10 border-2 border-primary rounded-xl  mt-10 ">
      <div className="grid md:grid-cols-2 px-5 gap-6 items-center">
        {/* Text Section */}
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold">🔥 Limited Time Offer!</h2>
          <p className="text-lg sm:text-xl">
            Get up to <span className="font-bold text-yellow-300">30% OFF</span> on all motor bikes.
            Hurry up before the stock runs out!
          </p>
          <button className="bg-white text-primary font-semibold px-6 py-2 rounded-md hover:bg-yellow-100 transition">
            Shop Now
          </button>
        </div>

        {/* Image Section */}
        <div className="relative">
          <img
            src="https://i.ibb.co/NnT6fc26/Chat-GPT-Image-Jun-27-2025-09-02-15-AM.png"
            alt="Motor Bike Offer"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <span className="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
            30% OFF
          </span>
        </div>
      </div>
    </div>



    </Container>

  );
};

export default Offers;
