import { useState } from 'react';
import { IoMdCheckmark } from 'react-icons/io';
import { IoFlash } from 'react-icons/io5';
import { FaStar } from 'react-icons/fa';
import { RiVipDiamondFill } from 'react-icons/ri';


const discount = 15;

const pricing = [
  {
    planIcon: <IoFlash />,
    planName: 'Silver',
    pricePerMonth: 399,
    planBenefit: [
      { benefit: 'Coworking & Rooms', isCheck: true },
      { benefit: 'High-speed Internet', isCheck: true },
      { benefit: 'Explusive Workspace', isCheck: false },
      { benefit: 'Customisable Room', isCheck: false },
      { benefit: 'All-inclusive Pricing', isCheck: false },
    ],
  },
  {
    planIcon: <FaStar />,
    planName: 'Gold',
    pricePerMonth: 599,
    planBenefit: [
      { benefit: 'Coworking & Rooms', isCheck: true },
      { benefit: 'High-speed Internet', isCheck: true },
      { benefit: 'Explusive Workspace', isCheck: true },
      { benefit: 'Customisable Room', isCheck: true },
      { benefit: 'Meeting Room', isCheck: true },
      { benefit: 'Private Office', isCheck: true },
      { benefit: 'All-inclusive Pricing', isCheck: false },
    ],
  },
  {
    planIcon: <RiVipDiamondFill />,
    planName: 'Platinum',
    pricePerMonth: 999,
    planBenefit: [
      { benefit: 'Coworking & Rooms', isCheck: true },
      { benefit: 'High-speed Internet', isCheck: true },
      { benefit: 'Explusive Workspace', isCheck: true },
      { benefit: 'Customisable Room', isCheck: true },
      { benefit: 'All-inclusive Pricing', isCheck: true },
    ],
  },
];

export default function PricingPricing() {
  const [isMonthly, setisMonthly] = useState(true);

  return (
    <div className="flex flex-col items-center gap-16">
      <div className="bg-secondary p-1 rounded-[50px] overflow-hidden">
        <button
          onClick={() => {
            setisMonthly(true);
          }}
          className={`${
            isMonthly ? 'bg-white text-primary font-extrabold' : ''
          } rounded-[50px] px-[40px] py-[20px] transition-all`}
        >
          Monthly
        </button>
        <button
          onClick={() => {
            setisMonthly(false);
          }}
          className={`${
            isMonthly ? '' : 'bg-white text-primary font-extrabold'
          } rounded-[50px] px-[32px] py-[20px] transition-all`}
        >
          Annual(save {discount}%)
        </button>
      </div>
      <div className="flex flex-col gap-[96.6px]">
        {pricing.map((price) => (
          <div
            key={price.planName}
            className="px-[68.8px] py-[61.1px] flex flex-col gap-[43.3px] bg-white rounded-3xl  border-primary even:border-2 hover:scale-110"
          >
            <div className="flex flex-col items-start gap-[43.3px]">
              <div className="text-white text-[30px] flex justify-center items-center bg-primary rounded-full w-[57.66px] aspect-square">
                {price.planIcon}
              </div>
              <p className="text-[35.7px] leading-[44.98px]">{price.planName}</p>
              <h1 className="text-[65.9px] leading-[83px] font-bold">{`$${isMonthly ? price.pricePerMonth : (price.pricePerMonth*(1-(discount/100))).toFixed() }/mth`}</h1>
            </div>
            <hr className="h-px" />
            <div className="flex flex-col gap-[43.3px]">
              {price.planBenefit.map((benefit) => (
                <div
                  className="flex items-center gap-[21.97px] text-[28.83px] leading-[36.33px]"
                  key={`${price.planName}-${benefit.benefit}`}
                >
                  <div className={`${benefit.isCheck ? 'text-green-400' : 'text-gray-400'}`}>
                    <IoMdCheckmark />
                  </div>
                  <p className="">{benefit.benefit}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}