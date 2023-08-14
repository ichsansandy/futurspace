import React from 'react';
import Slider from 'react-slick';
import { AiFillStar } from 'react-icons/ai';
import { MockAPIReview } from '../../utils/mockAPI';
import { Settings } from '../../utils/settingSliders';

export default function ReviewSection() {
  return (
    <section className="flex flex-col gap-4 web:gap-10 wrapper">
      <div className="flex flex-col gap-4">
        <span className="text-sm font-bold uppercase web:text-lg text-primary">reviews</span>
        <span className="text-2xl font-bold leading-snug capitalize web:text-5xl">what our members say</span>
      </div>

      <Slider {...Settings} className="background-for-review-section">
        {
          MockAPIReview?.map((review, index) => {
            let className = 'px-3';

            if (index === 0) {
              className = 'pr-3';
            } else if (index === MockAPIReview.length - 1) {
              className = 'pl-3 pr-0';
            }

            return (
              <div className={`pt-6 pb-8 ${className}`} key={review?.id}>
                <div className="flex flex-col gap-10 p-10 background-for-review-section rounded-2xl">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-row items-center gap-2">
                      {Array.from({ length: 5 })?.map((_, i) => (
                        React.cloneElement(<AiFillStar className="text-[#FEA250]" />, { key: i })
                      ))}
                    </div>
                    <p className="m-0 text-base leading-8 text-secondary opacity-60">{review?.comment}</p>
                  </div>

                  <div className="flex flex-row items-center gap-4">
                    <img src="https://loremflickr.com/g/320/240/paris,girl/all" alt="images" className="w-12 h-12 rounded-full" />

                    <div className="flex flex-col gap-2">
                      <span className="text-base font-bold text-secondary opacity-95">{review?.name}</span>
                      <span className="text-xs font-normal text-secondary opacity-60">{review?.status}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        }
      </Slider>
    </section>
  );
}
