import { Slide, Zoom } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Artists = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="mt-24 ">
      <Zoom>
        <h1 className="text-2xl font-bold lg:text-4xl text-center text-orange-500 mb-12">
          Meet the Makers
        </h1>
      </Zoom>
      <h3 className="text-center my-3 text-xl font-bold  ">
        <span className="text-center my-3 text-xl font-bold text-lime-500">
          <Typewriter words={["Maker of the month"]} loop={Infinity} />
        </span>
      </h3>
      {/* content */}
      <div className="flex gap-3 flex-col items-center justify-center md:flex-row lg:flex-row relative">
        <div className="w-1/2" data-aos="fade-right">
          <img
            src="https://i.ibb.co/BBSp3m4/author.jpg"
            alt="author"
            className="w-full rounded-xl"
          />
        </div>
        <div
          className="w-1/2  flex items-center justify-center  text-wrap mt-10 p-0 md:p-5"
          data-aos="fade-left"
        >
          <p className="mt-3 h-1/2 text-wrap   ">
            <span className="font-extrabold text-2xl text-orange-500">W</span>
            elcome to the world of creativity guided by{" "}
            <span className="text-orange-500 font-bold">Emily Rodriguez</span>.
            With a lifelong passion for art and craftsmanship, Emily has
            dedicated herself to bringing beauty and inspiration into the lives
            of others. <br />
            <br />
            As the founder and creative mind behind our website, Emily's journey
            began at a young age, sketching and painting her way through
            childhood. With formal training in fine arts and a deep appreciation
            for traditional techniques, she embarked on a mission to share her
            love for creativity with the world. <br /> <br /> Today, Emily
            curates a collection of artisanal treasures and offers valuable
            resources to help fellow art enthusiasts explore their own artistic
            potential. Join Emily on this creative journey, and let the beauty
            of handmade creations ignite your imagination.
          </p>
        </div>
        <div className="absolute top-5  hidden md:block lg:block">
          <h1
            className=" text-3xl font-bold text-orange-500  "
            data-aos="fade-left"
          >
            Emily Rodriguez
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Artists;
