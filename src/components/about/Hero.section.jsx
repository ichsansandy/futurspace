import React from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { TiGroup } from 'react-icons/ti';

export default function HeroSection() {
  return (
    <section className="z-10 flex flex-col gap-10 text-white web:gap-20">
      <div className="grid grid-cols-1 gap-4 text-center web:gap-0 web:grid-cols-2 web:text-start">
        <span className="text-2xl font-bold web:text-5xl web:max-w-sm web:leading-snug">About our company</span>

        <div className="flex items-center justify-end">
          <div className="flex flex-col gap-3 text-base web:text-lg web:gap-6 opacity-80">
            <p className="m-0 web:max-w-xl">
              Our space is more than a shared office. It is a meeting ground for creatives and teams
            </p>
            <p className="m-0 web:max-w-xl">
              Find focus and clarity space to do the things you need to do to grow your business in
              New York. Book by the month, daily or by the hour.
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-full mx-auto">
        <div className="absolute top-0 left-0">
          <div className="bg-[#4DB3FE] py-1.5 text-xl web:text-[100px] web:py-3 px-5 web:px-20 rounded-[50px]">
            <HiOutlineArrowNarrowRight />
          </div>
        </div>
        <img src="/images/hero.png" alt="images" className="w-full h-auto mx-auto bg-cover" />
        <div className="absolute bottom-0 right-0">
          <div className="bg-white web:text-[80px] rounded-[50px] p-2 web:p-8 text-primary">
            <TiGroup />
          </div>
        </div>
      </div>
    </section>
  );
}
