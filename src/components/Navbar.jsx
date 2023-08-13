import { useState } from 'react';
import { brandName } from '../data/mockData';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { menus } from '../data/mockData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between items-center relative transition-all">
      <div className="flex gap-4 items-center uppercase">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="20"
            cy="20"
            r="20"
            className="fill-primary"
          />
          <rect
            x="10.7461"
            y="10.7461"
            width="5.97015"
            height="5.97015"
            rx="1.19403"
            fill="#F9FAFF"
          />
          <rect
            x="18.5073"
            y="10.7461"
            width="10.1493"
            height="5.97015"
            rx="1.19403"
            fill="#F9FAFF"
          />
          <rect
            x="20.2983"
            y="18.5073"
            width="5.97015"
            height="5.97015"
            rx="1.19403"
            fill="#5BB9FF"
          />
          <rect
            x="10.7461"
            y="18.5073"
            width="7.76119"
            height="10.7463"
            rx="1.19403"
            fill="#F9FAFF"
          />
        </svg>
        <h3 className="text-primary uppercase hidden min-[375px]:block">{brandName}</h3>
      </div>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="text-[34px] web:hidden"
      >
        {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>
      <nav
        className={`${
          isOpen ? 'flex translate-y-0' : 'flex scale-0 -translate-y-52 web:flex web:scale-100 web:translate-y-0'
        } absolute items-center min-h-screen web:min-h-fit left-0 top-[100%] w-full box-border transition-all bg-white flex-col web:static web:flex-row  web:justify-end gap-4`}
      >
        <>
          {menus.map((menu, index) => (
            <NavLink
              key={index}
              to={menu.href}
              className={({ isActive }) => (isActive ? 'capitalize font-extrabold' : 'capitalize font-light')}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              {menu.menu}
            </NavLink>
          ))}
          <button className='text-white bg-primary px-[40px] py-[15px] rounded-[50px] ' type='button'>
            Sign up
          </button>
        </>
      </nav>
    </div>
  );
}
