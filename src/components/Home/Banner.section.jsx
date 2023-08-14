import React from 'react';

export default function Banner() {
  return (
    <section className="grid grid-cols-1 gap-10 web:gap-0 web:grid-cols-2">
      <div className="flex items-center wrapper-text">
        <div className="flex flex-col gap-6 web:gap-10">
          <span className="max-w-xs m-0 text-2xl font-bold web:leading-snug web:max-w-lg web:text-5xl">
            The workspace that works for you & your team
          </span>

          <span className="w-auto text-sm font-normal web:text-lg web:max-w-lg text-secondary opacity-60">A safe, comfortable, and hassle-free Coworking workspace increases productivity. Ideal workspaces make life easier and more productive.</span>

          <div className="flex flex-row items-center justify-start gap-4 mt-0 web:mt-4 web:gap-8">
            <button type="button" className="px-6 web:px-10 py-2.5 web:py-3 text-xs web:text-base font-bold text-white border-[1px] rounded-full bg-primary border-primary">Discover now</button>
            <button type="button" className="px-6 web:px-10 py-2.5 web:py-3 text-xs web:text-base font-bold border-[1px] rounded-full border-primary text-primary">Book a tour</button>
          </div>
        </div>
      </div>

      <div className="flex justify-center web:justify-end wrapper">
        <img src="/images/banner.png" alt="images" className="w-full web:max-w-2xl" />
      </div>
    </section>
  );
}
