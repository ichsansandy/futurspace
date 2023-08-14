import React from 'react';
import { BsFillPlayFill } from 'react-icons/bs';

export default function CTAsection() {
  return (
    <section className="bg-[#EFF5FE] p-10 rounded-3xl">
      <div className="flex flex-col-reverse gap-6 web:grid web:gap-0 web:grid-cols-2">
        <div className="flex items-center wrapper-text">
          <div className="flex flex-col gap-6 web:gap-10">
            <span className="text-2xl font-bold web:max-w-2xl web:text-5xl web:leading-snug">
              Customised workspace for rent wherever you need it
            </span>

            <div className="wrapper-button">
              <button type="button" className="py-2.5 px-6 web:px-10 web:py-3 text-sm web:text-lg font-bold text-white capitalize rounded-full bg-primary">boot tour</button>
            </div>
          </div>
        </div>

        <div className="flex justify-end wrapper">
          <div className="relative">
            <img src="/images/cta.png" alt="images" />
            <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
              <div className="p-2 text-white rounded-full background-for-play-cta-section">
                <BsFillPlayFill className="text-5xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
