import Aos from 'aos';
import React, { useEffect } from 'react';

export default function AnimationAOS({ children }) {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Durasi animasi dalam milidetik
      once: true, // Animasi hanya akan terjadi sekali saat scroll
    });
  }, []);

  return (
    <div
      data-aos="fade-right"
      data-aos-offset="500"
      data-aos-easing="ease-in-sine"
    >
      {children}
    </div>
  );
}
