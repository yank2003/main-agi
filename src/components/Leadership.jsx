import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Vikram from "../assets/Vikram.jpg";
import Sandeep from "../assets/Sandeep.webp";
import Ranjeet from "../assets/Ranjeet.webp"
import Vivek from "../assets/Vivek.webp"
import Kirti from "../assets/Kirti.webp"
import Bhuvan from "../assets/Bhuvan.jpg"
import Pradeep from "../assets/Pradeep.jpg"

import { Autoplay, Navigation, Pagination } from "swiper/modules";

const cardsData = [
  {
    photo: Vikram,
    name: "Mr Vikram Singh Arora",
    designation: "Founder",
  },
  {
    photo: Bhuvan,
    name: "Mr Bhuvan Jha",
    designation: "Deputy CEO",
  },
  {
    photo: Kirti,
    name: "Mr Kirtikumar Lakhani",
    designation: "Vice President - Finance",
  },
  {
    photo: Pradeep,
    name: "Mr Pradeep Meharishi",
    designation: "Vice President - SCM & Projects",
  },
  {
    photo: Vivek,
    name: "Mr Vivek Modi",
    designation: "Vice President - Finance & Accounts",
  },
  {
    photo: Ranjeet,
    name: "Mr Ranjeet Rathore",
    designation: "General Manager - Legal",
  },
  {
    photo: Sandeep,
    name: "Mr Sandeep Pandita",
    designation: "Assistant Vice President - Information Technology",
  },
];

const CardSwiperTailwind = () => {
  return (
    <div className="w-full   rounded px-30 ">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={3}
        loop={true}
        speed={3000}
        freeMode={true}
        freeModeMomentum={true}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          reverseDirection: true,
        }}
        allowTouchMove={false}
      >
        {cardsData.map((card, idx) => (
          <SwiperSlide key={idx} className="!h-[1000px] pt-60">
            <div
              className="w-98 h-120 cursor-pointer group"
              style={{ perspective: "1000px" }}
            >
              <div
                className="relative w-full h-full transition-transform duration-700 group-hover:rotate-y-180"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Front Side */}
                <div
                  className="absolute w-full h-full rounded-xl overflow-hidden shadow-lg"
                  style={{
                    backfaceVisibility: "hidden",
                  }}
                >
                  <img
                    src={card.photo}
                    alt={card.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Back Side */}
                <div
                  className="absolute w-full h-full bg-gray-100 rounded-xl p-5 shadow-lg flex flex-col justify-center"
                  style={{
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <h3 className="text-3xl bower  font-semibold mb-2">
                    {card.name}
                  </h3>
                  <p className="font-semibold text-xl brogman tracking-wider text-gray-700 mb-3">
                    {card.designation}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSwiperTailwind;
