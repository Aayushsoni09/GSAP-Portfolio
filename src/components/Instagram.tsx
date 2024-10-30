import React from 'react';

const Instagram = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <section className="section py-20">
      <div className="flex flex-col md:flex-row items-center justify-between mb-12">
        <h2
          className={`text-6xl font-bold bg-gradient-to-r ${
            darkMode
              ? 'from-purple-400 to-pink-400'
              : 'from-purple-600 to-pink-600'
          } text-transparent bg-clip-text text-center`}
        >
          INSTAGRAM
        </h2>
        {/* Instagram handle centered on mobile */}
        <a
          href="https://www.instagram.com/just.yaasshh/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex flex-col items-center md:flex-row space-x-2 text-xl ${
            darkMode ? 'hover:text-pink-400' : 'hover:text-pink-600'
          } transition-colors mt-4 md:mt-0`}
        ></a>
      </div>

      {/* Instagram Profile Embed */}
      <div className="flex justify-center">
        <iframe
          src="https://www.instagram.com/just.yaasshh/embed"
          width="400"
          height="480"
          className="rounded-lg shadow-lg"
          allow="encrypted-media"
        />
      </div>
    </section>
  );
};

export default Instagram;
