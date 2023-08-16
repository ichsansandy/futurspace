import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRightShort } from 'react-icons/bs';

export default function JointeamSection() {
  return (
    <section className="bg-[#F0F6FF] p-10 web:p-20 grid-cols-1 gap-6 web:gap-0 grid web:grid-cols-2 rounded-[20px]">
      <span className="text-2xl font-bold web:text-5xl">Join our team</span>

      <div className="flex flex-col gap-4">
        <p className="m-0 text-sm web:text-xl text-secondary opacity-60">Lorem ipsum dolor sit amet consectetur adipiscing elit sapien eget eu elementum velit nunc tortor pulvinar ornare at mi sed nisl in proin sollicitudin ultricies aliquet malesuada aliquet.</p>
        <Link to="/" className="flex flex-row items-center gap-1 text-base font-bold web:text-lg text-primary">
          <span>
            Explore jobs
          </span>
          <BsArrowRightShort className="text-2xl web:text-4xl" />
        </Link>
      </div>
    </section>
  );
}
