import React from 'react';

export default function LeadershipSection() {
  return (
    <section className="flex flex-col gap-10 web:gap-16">
      <div className="flex flex-col gap-6 text-center wrapper">
        <span className="text-sm font-bold uppercase web:text-lg text-primary">Our Leadership team</span>
        <span className="text-2xl font-bold text-center web:leading-snug web:mx-auto web:max-w-4xl web:text-5xl">
          Meet the great team behind Futurspace
        </span>

        <p className="m-0 text-sm web:max-w-4xl web:mx-auto web:text-lg text-secondary opacity-60">
          Lorem ipsum dolor sit amet consectetur adipiscing elit sapien vestibulum
          quam massa viverra blandit sit auctor vestibulum semper viverra aliquet sit.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 web:gap-10 web:grid-cols-5">
        {
        Array.from({ length: 5 })?.map((_, i) => {
          const names = ['john carter', 'william Buggil', 'Kenjo Tupukila', 'Hesoyam GG', 'Kurapika HxH'];
          const status = ['Kartel Narkoba', 'Tukang Cabul', 'Pengisap Kokain', 'BOS Toxic', 'Anggota PDIP'];

          return (
            <div className={`flex flex-col gap-6 text-center ${i === names.length - 1 && 'col-span-2 mx-auto web:col-span-1 web:mx-0'}`} key={i}>
              <img src="https://loremflickr.com/g/320/240/paris,girl/all" className={`rounded-[20px] ${i === names.length - 1 && 'w-36 h-32 web:h-auto web:w-auto bg-cover object-center'}`} alt="images" />
              <div className="flex flex-col gap-1 web:gap-2">
                <span className="text-lg font-bold capitalize web:text-2xl text-secondary opacity-90">
                  {names[i]}
                </span>
                <small className="text-sm web:text-base text-secondary opacity-60">
                  {status[i]}
                </small>
              </div>
            </div>
          );
        })
      }
      </div>
    </section>
  );
}
