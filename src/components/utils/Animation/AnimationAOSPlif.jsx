import Aos from 'aos';
import React, { useEffect } from 'react';

export default function AnimationAOSPlif({ children }) {
  useEffect(() => {
    Aos.init({
      duration: 3000, // Durasi animasi dalam milidetik
      once: false, // Animasi hanya akan terjadi sekali saat scroll
    });
  }, []);
  return (
    <div
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
    //   data-aos-duration="2000"
    >
      {children}
    </div>
  );
}
