import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

const cardsData = [
  {
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Rahul Sharma",
    designation: "Frontend Developer",
    about: "Passionate about building beautiful and functional web apps.",
  },
  {
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Anita Desai",
    designation: "UI/UX Designer",
    about: "Loves designing intuitive user interfaces.",
  },
  {
    photo: "https://randomuser.me/api/portraits/men/54.jpg",
    name: "Vikram Singh",
    designation: "Project Manager",
    about: "Ensures timely delivery with quality assurance.",
  },
  {
    photo: "https://randomuser.me/api/portraits/men/54.jpg",
    name: "Vikram Singh",
    designation: "Project Manager",
    about: "Ensures timely delivery with quality assurance.",
  },
  {
    photo: "https://randomuser.me/api/portraits/men/54.jpg",
    name: "Vikram Singh",
    designation: "Project Manager",
    about: "Ensures timely delivery with quality assurance.",
  },
  {
    photo: "https://randomuser.me/api/portraits/men/54.jpg",
    name: "Vikram Singh",
    designation: "Project Manager",
    about: "Ensures timely delivery with quality assurance.",
  },
  {
    photo: "https://randomuser.me/api/portraits/men/54.jpg",
    name: "Vikram Singh",
    designation: "Project Manager",
    about: "Ensures timely delivery with quality assurance.",
  },
  {
    photo: "https://randomuser.me/api/portraits/men/54.jpg",
    name: "Vikram Singh",
    designation: "Project Manager",
    about: "Ensures timely delivery with quality assurance.",
  },
  {
    photo: "https://randomuser.me/api/portraits/men/54.jpg",
    name: "Vikram Singh",
    designation: "Project Manager",
    about: "Ensures timely delivery with quality assurance.",
  },
  {
    photo: "https://randomuser.me/api/portraits/men/54.jpg",
    name: "Vikram Singh",
    designation: "Project Manager",
    about: "Ensures timely delivery with quality assurance.",
  },
  {
    photo: "https://randomuser.me/api/portraits/men/54.jpg",
    name: "Vikram Singh",
    designation: "Project Manager",
    about: "Ensures timely delivery with quality assurance.",
  },
  {
    photo: "https://randomuser.me/api/portraits/men/54.jpg",
    name: "Vikram Singh",
    designation: "Project Manager",
    about: "Ensures timely delivery with quality assurance.",
  },
  {
    photo: "https://randomuser.me/api/portraits/men/54.jpg",
    name: "Vikram Singh",
    designation: "Project Manager",
    about: "Ensures timely delivery with quality assurance.",
  },
  {
    photo: "https://randomuser.me/api/portraits/men/54.jpg",
    name: "Vikram Singh",
    designation: "Project Manager",
    about: "Ensures timely delivery with quality assurance.",
  },
  {
    photo: "https://randomuser.me/api/portraits/men/54.jpg",
    name: "Vikram Singh",
    designation: "Project Manager",
    about: "Ensures timely delivery with quality assurance.",
  },
  {
    photo: "https://randomuser.me/api/portraits/men/54.jpg",
    name: "Vikram Singh",
    designation: "Project Manager",
    about: "Ensures timely delivery with quality assurance.",
  },
  // Add more cards if needed
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
                  <h3 className="text-xl font-semibold mb-2">{card.name}</h3>
                  <p className="font-semibold text-gray-700 mb-3">
                    {card.designation}
                  </p>
                  <p className="text-gray-600 text-sm">{card.about}</p>
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
