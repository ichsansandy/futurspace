import React from 'react';
import { mockAPiDataSection } from '../../utils/mockAPI';

export default function DataSection() {
  return (
    <section className="flex flex-col gap-14">
      <div className="flex flex-col gap-6 pb-10 border-b-2 web:gap-10 web:pb-14 border-slate-200">
        <span className="text-2xl font-bold web:text-5xl web:max-w-5xl web:leading-snug">
          Our space is more than a shared office.
          <br className="hidden web:block" />
          It is a meeting ground for creatives and teams
        </span>
        <p className="m-0 text-base web:text-xl text-secondary opacity-60 web:max-w-3xl">Find focus and clarity space to do the things you need to do to grow your business in New York. Book by the month, daily or by the hour.</p>
      </div>

      <div className="grid grid-cols-1 gap-8 web:gap-20 web:grid-cols-3">
        {
            mockAPiDataSection?.map((data) => (
              <div className="flex flex-col gap-4 web:gap-8" key={data?.number}>
                <span className="text-4xl font-bold web:text-5xl text-primary">{data?.number}</span>
                <div className="flex flex-col gap-4">
                  <span className="text-xl font-bold web:text-2xl text-secondary opacity-90">{data?.title}</span>
                  <p className="m-0 text-base web:text-xl text-secondary opacity-60">{data?.description}</p>
                </div>
              </div>
            ))
        }
      </div>
    </section>
  );
}
