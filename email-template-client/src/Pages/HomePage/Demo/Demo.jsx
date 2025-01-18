import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Navigation } from "swiper/modules";

const Demo = () => {
  return (
    <div className="mx-[12%] py-[1%] ">
      <div className="flex flex-col items-center my-[4%] gap-y-4">
        <span className="font-bold text-3xl bg-gradient-to-r from-orange-600 via-orange-400 to-orange-600 bg-clip-text text-transparent">
          Some of our Templates
        </span>
        <span className="w-[60%] h-[3px] bg-gradient-to-r from-orange-600 via-transparent to-orange-600"></span>
      </div>

      {/*  Swiper for email template demo*/}
      <div className="py-[5%]  mx-auto">
        <Swiper
          slidesPerView={3}
          spaceBetween={40}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          <div className="flex flex-wrap justify-around py-[4%]">
            {demoTemplate.map((template) => (
              <SwiperSlide key={template.id}>
                <div
                  key={template.id}
                  className=" bg-[rgba(255,255,255,0.3)] shadow-lg rounded-lg   text-center backdrop-blur-lg"
                >
                  <img
                    src={template.image}
                    alt={template.name}
                    className="h-[250px] rounded-lg"
                  />
                </div>
                <p className="font-semibold text-slate-600 text-center my-4">
                  {template.name}
                </p>
              </SwiperSlide>
            ))}
          </div>
          <div className="slider-controler flex justify-center items-center gap-x-5 mt-5">
            <div className="swiper-button-prev bg-orange-100 hover:bg-orange-200 cursor-pointer font-bold text-orange-500 p-3 rounded-full">
              <FaArrowLeftLong size={20} />
            </div>
            <div className="swiper-button-next bg-orange-100 hover:bg-orange-200 cursor-pointer font-bold text-orange-500 p-3 rounded-full">
              <FaArrowRightLong size={20} />
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Demo;

const demoTemplate = [
  {
    id: 1,
    image:
      "https://s3-alpha.figma.com/hub/file/4927480915/3835a38d-4275-43de-9694-577ff819411c-cover.png",
    name: "Creative Template",
  },
  {
    id: 2,
    image:
      "https://mailbakery.s3.amazonaws.com/wp-content/uploads/2017/05/14074042/mb-free-email-templates-preview.jpg",
    name: "Business Template",
  },
  {
    id: 3,
    image:
      "https://designmodo.com/wp-content/uploads/2024/01/email-template.jpg",
    name: "Minimalist Template",
  },
  {
    id: 4,
    image:
      "https://i2.wp.com/www.theme-junkie.com/wp-content/uploads/figma-email-template.jpeg",
    name: "Modern Template",
  },
];
