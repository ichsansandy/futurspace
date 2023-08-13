import { useState } from "react";

export default function PricingPricing() {
  const [isMonthly, setisMonthly] = useState(true);
  
  return (
    <div className="flex flex-col items-center gap-16">
        <div className="bg-secondary p-1 rounded-[50px] overflow-hidden">
            <button onClick={()=>{setisMonthly(true)}} className={`${isMonthly ? 'bg-white text-primary font-extrabold' : ''} rounded-[50px] px-[40px] py-[20px] transition-all`}>Monthly</button>
            <button onClick={()=>{setisMonthly(false)}} className={`${isMonthly ? '' : 'bg-white text-primary font-extrabold'} rounded-[50px] px-[32px] py-[20px] transition-all`}>Annual(save 15%)</button>
        </div>
    </div>
  )
}
