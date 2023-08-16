import React from 'react';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { MockAPIPlans } from '../../utils/mockAPI';

export default function ServicesSection() {
  return (
    <section className="flex flex-col gap-16">
      <div className="flex flex-col gap-6 text-center wrapper">
        <span className="text-sm font-bold uppercase web:text-lg text-primary">why serviced office</span>
        <span className="text-2xl font-bold text-center web:leading-snug web:mx-auto web:max-w-3xl web:text-5xl">
          We`ve helped thousands of
          <br className="hidden web:block" />
          fast-growing startups and teams
        </span>

        <p className="m-0 text-sm web:max-w-4xl web:mx-auto web:text-lg text-secondary opacity-60">Grow without restriction. By giving you space that can be changed as your business grows. Only pay for the space you use with everything you need to be included in one price.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 web:gap-10 web:grid-cols-3">
        {
            MockAPIPlans?.map((plans, index) => (
              <div className="flex flex-col gap-6 p-10 background-for-plans-section rounded-2xl " key={plans?.id}>
                <img src={plans?.images} alt={`images ${index}`} className="object-cover object-center h-auto bg-cover web:max-w-prose" />
                <div className="flex flex-col gap-4 wrapper-text">
                  <span className="text-lg font-bold web:text-2xl text-secondary opacity-90">{plans?.title}</span>
                  <p className="m-0 text-sm web:text-lg text-secondary opacity-70">{plans?.description}</p>
                  <Link to={plans?.href} className="flex flex-row items-center gap-2 text-sm font-bold text-primary">
                    Learn more
                    <div className="flex items-center p-1 text-sm text-white rounded-full bg-primary">
                      <FaLongArrowAltRight />
                    </div>
                  </Link>
                </div>
              </div>
            ))
        }
      </div>
    </section>
  );
}
