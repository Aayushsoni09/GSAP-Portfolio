import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Collaborations = ({ darkMode }: { darkMode: boolean }) => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.marquee-content', {
        xPercent: -50,
        repeat: -1,
        duration: 10, // Reduced duration for faster speed
        ease: 'none',
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  const brands = ['THRUST.CLUB', 'POPSHOP', 'JOHN-ELLIES', 'ALANTE'];

  return (
    <section className="section py-10 -mt-10">
      {' '}
      {/* Added negative margin-top */}
      <h2
        className={`text-6xl font-bold mb-4 bg-gradient-to-r ${
          darkMode ? 'from-orange-400 to-red-400' : 'from-orange-600 to-red-600'
        } text-transparent bg-clip-text text-center`}
      >
        COLLABS
      </h2>
      <hr className="border-purple-300 my-4" />
      <div
        ref={marqueeRef}
        className="relative whitespace-nowrap overflow-hidden w-full"
      >
        <div className="marquee-content inline-block">
          {brands.map((brand, index) => (
            <span
              key={index}
              className={`text-8xl md:text-9xl font-bold mx-6 inline-block bg-gradient-to-r ${
                darkMode
                  ? 'from-pink-400 to-purple-400'
                  : 'from-pink-600 to-purple-600'
              } text-transparent bg-clip-text hover:scale-105 transition-transform cursor-default`}
            >
              {brand}
            </span>
          ))}
        </div>
        <div className="marquee-content inline-block">
          {brands.map((brand, index) => (
            <span
              key={index + 'clone'}
              className={`text-8xl md:text-9xl font-bold mx-6 inline-block bg-gradient-to-r ${
                darkMode
                  ? 'from-pink-400 to-purple-400'
                  : 'from-pink-600 to-purple-600'
              } text-transparent bg-clip-text hover:scale-105 transition-transform cursor-default`}
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
      <hr className="border-purple-300 my-4" />
    </section>
  );
};

export default Collaborations;
