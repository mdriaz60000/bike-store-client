// import { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";


// interface BannerItem {
//   image: string;
//   title?: string;
//   subtitle?: string;
//   ctaText?: string;
// }

// export function Banner() {
//   const [bannerBike, setBannerBike] = useState<BannerItem[]>([]);

//   useEffect(() => {
//     fetch("bannerBikes.json")
//       .then((res) => res.json())
//       .then((data) => setBannerBike(data));
//   }, []);

//   return (
//     <div className="w-full mx-auto max-w-screen-xl relative">
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         loop={true}
//         autoplay={{
//           delay:1000,
//           disableOnInteraction: false,
//           pauseOnMouseEnter: true,
//         }}
//         pagination={{
//           clickable: true,
//           dynamicBullets: true,
//         }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         className="mySwiper rounded-xl overflow-hidden shadow-xl"
//         breakpoints={{
//           640: { slidesPerView: 1 },
//           768: { slidesPerView: 1 },
//           1024: { slidesPerView: 1 },
//         }}
//       >
//         {bannerBike.map((item, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative">
//               <img
//                 src={item.image}
//                 alt={`Banner ${index + 1}`}
//                 className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover brightness-90"
//               />
              
//               {/* Text Overlay */}
//               <div className="absolute inset-0 flex flex-col items-start justify-center p-8 text-white bg-gradient-to-r from-black/60 to-transparent">
//                 {item.title && (
//                   <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 drop-shadow-lg">
//                     {item.title}
//                   </h2>
//                 )}
//                 {item.subtitle && (
//                   <p className="text-lg sm:text-xl md:text-2xl mb-6 max-w-lg drop-shadow-md">
//                     {item.subtitle}
//                   </p>
//                 )}
//                 {item.ctaText && (
//                   <button className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
//                     {item.ctaText}
//                   </button>
//                 )}
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }




import { Link } from "react-router-dom";
import Container from "../../components/shared/Containeer/Containeer";

const Bannar = () => {
  return (
    <Container>
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-8 gap-4 max-h-[70vh] overflow-hidden">

        {/* Main Banner Section */}
        <div className="lg:col-span-6 bg-gradient-to-r from-primary to-primary-dark text-white p-8 rounded-xl shadow-md flex items-center">
          <div className="grid md:grid-cols-2 gap-6 items-center w-full">
            {/* Text Section */}
            <div className="space-y-5">
              <h2 className="text-3xl sm:text-4xl font-extrabold">Mega Deals Offer!</h2>
              <p className="text-lg sm:text-xl">
                Get up to <span className="font-bold text-yellow-300">30% OFF</span> on all motor bikes.
                Hurry before stock ends!
              </p>
        <div>
              <Link to="/offer" className="bg-white text-primary font-semibold px-6 py-3 rounded-md hover:bg-yellow-100 transition">
                Shop Now
              </Link>
        </div>

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

        {/* Side Bikes Section */}
<div className="hidden lg:flex lg:col-span-2 flex-col gap-4">
  <img
    className="w-full h-1/2 object-cover rounded-xl shadow-md"
    src="https://www.roadracingworld.com/wp-content/uploads/2024/09/GSX800FRQM4_QZY_right_1726115833.jpg"
    alt="Side Bike 1"
  />
  <img
    className="w-full h-1/2 object-cover rounded-xl shadow-md"
    src="https://s7g10.scene7.com/is/image/ktm/KTM-2025-350-XC-F-Factory-Edition?wid=1000&dpr=off"
    alt="Side Bike 2"
  />
</div>

      </div>
    </Container>
  );
};

export default Bannar;



