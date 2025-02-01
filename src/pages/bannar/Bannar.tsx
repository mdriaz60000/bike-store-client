import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface BannerItem {
  image: string;
}

export function Banner() {
  const [bannerBike, setBannerBike] = useState<BannerItem[]>([]);

  useEffect(() => {
    fetch("bannerBikes.json")
      .then((res) => res.json())
      .then((data) => setBannerBike(data));
  }, []);

  return (
    <div className="w-full max-w-screen-xl mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          640: { slidesPerView: 1 }, // Mobile
          768: { slidesPerView: 1 }, // Tablet
          1024: { slidesPerView: 1 }, // Desktop
        }}
      >
        {bannerBike.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={item.image}
              alt={`Banner ${index + 1}`}
              className="w-full    lg:h-[500px] bg-sky-600   "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
