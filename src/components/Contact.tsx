import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const Contact = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <section className="section py-20">
      <h2
        className={`text-6xl font-bold mb-12 bg-gradient-to-r ${
          darkMode ? 'from-blue-400 to-green-400' : 'from-blue-600 to-green-600'
        } text-transparent bg-clip-text text-center`}
      >
        CONTACT
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <Mail className="w-8 h-8" />
            <a
              href="mailto:contact@janedoe.com"
              className={`text-2xl hover:bg-gradient-to-r ${
                darkMode
                  ? 'hover:from-purple-400 hover:to-pink-400'
                  : 'hover:from-purple-600 hover:to-pink-600'
              } hover:text-transparent hover:bg-clip-text transition-all`}
            >
              8226087062yash@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="w-8 h-8" />
            <span className="text-2xl">Indore, MP 452001</span>
          </div>
        </div>
        <div className="h-[400px] rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29629.261079332!2d75.8577!3d22.7196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh%20452001!5e0!3m2!1sen!2sin!4v1635835824092!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
