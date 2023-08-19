import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { BrandName, menus } from '../utils/mockAPI';
import useStatusbar from '../hook/useStatusbar';

export default function Navbar({ isOpen, setIsOpen }) {
  const { statusInitialValue: status } = useStatusbar();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className={`relative z-50 flex items-center justify-between transition-all ${pathname === '/about' && 'text-white'}`}>
      <NavLink
        to="/"
        className="flex items-center gap-4 uppercase"
        onClick={() => {
          setIsOpen(false);
        }}
      >
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
            className={`${pathname === '/about' ? 'fill-white' : 'fill-primary'}`}
          />
          <rect
            x="10.7461"
            y="10.7461"
            width="5.97015"
            height="5.97015"
            rx="1.19403"
            className={`${pathname === '/about' ? 'fill-primary' : 'fill-[#F9FAFF]'}`}
          />
          <rect
            x="18.5073"
            y="10.7461"
            width="10.1493"
            height="5.97015"
            rx="1.19403"
            className={`${pathname === '/about' ? 'fill-primary' : 'fill-[#F9FAFF]'}`}
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
            className={`${pathname === '/about' ? 'fill-primary' : 'fill-[#F9FAFF]'}`}
          />
        </svg>
        <h3 className={`uppercase hidden min-[375px]:block ${pathname === '/about' ? 'text-white' : 'text-primary'}`}>{BrandName}</h3>

        <div className="-mt-2 online-offline-status">
          {
            status
              ? <div className="w-5 h-5 bg-green-400 rounded-full animate-pulse" />
              : <div className="w-5 h-5 bg-gray-400 rounded-full animate-pulse" />
          }
        </div>
      </NavLink>

      <button
        type="button"
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
        } absolute items-center pb-24 web:pb-0 min-h-[70vh] web:min-h-fit left-0 top-[100%] w-full box-border transition-all ${pathname === '/about' ? 'bg-primary' : 'bg-white'}  flex-col justify-evenly web:static web:flex-row web:justify-end gap-4 md:gap-5 xl:gap-14`}
      >
        {menus.map((menu) => (
          <NavLink
            key={menu.href}
            to={menu.href}
            className={({ isActive }) => (isActive ? 'capitalize font-extrabold hover:scale-110' : 'capitalize font-light hover:scale-110')}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            {menu.menu}
          </NavLink>
        ))}
        <button
          className="text-white bg-primary px-[40px] py-[15px] rounded-[50px] hover:scale-105 "
          type="button"
          onClick={() => {
            navigate('/signup');
          }}
        >
          Sign up
        </button>
      </nav>
    </div>
  );
}
