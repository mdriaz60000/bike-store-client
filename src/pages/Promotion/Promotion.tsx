import { Link } from "react-router-dom";

const Promotion = () => {
  return (
    <div className="px-4 py-10 max-w-7xl mx-auto space-y-14">

      {/* Hero Offer Section */}
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl p-10 md:p-16 shadow-lg">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-5">
            <h1 className="text-4xl md:text-5xl font-extrabold">🔥 Big Summer Sale!</h1>
            <p className="text-lg md:text-xl">
              Enjoy up to <span className="font-bold text-yellow-300">30% OFF</span> on top brand motor bikes. Limited time only!
            </p>
            <Link to="/products">
              <button className="bg-white text-primary font-semibold px-6 py-3 rounded-md hover:bg-yellow-100 transition">
                Explore Bikes
              </button>
            </Link>
          </div>
          <img
            src="https://i.ibb.co/NnT6fc26/Chat-GPT-Image-Jun-27-2025-09-02-15-AM.png"
            alt="Promotional Bike"
            className="w-full h-auto rounded-lg shadow-xl"
          />
        </div>
      </div>

      {/* Featured Promotions */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Featured Offers</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Yamaha R15",
              desc: "Flat 25% off for students!",
              img: "https://i.ibb.co/Y0N1kXt/yamaha-r15.png",
            },
            {
              title: "Suzuki Gixxer",
              desc: "Buy 1, Get Helmet Free!",
              img: "https://i.ibb.co/ckPrNVW/suzuki-gixxer.png",
            },
            {
              title: "KTM Duke",
              desc: "0% EMI for 12 months!",
              img: "https://i.ibb.co/zNRB7NM/ktm-duke.png",
            },
          ].map((promo, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <img src={promo.img} alt={promo.title} className="w-full h-48 object-cover" />
              <div className="p-5 space-y-2">
                <h3 className="text-lg font-bold text-gray-900">{promo.title}</h3>
                <p className="text-sm text-gray-600">{promo.desc}</p>
                <Link to="/products">
                  <button className="mt-2 text-sm font-semibold text-primary hover:underline">Shop Now</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Promotion;
