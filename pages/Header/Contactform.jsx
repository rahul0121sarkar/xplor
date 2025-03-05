import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {
  const formRef = useRef(null);
  const leftPanelRef = useRef(null);

  useEffect(() => {
    // GSAP animation for form appearance with ScrollTrigger
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      }
    );

    // GSAP animation for the left blue panel with ScrollTrigger
    gsap.fromTo(
      leftPanelRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: leftPanelRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-5xl flex">
        {/* Left Side (Video Background) */}
        <div
          ref={leftPanelRef}
          className="w-1/2 bg-gradient-to-b from-blue-700 to-purple-600 text-white flex flex-col justify-center items-center"
        >
          <div className="h-full w-full">
            <video autoPlay muted playsInline className="w-full h-full object-cover">
              <source src="./video/BoyLearning.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Right Side (Form with Matching Background) */}
        <div className="w-1/2 p-8 bg-[#1C0A4C] bg-opacity-80" ref={formRef}>
          <h2 className="text-2xl font-semibold text-blue-300  text-center mb-6">
            Contact Details
          </h2>

          <form className="space-y-5">
            {/* Name Fields */}
            <div className="flex gap-3.5">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-3 border-b border-white bg-transparent text-white focus:outline-none focus:border-blue-300"
                />
              </div>

              <div className="w-full">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-3 border-b border-white bg-transparent text-white focus:outline-none focus:border-blue-300"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border-b border-white bg-transparent text-white focus:outline-none focus:border-blue-300"
              />
            </div>

            {/* Contact */}
            <div>
              <input
                type="text"
                placeholder="Mobile Number"
                className="w-full p-3 border-b border-white bg-transparent text-white focus:outline-none focus:border-blue-300"
              />
            </div>

            {/* City */}
            <div>
              <input
                type="text"
                placeholder="Your Subject"
                className="w-full p-3 border-b border-white bg-transparent text-white focus:outline-none focus:border-blue-300"
              />
            </div>

            {/* Address */}
            <div>
              <textarea
                placeholder="Message"
                className="w-full p-3 border-b border-white bg-transparent text-white focus:outline-none focus:border-blue-300 resize-none"
                rows="3"
              ></textarea>
            </div>

           
        

            {/* Buttons */}
            <div className="flex">
              <button className="bg-blue-500 w-full cursor-pointer text-white font-bold px-5 py-3 rounded-lg hover:bg-blue-900 transition">
                Send Message
              </button>
           
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
