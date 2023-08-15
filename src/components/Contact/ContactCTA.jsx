import { HiPlay } from 'react-icons/hi2';
import contact from '../Pricing/contact.png';
import ctaweb from './ctaweb.png';

export default function ContactCTA() {
  return (
    <div className="py-[60px]">
      <div className="p-4 sm:p-[60px] flex flex-col gap-[21.3px] bg-accent rounded-xl web:flex-row web:justify-between">
        <div className="relative group web:min-w-[400px] max-w-[450px]">
          <img
            alt="contact"
            className="web:hidden"
            src={contact}
          />
          <img
            alt="contact"
            className="hidden web:block"
            src={ctaweb}
          />
          <button
            type="button"
            className="absolute text-white m-auto left-0 right-0 top-0 bottom-0 bg-primary/40 flex justify-center items-center text-[12px] sm:text-[20px] w-[12%] aspect-square rounded-full group-hover:scale-150 transition-all"
          >
            <HiPlay />
          </button>
        </div>
        <div className="flex flex-col items-center gap-[14.5px] web:items-start web:max-w-[450px]">
          <p className="text-[29.2px] leading-[40.9px] font-bold web:">Coworking, Private Offices and More</p>
          <p className="web:text-[21px] leading-[30.9px] ">
            Your membership at is all-inclusive, providing amenities designed
            to allow you to focus on your business
            instead of logistics.
          </p>
          <div className="flex justify-between w-full web:justify-start gap-6">
            <button
              type="button"
              className="text-white bg-primary px-3 py-2 text-xs sm:px-10 sm:py-5 rounded-xl  sm:text-[21px] sm:rounded-[50px] leading-[26px] hover:scale-105"
            >
              Discover now
            </button>
            <button
              type="button"
              className="text-primary bg-transparent border-[1px] border-primary px-3 py-2 text-xs sm:px-10 sm:py-5 rounded-xl sm:text-[21px] sm:rounded-[50px] leading-[26px] hover:scale-105"
            >
              Book a tour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
