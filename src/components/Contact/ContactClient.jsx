import google from '../../../public/images/google-removebg-preview.png';
import creativeMarket from '../../../public/images/creative-market-removebg-preview.png';
import airbnb from '../../../public/images/airbnb.png';
import shopify from '../../../public/images/shopify-removebg-preview.png';
import amazon from '../../../public/images/amazon-removebg-preview.png';

export default function ContactClient() {
  return (
    <div className="flex flex-col sm:gap-11 items-center opacity-50 py-[60px]">
      <p className=" sm:text-[26px] sm:leading-[32px] text-center max-w-[450px] web:max-w-none font-bold">
        Trusted by top companies and startups around the world
      </p>
      <div className="grayscale flex justify-center items-center flex-wrap box-border gap-3">
        <img
          className="w-[15%]"
          alt="google"
          src={google}
        />
        <img
          className="w-[15%]"
          alt="creativeMarket"
          src={creativeMarket}
        />
        <img
          className="w-[15%]"
          alt="airbnb"
          src={airbnb}
        />
        <img
          className="w-[15%]"
          alt="shopify"
          src={shopify}
        />
        <img
          className="w-[15%] mt-3"
          alt="amazon"
          src={amazon}
        />
      </div>
    </div>
  );
}
