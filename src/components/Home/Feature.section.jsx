import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { MockAPIFeatures } from '../../utils/mockAPI';
import Disclosure from '../utils/disclosure-comp/Disclosure';
import AnimationAOS from '../utils/Animation/AnimationAOS';

export default function FeatureSection() {
  return (
    <section className="flex flex-col-reverse gap-0 web:grid web:grid-cols-2">
      <div className="relative w-auto web:max-w-lg h-auto web:max-h-[600px] mt-8">
        <img src="/images/features-image.png" alt="images" className="max-w-xs mx-auto web:mx-0 web:max-w-lg" />
        <div className="absolute top-0 left-0 web:top-3">
          <div className="flex flex-col gap-1 px-4 py-3 rounded-full web:py-5 web:px-8 color-for-feature-section">
            <span className="text-lg font-bold web:text-2xl">891+</span>
            <span className="text-xs font-medium text-secondary opacity-60 web:text-base">workplaces</span>
          </div>
        </div>

        <div className="absolute bottom-0 right-0">
          <div className="p-4 text-2xl text-white web:text-4xl web:px-8 rounded-3xl web:py-7 bg-primary">
            <FaLocationDot />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 web:gap-6 wrapper-text">
        <span className="mb-4 text-2xl font-bold text-center web:leading-snug web:text-start web:mb-6 web:max-w-xl web:text-5xl">
          <AnimationAOS>
            A complete coworking space solution for your business and team
          </AnimationAOS>
        </span>

        {
            MockAPIFeatures?.map((features) => (
              <Disclosure {...features} key={features?.id} />
            ))
        }
      </div>
    </section>
  );
}
