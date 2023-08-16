import { AiOutlineEnter } from 'react-icons/ai';

export default function SpacesHero() {
  return (
    <div className="flex flex-col web:flex-row web:items-center web:justify-center gap-16 py-[60px]">
      <div className="flex flex-col items-center web:items-start web:max-w-[480px] gap-8">
        <h2 className="text-center text-[30px] max-w-[300px] web:min-w-[480px]  web:text-left sm:max-w-none leading-snug sm:leading-h2 sm:text-h2">
          A creative coworking space in New York
        </h2>
        <p className="sm:text-[21px] px-7 sm:leading-[26.46px] font-normal text-center web:text-left web:px-0 ">
          You can book personal office space across the country by the day, hour or month.
        </p>
        <div className="relative w-full max-w-[450px]">
          <input
            className="px-[15px] sm:px-[50px] py-5 rounded-[50px] w-full border-2 border-slate-300"
            placeholder="Enter your email"
          />
          <button
            type="button"
            className="hidden hover:bg-white hover:text-primary hover:border-2 transition-all border-primary box-border min-[362px]:block h-fit text-white absolute right-2 bottom-0 top-0 my-auto bg-primary px-10 py-4 rounded-[50px]"
          >
            Submit
          </button>
          <button
            type="button"
            className=" min-[362px]:hidden text-white absolute right-2 bottom-[15%] bg-primary px-5 py-4 rounded-[50px]"
          >
            <AiOutlineEnter />
          </button>
        </div>
      </div>
      <img
        className="w-fit"
        alt="hero"
        src="./images/contactHero.png"
      />
    </div>
  );
}
