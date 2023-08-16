export default function SpacesFeedback() {
  return (
    <div className="py-[60px]">
      <div className="flex flex-col items-center px-5 py-8 web:px-[100px] web:py-[120px] gap-6 sm:gap-16 bg-accent rounded-2xl">
        <p className="text-center text-[20px] sm:text-[36px] sm:leading-[40px] max-w-[400px] md:max-w-[750px] web:max-w-[840px] font-extrabold">
          One of our workspace experts will reach out to you based
          on your communication preferences.
        </p>
        <div className="flex flex-col items-center w-full max-w-[660px] gap-6 bg-white p-4 rounded-2xl web:p-12">
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-center text-[30px] max-w-[200px] web:max-w-none leading-normal sm:text-[36px] sm:leading-[40px] sm:max-w-[370px]">
              We&apos;d love to hear from you
            </h2>
            <p className="text-center text-sm max-w-[300px] web:max-w-[400px] web:text-[15px] web:leading-normal">
              To book a complimentary private day office or desk, simply complete the form below.
            </p>
          </div>
          <form className="flex flex-col w-full gap-6 sm:gap-14 sm:text-lg">
            <input
              placeholder="Enter your name"
              className="px-4 sm:px-[50px] py-4 sm:py-[30px] rounded-[30px] sm:rounded-[50px] shadow-custom-shadow"
            />
            <input
              placeholder="Enter your email"
              className="px-4 sm:px-[50px] py-4 sm:py-[30px] rounded-[30px] sm:rounded-[50px] shadow-custom-shadow"
            />
            <input
              placeholder="Message"
              className="px-4 sm:px-[50px] py-4 sm:py-[30px] rounded-[30px] sm:rounded-[50px] shadow-custom-shadow"
            />
            <button
              type="submit"
              className="text-white bg-primary text-center py-4 sm:py-[30px] rounded-[50px]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
