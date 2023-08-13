import { AiOutlineEnter } from 'react-icons/ai';

export default function PricingSubscribe() {
  return (
    <div className="py-[60px] flex justify-center">
      <div className="flex flex-col gap-[60px] max-w-[1100px] web:items-center">
        <h2 className="text-center">We enable people to work where they want, when they want and how they want</h2>
        <p className="text-[21px] px-7 leading-[26.46px] font-normal text-center">
          We offer offices for lease by the day, by the week, or by the year. <br className='hidden web:block'/> Choose from any of our 3000 locations. Get
          a free quote!
        </p>
        <div className="flex flex-col items-center gap-4 max-w-[650px] w-full">
          <div className="relative w-full">
            <input
              className="px-[50px] py-5 rounded-[50px] w-full border-2 border-slate-300"
              placeholder="Enter your email"
            />
            <button className="hidden min-[362px]:block h-fit text-white absolute right-2 bottom-0 top-0 my-auto bg-primary px-10 py-4 rounded-[50px]">
              Submit
            </button>
            <button className="min-[362px]:hidden text-white absolute right-0 bottom-[50%] bg-primary px-10 py-4 rounded-[50px]">
              <AiOutlineEnter />
            </button>
          </div>
          <p>No worries, we don’t do spam!</p>
        </div>
      </div>
    </div>
  );
}
