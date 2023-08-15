export default function SpacesCTA() {
  return (
    <div className="py-[60px]">
      <div className="p-5 sm:p-[60px] flex flex-col gap-[21.3px] bg-accent rounded-xl web:flex-row web:items-center web:justify-between">
        <div className="web:flex max-w-[660px] flex-col items-center gap-[14.5px] hidden">
          <p className="text-[48px] leading-[60.9px] font-extrabold web:">
            Stay productive with modern workspace, private office, and coworking solutions
          </p>
          <p className="web:text-[21px] leading-[30.9px] ">
            Workspaces that suit your business. We have professional and
            inspiring work environments to suit businesses of all sizes and budget.
          </p>
          <div className="flex justify-between w-full web:justify-start gap-6">
            <button
              type="button"
              className="text-white bg-primary px-3 py-2 text-xs sm:px-10 sm:py-5 rounded-xl  sm:text-[21px] sm:rounded-[50px] leading-[26px] hover:scale-105"
            >
              Get Started
            </button>
          </div>
        </div>
        <img
          className="max-w-[397px]"
          alt="cta"
          src="./images/ctaSpaces.png"
        />
        <div className="flex flex-col items-center gap-[14.5px] web:hidden">
          <p className="text-[29.2px] leading-[40.9px] font-bold web:">
            We have all the amenities you need to grow your business starting on day one
          </p>
          <p className="web:text-[21px] leading-[30.9px] ">
            We strive to create a professional and welcoming
            environment in order to foster collaboration, creativity,
            and productivity.
          </p>
          <div className="flex justify-between w-full web:justify-start gap-6">
            <button
              type="button"
              className="text-white bg-primary px-3 py-2 text-xs sm:px-10 sm:py-5 rounded-xl  sm:text-[21px] sm:rounded-[50px] leading-[26px] hover:scale-105"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
