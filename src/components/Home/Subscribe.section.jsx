import React from 'react';

export default function SubscribeSection() {
  return (
    <section className="flex flex-col gap-8 text-center web:gap-10">
      <span className="text-2xl font-bold web:leading-snug web:max-w-6xl web:mx-auto web:text-5xl">We enable people to work where they want, when they want and how they want</span>
      <span className="text-sm web:max-w-2xl web:mx-auto web:text-xl text-secondary opacity-60">
        We offer offices for lease by the day, by the week, or by the year.
        Choose from any of our 3000 locations. Get a free quote!
      </span>

      <div className="flex flex-col gap-2 web:gap-4">
        <div className="flex justify-center w-full">
          <div className="relative w-full max-w-sm">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full max-w-sm py-4 pl-6 text-[#C1C1C1] rounded-full pr-28 border-for-cta focus:outline-primary duration-700 focus:text-primary"
            />

            <div className="absolute top-0 flex items-center h-full overflow-hidden right-4">
              <button type="button" className="px-4 py-2 text-base font-bold text-white capitalize rounded-full bg-primary">
                Submit
              </button>
            </div>
          </div>
        </div>

        <span className="text-sm opacity-50 web:text-base text-secondary">No worries, we don’t do spam!</span>
      </div>
    </section>
  );
}
