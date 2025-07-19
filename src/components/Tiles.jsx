// TileCarousel.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

import health from "../assets/health.jpg";
import energy from "../assets/energy.jpg";
import public1 from "../assets/public.jpg";
import digital from "../assets/digital.jpg";
import logis from "../assets/logis.jpg";
const TileCarousel = () => {
  const tiles = [
    {
      id: 1,
      title: "Healthcare & Life Sciences",
      desc: "Elevating patient care, expanding infrastructure, and scaling medical technologies.",
      image: health,
    },
    {
      id: 2,
      title: "Clean Energy & Gas Distribution",
      desc: "Empowering energy access through innovation in renewable and sustainable solutions.",
      image: energy,
    },
    {
      id: 3,
      title: "Public Sector Partnerships",
      desc: "Supporting governments and NGOs in delivering citizen-centric services at scale.",
      image: public1,
    },
    {
      id: 4,
      title: "Digital  Technology-Driven Ventures",
      desc: "Accelerating innovation through AI, data platforms, and smart infrastructure.",
      image: digital,
    },
    {
      id: 5,
      title: "Logistics & Mobility",
      desc: "Enhancing connectivity, distribution efficiency, and cross-border access.",
      image: logis,
    },
  ];

  return (
    <div className="w-full px-4">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 2500, // 3 seconds
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{ clickable: true }}
      >
        {tiles.map((tile) => (
          <SwiperSlide key={tile.id}>
            <div className="h-[90vh] flex flex-col justify-between items-center bg-white rounded-lg shadow-md overflow-hidden">
              {/* Image and text combined */}
              <div className="flex flex-col items-center w-full">
                <img
                  src={tile.image}
                  alt={tile.title}
                  className="w-[60vw] h-[65vh] object-cover"
                />
                <div className="w-full px-8 py-6 flex flex-col items-center">
                  <h1 className="text-4xl font-bold text-center text-gray-800 bower">
                    {tile.title}
                  </h1>
                  <p className="text-lg text-center text-gray-600 brogman mt-4 max-w-3xl">
                    {tile.desc}
                  </p>
                </div>
              </div>

              {/* Spacer div to simulate footer position and allow pagination to sit closer */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TileCarousel;
