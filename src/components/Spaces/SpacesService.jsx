import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { MockAPIPlans } from '../../utils/mockAPI';

export default function SpacesService() {
  return (
    <div className="py-[60px] flex flex-col items-center gap-6">
      <p className="uppercase text-center font-extrabold text-primary sm:text-[21px] leading-[26px]">
        Why Serviced Office
      </p>
      <h2 className="text-center max-w-[900px] text-[30px] leading-snug sm:leading-h2 sm:text-h2">
        We&apos;ve helped thousands of fast-growing startups and teams
      </h2>
      <p className="sm:text-[21px] px-7 sm:leading-[26.46px] font-normal text-center max-w-[900px]">
        Grow without restriction. By giving you space that
        can be changed as your business grows. Only pay for the space
        you use with everything you need to be included in one price.
      </p>
      <div className="flex flex-col gap-16 web:flex-row web:justify-center web:gap-8 web:items-center">
        {MockAPIPlans?.map((plans, index) => (
          <div
            className="flex flex-col gap-6 p-10 background-for-plans-section rounded-2xl "
            key={plans?.id}
          >
            <img
              src={plans?.images}
              alt={`images ${index}`}
              className="object-cover object-center h-auto bg-cover web:max-w-prose"
            />
            <div className="flex flex-col gap-4 wrapper-text">
              <span className="text-lg font-bold web:text-2xl text-secondary opacity-90">{plans?.title}</span>
              <p className="m-0 text-sm web:text-lg text-secondary opacity-70">{plans?.description}</p>
              <Link
                to={plans?.href}
                className="flex flex-row items-center gap-2 text-sm font-bold text-primary"
              >
                Learn more
                <div className="flex items-center p-1 text-sm text-white rounded-full bg-primary">
                  <FaLongArrowAltRight />
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
