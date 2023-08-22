import React from 'react';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { MockAPIServices } from '../../utils/mockAPI';
import AnimationAOS from '../utils/Animation/AnimationAOS';

export default function Services() {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <span className="text-sm font-bold text-center capitalize web:text-lg text-primary web:text-start">our services</span>
        <span className="text-2xl font-bold text-center web:leading-snug web:max-w-5xl web:text-5xl web:text-start">
          <AnimationAOS>
            Flexible Solutions for Your Business - Choose What Works Best for You
          </AnimationAOS>
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6 web:gap-12 web:grid-cols-3">
        {MockAPIServices?.map((services, index) => (
          <div className="flex flex-col gap-6 p-10 duration-700 bg-white rounded-lg cards-shadow hover:border hover:border-primary" key={services?.id}>
            <img src={services?.images} alt={`images ${index}`} className="w-12" />

            <div className="flex flex-col gap-4 web:gap-6">
              <span className="m-0 text-lg font-bold web:text-2xl opacity-80">{services?.title}</span>
              <div className="flex flex-col gap-5 web:gap-4">
                <p className="m-0 text-sm font-normal web:text-base text-secondary opacity-60">{services?.description}</p>
                <Link to={services?.href} className="flex flex-row items-center gap-2 text-sm font-bold text-primary">
                  Learn more
                  <div className="flex items-center p-1 text-sm text-white rounded-full bg-primary">
                    <FaLongArrowAltRight />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
