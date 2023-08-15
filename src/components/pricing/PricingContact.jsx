import { HiPlay } from 'react-icons/hi2';
import contact from './contact.png';

export default function PricingContact() {
  return (
    <div className="py-[60px]">
      <div className="p-[60px] flex flex-col gap-[21.3px] bg-accent rounded-xl web:flex-row web:justify-between">
        <div className="hidden web:flex flex-col gap-9 items-start justify-center">
          <h2 className="max-w-[768px] text-4xl xl:text-5xl xl:leading-[55px] ">
            Confused about which plan would be most suitable for me?
          </h2>
          <button
            type="button"
            className="px-10 py-5 transition-all hover:scale-125 bg-primary text-white rounded-[50px]"
          >
            Contact Us
          </button>
        </div>
        <div className="relative group max-w-[428px]">
          <img
            alt="contact"
            className=""
            src={contact}
          />
          <button
            type="button"
            className="absolute text-white m-auto left-0 right-0 top-0 bottom-0 bg-primary/40 flex justify-center items-center text-[12px] sm:text-[20px] w-[12%] aspect-square rounded-full group-hover:scale-150 transition-all"
          >
            <HiPlay />
          </button>
        </div>
        <div className="flex flex-col items-start gap-[14.5px] max-w-[450px] web:hidden">
          <p className="text-[29.2px] leading-[40.9px] font-bold">
            We enable people to work where they want, when they want and how they want
          </p>
          <p className="text-[21px] leading-[30.9px] ">
            We offer offices for lease by the day, by the week, or by the year.
            Choose from any of our 3000 locations.
            Get a free quote!
          </p>
          <button
            type="button"
            className="text-white bg-primary px-10 py-5 text-[21px] rounded-[50px] leading-[26px]"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
