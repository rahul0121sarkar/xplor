import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper/modules";

const Industries = () => {
  const industries = [
    {
      title: "Manufacturing",
      description: [
        "Making products from raw materials.",
        "Uses machines and labor.",
        "Includes mass and custom production.",
        "Technology improves efficiency.",
        "Supports economy and jobs.",
      ],
      image: "/robo.webp",
    },
    {
      title: "Healthcare",
      description: [
        "Provides medical services.",
        "Includes hospitals and clinics.",
        "Enhances patient care with technology.",
        "Supports public health initiatives.",
        "Creates jobs in the medical field.",
      ],
      image: "/robo.webp",
    },
    {
      title: "Education",
      description: [
        "Provides learning opportunities.",
        "Uses technology for e-learning.",
        "Supports personal and career growth.",
        "Includes schools and universities.",
        "Creates jobs for teachers and researchers.",
      ],
      image: "/robo.webp",
    },
    {
      title: "Automotive",
      description: [
        "Provides learning opportunities.",
        "Uses technology for e-learning.",
        "Supports personal and career growth.",
        "Includes schools and universities.",
        "Creates jobs for teachers and researchers.",
      ],
      image: "/robo.webp",
    },
  ];

  return (
    <section className="py-12 offercart">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-[#4F8A8B] leading-1.5">
          Industries We Serve
        </h1>
        <p className="text-gray-600 tail">
          Empowering Diverse Sectors with Innovative Solutions
        </p>
      </div>

      {/* Swiper Carousel */}
      <div className="max-w-full mx-auto overflow-hidden ">
        <Swiper
          slidesPerView={3}
          spaceBetween={9}
          // pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          modules={[Pagination, Autoplay]} // Fixed Spelling
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            480: { slidesPerView: 1 },
          }}
          className="mySwiper"
        >
          {industries.map(({ title, description, image }, index) => (
            <SwiperSlide key={index}>
              <div className="flex max-w-xl border rounded-xl shadow-lg overflow-hidden bg-white swiper-box">
                {/* Left Image Section */}
                <div className="w-1/3">
                {/* <video autoPlay loop muted playsInline className="w-full h-full object-cover rounded">
                    <source src="/video/banner.mp4" type="video/mp4" />
                  </video> */}

                  <img src={image} alt="ai-robo" className="w-full h-full object-cover rounded"  />
                </div>

                {/* Right Content Section */}
                <div className="w-2/3 pl-4 swiper-elem-content">
                  <h2 className="text-teal-700 font-bold text-lg">{title}</h2>
                  <ul className="list-disc text-gray-600 text-sm pl-5">
                    {description.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>

                  {/* We Offer Section */}
                  <div className="mt-3 text-teal-700 font-semibold">
                    We offer:  
                    <span className="flex ml-2 space-x-2">🏭 🏥 🎓</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Industries;
