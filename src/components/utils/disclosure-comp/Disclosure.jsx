import React from 'react';
import HeadDisclosure from './HeadDisclosure';
import useDisclosure from '../../../hook/useDisclosure';

export default function Disclosure(props) {
  const { title, description } = props;
  const { initialStatus: open, handleChangeInitialStatus } = useDisclosure();

  return (
    <div className={`flex flex-col w-auto gap-2 web:gap-5 py-6 px-6 web:p-10 rounded-3xl background-for-feature-section transition-all duration-700 ${open ? 'border border-primary' : ' border border-transparent'}`}>
      <div className="wrapper">
        <button
          type="button"
          onClick={handleChangeInitialStatus}
        >
          <HeadDisclosure title={title} />
        </button>
      </div>

      {
            open && (
            <p className={`m-0 text-xs sm:text-xl text-secondary transition-opacity duration-1000 opacity-60 ${open ? 'opacity-100' : 'opacity-0'}`}>{description}</p>
            )
      }
    </div>
  );
}
