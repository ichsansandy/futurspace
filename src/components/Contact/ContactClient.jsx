export default function ContactClient() {
  return (
    <div className="flex flex-col sm:gap-11 items-center opacity-50 py-[60px]">
      <p className=" sm:text-[26px] sm:leading-[32px] text-center max-w-[450px] web:max-w-none font-bold">
        Trusted by top companies and startups around the world
      </p>
      <div className="grayscale flex justify-center items-center flex-wrap box-border gap-3 sm:gap-5 web:gap-20">
        <img
          className="w-[15%] web:w-[10%]"
          alt="google"
          src="./images/google-removebg-preview.png"
        />
        <img
          className="w-[15%] web:w-[10%]"
          alt="creativeMarket"
          src="./images/creative-market-removebg-preview.png"
        />
        <img
          className="w-[15%] web:w-[10%]"
          alt="airbnb"
          src="./images/airbnb.png"
        />
        <img
          className="w-[15%] web:w-[10%]"
          alt="shopify"
          src="./images/shopify-removebg-preview.png"
        />
        <img
          className="w-[15%] web:w-[10%] mt-1"
          alt="amazon"
          src="./images/amazon-removebg-preview.png"
        />
      </div>
    </div>
  );
}
