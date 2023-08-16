import React from 'react';

export default function CTASection() {
  return (
    <section className="bg-[#F0F6FF] flex flex-col-reverse gap-10 web:gap-0 rounded-[20px] p-10 web:p-20 relative">
      <div className="flex flex-col gap-6">
        <span className="text-2xl font-bold leading-snug web:max-w-2xl web:text-5xl">We have all the amenities you need to grow your business starting on day one</span>

        <p className="m-0 text-base web:max-w-2xl web:text-xl text-secondary opacity-60">We strive to create a professional and welcoming environment in order to foster collaboration, creativity, and productivity.</p>
        <div className="wrapper-button">
          <button type="button" className="px-7 web:px-10 py-2.5 text-sm font-bold text-white capitalize rounded-full web:py-3 web:text-lg bg-primary">get Started</button>
        </div>
      </div>

      <div className="web:absolute web:right-16 web:bottom-20">
        <img src="/images/ctasec.png" alt="images" />
      </div>

      <div className="absolute p-2 rounded-full right-8 top-60 web:p-5 web:right-14 web:bottom-20 bg-primary">
        <img src="/images/ctasecs.png" alt="images" className="w-5 h-5 web:h-auto web:w-auto" />
      </div>
    </section>
  );
}
