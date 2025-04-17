import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface BannerItem {
  image: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
}

export function Banner() {
  const [bannerBike, setBannerBike] = useState<BannerItem[]>([]);

  useEffect(() => {
    fetch("bannerBikes.json")
      .then((res) => res.json())
      .then((data) => setBannerBike(data));
  }, []);

  return (
    <div className="w-full mx-auto max-w-screen-xl relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay:1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-xl overflow-hidden shadow-xl"
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
      >
        {bannerBike.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img
                src={item.image}
                alt={`Banner ${index + 1}`}
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover brightness-90"
              />
              
              {/* Text Overlay */}
              <div className="absolute inset-0 flex flex-col items-start justify-center p-8 text-white bg-gradient-to-r from-black/60 to-transparent">
                {item.title && (
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 drop-shadow-lg">
                    {item.title}
                  </h2>
                )}
                {item.subtitle && (
                  <p className="text-lg sm:text-xl md:text-2xl mb-6 max-w-lg drop-shadow-md">
                    {item.subtitle}
                  </p>
                )}
                {item.ctaText && (
                  <button className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                    {item.ctaText}
                  </button>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}