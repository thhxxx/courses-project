import React from 'react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// Import Swiper styles
import {Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

const programs = [
  {
    category: "NEW",
    title: "Cloud computing",
    thumbnails: "https://htmlstream.com/preview/front-v4.2/html/assets/img/400x500/img14.jpg"
  },
  {
    category: "PYTHON",
    title: "What's new in Phython 3.7.2",
    thumbnails: "https://htmlstream.com/preview/front-v4.2/html/assets/img/400x500/img13.jpg"
  },
  {
    category: "TOOLING",
    title: "Build a staging server",
    thumbnails: "https://htmlstream.com/preview/front-v4.2/html/assets/img/400x500/img15.jpg"
  },
  {
    category: "JAVASCRIPT",
    title: "Laravel, Vue and SPAs",
    thumbnails: "https://htmlstream.com/preview/front-v4.2/html/assets/img/400x500/img16.jpg"
  },
  {
    category: "POPULAR",
    title: "Artificial Intelligence",
    thumbnails: "https://htmlstream.com/preview/front-v4.2/html/assets/img/400x500/img17.jpg"
  },
  {
    category: "PHP",
    title: "Programming terms explained",
    thumbnails: "https://htmlstream.com/preview/front-v4.2/html/assets/img/400x500/img18.jpg"
  },
  {
    category: "HTML CSS",
    title: "HTML5 CSS3 basic",
    thumbnails: "https://htmlstream.com/preview/front-v4.2/html/assets/img/400x500/img15.jpg"
  },
]

const ProgramsCarouselElement = () => {
  return (
    <div className="mt-[30px] mr-[calc(0px-((100vw-100%)/2)+15px)]">
      <Swiper
        slidesPerView={6}
        spaceBetween={15}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {
          programs.map((program, index) => {
            return <SwiperSlide key={index}>
              <div
                className="bg-cover	rounded-5 h-[250px] p-[15px] text-white flex flex-col"
                style={{
                  backgroundImage: `url(${program.thumbnails})`,
                }}
              >
                <div className="font-bold text-sm	text-[rgba(255,255,255,0.75)]">
                  {program.category}
                </div>
                <div className="mt-2.5 font-bold text-lg">
                  {program.title}
                </div>
                <div className="mt-auto">
                  <button className="font-bold text-lg">
                    Read now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          })
        }
      </Swiper>
    </div>
  );
};

export default ProgramsCarouselElement;