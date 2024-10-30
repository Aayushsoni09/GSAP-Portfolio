// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';

// const Hero = ({ darkMode }: { darkMode: boolean }) => {
//   const heroRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from('.hero-image', {
//         scale: 0.8,
//         opacity: 0,
//         duration: 1,
//         stagger: 0.2,
//         ease: 'power3.out',
//       });
//     }, heroRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={heroRef}
//       className="section hero-section min-h-screen py-20 border-b border-gray-300"
//     >
//       <h1
//         className={`text-7xl md:text-9xl font-bold mb-12 bg-gradient-to-r ${
//           darkMode
//             ? 'from-purple-400 to-pink-400'
//             : 'from-purple-600 to-pink-600'
//         } text-transparent bg-clip-text`}
//       >
//         YASH JOSHI
//       </h1>

//       <div className="grid grid-cols-2 gap-4 h-auto">
//         <div className="grid grid-rows-2 gap-4">
//           <div className="hero-image row-span-1 overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 h-full">
//             <img
//               src="https://res.cloudinary.com/aayush009/image/upload/v1730280614/YASH-JOSHI/ilhnbhserrqrbhyjndx4.jpg"
//               alt="Model"
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <div className="hero-image row-span-1 overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 h-full">
//             <img
//               src="https://res.cloudinary.com/aayush009/image/upload/v1730280356/YASH-JOSHI/e8chet4rs0h7yltg9aso.jpg"
//               alt="Model"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//         <div className="grid grid-rows-2 gap-4">
//           <div className="hero-image row-span-1 overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 h-full">
//             <img
//               src="https://res.cloudinary.com/aayush009/image/upload/v1730280419/YASH-JOSHI/t0llkxmrxbvrgmxg6nsp.jpg"
//               alt="Model"
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <div className="hero-image row-span-1 overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 h-full">
//             <img
//               src="https://res.cloudinary.com/aayush009/image/upload/v1730281443/DSC_9514_ds0ipl.jpg"
//               alt="Model"
//               className="w-full h-full object-cover object-top"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = ({ darkMode }: { darkMode: boolean }) => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-image', {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="section hero-section min-h-screen py-20 border-b border-gray-300"
    >
      <h1
        className={`text-7xl md:text-9xl font-bold mb-12 bg-gradient-to-r ${
          darkMode
            ? 'from-purple-400 to-pink-400'
            : 'from-purple-600 to-pink-600'
        } text-transparent bg-clip-text`}
      >
        YASH JOSHI
      </h1>

      <div className="grid grid-cols-2 gap-4 h-auto">
        <div className="grid grid-rows-2 gap-4">
          <div
            className={`hero-image row-span-1 overflow-hidden rounded-lg border-4 ${
              darkMode ? 'border-gray-700' : 'border-white'
            } h-full shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl`}
          >
            <img
              src="https://res.cloudinary.com/aayush009/image/upload/v1730280614/YASH-JOSHI/ilhnbhserrqrbhyjndx4.jpg"
              alt="Model"
              className="w-full h-full object-cover transition-transform duration-300"
            />
          </div>
          <div
            className={`hero-image row-span-1 overflow-hidden rounded-lg border-4 ${
              darkMode ? 'border-gray-700' : 'border-white'
            } h-full shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl`}
          >
            <img
              src="https://res.cloudinary.com/aayush009/image/upload/v1730280356/YASH-JOSHI/e8chet4rs0h7yltg9aso.jpg"
              alt="Model"
              className="w-full h-full object-cover transition-transform duration-300"
            />
          </div>
        </div>
        <div className="grid grid-rows-2 gap-4">
          <div
            className={`hero-image row-span-1 overflow-hidden rounded-lg border-4 ${
              darkMode ? 'border-gray-700' : 'border-white'
            } h-full shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl`}
          >
            <img
              src="https://res.cloudinary.com/aayush009/image/upload/v1730280419/YASH-JOSHI/t0llkxmrxbvrgmxg6nsp.jpg"
              alt="Model"
              className="w-full h-full object-cover transition-transform duration-300"
            />
          </div>
          <div
            className={`hero-image row-span-1 overflow-hidden rounded-lg border-4 ${
              darkMode ? 'border-gray-700' : 'border-white'
            } h-full shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl`}
          >
            <img
              src="https://res.cloudinary.com/aayush009/image/upload/v1730281443/DSC_9514_ds0ipl.jpg"
              alt="Model"
              className="w-full h-full object-cover object-top transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
