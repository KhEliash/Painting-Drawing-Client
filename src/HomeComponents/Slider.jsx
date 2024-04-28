import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Fade, Slide } from "react-awesome-reveal";

const Slider = () => {
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        
      >
        {/* slide 1 */}
        <SwiperSlide>
          <div className="  relative">
            <img
              src="https://i.ibb.co/WtVCXF0/landscape.jpg"
              alt="img"
              className="w-full h-[400px] lg:h-[600px]"
            />

            <div className="absolute top-0 left-0  w-full h-[400px] lg:h-[600px] flex ml-12 text-wrap">
              <div className=" flex flex-col items-start  justify-center lg:space-y-3">
                <Slide cascade>
                  <h1 className="text-3xl lg:text-5xl font-extrabold text-orange-500">
                    Nature's Palette
                  </h1>
                </Slide>

                <br />
                <p className="lg:text-2xl ">
                  Immerse yourself in the breathtaking beauty of our landscapes.
                  Explore vibrant colors, serene scenes, and endless
                  inspiration.
                </p>
                <br />
                <button className="btn  bg-orange-500 border-0 text-white">
                  Explore Now
                </button>
              </div>
              <div className="w-1/3"></div>
            </div>
          </div>
        </SwiperSlide>
        {/* slide 2 */}
        <SwiperSlide>
          <div className="  relative">
            <img
              src="https://i.ibb.co/MCdMFr1/oil-paint.jpg"
              alt="img"
              className="w-full h-[400px] lg:h-[600px]"
            />

            <div className="absolute top-0 left-0  w-full h-[400px] lg:h-[600px] flex ml-12 text-wrap">
              <div className=" flex flex-col items-start  justify-center lg:space-y-3">
                <Slide cascade>
                  <h1 className=" text-3xl lg:text-5xl  font-extrabold text-orange-500">
                    Elegant Brushstrokes
                  </h1>
                </Slide>
                <br />
                <p className="lg:text-2xl text-[#f7f74b] ">
                  Indulge in the rich textures and captivating hues of oil
                  paintings. Let every stroke tell a story, evoking emotions and
                  igniting imaginations
                </p>
                <br />
                <button className="btn bg-orange-500 border-0 text-white">
                  Explore Now
                </button>
              </div>
              <div className="w-1/3"></div>
            </div>
          </div>
        </SwiperSlide>
        {/* slide 3 */}
        <SwiperSlide>
          <div className="  relative">
            <img
              src="https://i.ibb.co/m5X0cQX/water-color.png"
              alt="img"
              className="w-full h-[400px] lg:h-[600px]"
            />

            <div className="absolute top-0 left-0  w-full h-[400px] lg:h-[600px] flex ml-12 text-wrap">
              <div className=" flex flex-col items-start  justify-center lg:space-y-3">
                <Slide cascade>
                  <h1 className="text-3xl lg:text-5xl font-extrabold text-orange-500">
                    Whimsical Watercolors
                  </h1>
                </Slide>
                <br />
                <p className="lg:text-2xl  text-[#f7f74b]">
                  Dive into the ethereal world of watercolor artistry.
                  Experience the fluidity of colors blending seamlessly,
                  creating dreamlike landscapes and enchanting scenes
                </p>
                <br />
                <button className="btn bg-orange-500 text-white border-0">
                  Explore Now
                </button>
              </div>
              <div className="w-1/3"></div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
