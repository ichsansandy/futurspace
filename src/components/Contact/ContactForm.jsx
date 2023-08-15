import { useState } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';

export default function ContactForm() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex justify-center">
      <div className="py-[60px] flex flex-col gap-10">
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-center max-w-[1000px] text-[30px] leading-snug sm:leading-h2 sm:text-h2">
            Take a tour & try a day of coworking for free
          </h2>
          <p className=" sm:text-[21px] px-5 sm:leading-[26.46px] font-normal text-center max-w-[900px]">
            We offer offices for lease by the day, by the week,
            or by the year. Choose from any of our 3000 locations.
            Get a free quote!
          </p>
        </div>
        <form className="flex flex-col gap-14">
          <input
            placeholder="First Name"
            className="px-8 sm:px-[50px] py-4 sm:py-[30px] rounded-[30px] sm:rounded-[50px] shadow-custom-shadow"
          />
          <input
            placeholder="Last Name"
            className="px-8 sm:px-[50px] py-4 sm:py-[30px] rounded-[30px] sm:rounded-[50px] shadow-custom-shadow"
          />
          <div className="flex flex-col gap-14 sm:flex-row sm:justify-between relative">
            <input
              placeholder="Email"
              className="sm:w-[45%] px-8 sm:px-[50px] py-4 sm:py-[30px] rounded-[30px] sm:rounded-[50px] shadow-custom-shadow"
            />
            <select
              placeholder="Option"
              className="appearance-none sm:w-[45%] px-8 sm:px-[50px] py-4 sm:py-[30px] rounded-[30px] sm:rounded-[50px] shadow-custom-shadow"
            >
              <option
                value=""
                disabled
              >
                Option
              </option>
              <option value="Individual">Individual</option>
              <option value="Company">Company</option>
              <option value="Institution">Institution</option>
              <option value="NGO">NGO</option>
            </select>
            <div className="absolute hidden sm:block right-[10%] bottom-[24%] text-[30px] font-extralight opacity-50">
              &#709;
            </div>
          </div>
          <input
            placeholder="Message"
            className="px-8 sm:px-[50px] py-4 sm:py-[30px] rounded-[30px] sm:rounded-[50px] shadow-custom-shadow"
          />
          <div className="flex justify-start pl-4 gap-3">
            <button
              type="button"
              onClick={() => {
                setIsChecked(!isChecked);
              }}
              className={`${isChecked ? 'text-primary' : 'text-gray-400'} transition-all`}
            >
              <AiFillCheckCircle />
            </button>
            <p>By clicking the below button you agree to our Terms of Service.</p>
          </div>
          <button
            type="submit"
            className="text-white bg-primary text-center py-[30px] rounded-[50px]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
