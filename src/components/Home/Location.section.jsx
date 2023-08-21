/* eslint-disable max-len */
import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { MockAPILocation } from '../../utils/mockAPI';
import AnimationAOS from '../utils/Animation/AnimationAOS';

export default function LocationSection() {
  return (
    <section className="grid grid-cols-1 gap-10 web:gap-0 web:grid-cols-2">
      <div className="wrapper-images">
        <img src="/images/location.png" alt="images" className="max-w-xs web:max-w-2xl" />
      </div>

      <div className="flex items-center">
        <div className="flex flex-col gap-8 web:gap-14 wrapper-text">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <span className="text-sm font-bold uppercase web:text-lg text-primary">our offices</span>
              <span className="text-2xl font-bold web:max-w-2xl web:text-5xl web:leading-snug">
                <AnimationAOS>
                  Discover the Location that Best Fits Your Business Needs
                </AnimationAOS>
              </span>
              <p className="m-0 text-sm web:text-xl opacity-60">
                <AnimationAOS>
                  As we headstart into this new normal, we are ensuring your workspace experience remains exceptional.
                </AnimationAOS>
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5 web:gap-8">
            {
                MockAPILocation?.map((location) => (
                  <div className="flex flex-row items-center gap-6 web:gap-10" key={location?.id}>
                    <div className="p-3 text-lg rounded-full web:p-4 bg-slate-100 text-primary">
                      <FaLocationDot />
                    </div>

                    <span className="text-base font-bold web:text-2xl text-secondary opacity-95">{location?.location}</span>
                  </div>
                ))
            }
          </div>

          <div className="wrapper-button">
            <button type="button" className="py-2.5 text-sm px-8 web:text-base web:py-4 font-bold text-white capitalize rounded-full web:px-14 bg-primary">view location</button>
          </div>
        </div>
      </div>
    </section>
  );
}
