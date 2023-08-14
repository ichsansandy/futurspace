import {
  AiFillInstagram, AiFillFacebook, AiFillLinkedin, AiOutlineTwitter,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { mockAPIFooter } from '../utils/mockAPI';

export default function Footer() {
  return (
    <footer className="flex flex-col gap-10 web:border-t-2 web:pt-14 border-slate-200">
      <div className="hidden web:flex-row web:justify-between web:flex">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <span className="text-3xl font-bold uppercase text-primary">futurespace</span>
            <span className="max-w-sm text-base font-normal text-secondary opacity-60">
              We want to build more than nice,
              <br />
              shared office spaces. We want to build a community.
            </span>
          </div>

          <div className="flex flex-row items-center gap-4 text-3xl text-primary">
            <AiFillInstagram />
            <AiFillFacebook />
            <AiFillLinkedin />
            <AiOutlineTwitter />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-28">
          {
          mockAPIFooter?.map((footer) => (
            <div className="flex flex-col gap-8" key={footer?.title}>
              <span className="text-2xl font-bold capitalize text-secondary opacity-90">{footer?.title}</span>

              <div className="flex flex-col gap-4 text-base capitalize text-secondary opacity-60">
                <Link to="/">{footer?.subTitle}</Link>
                <Link to="/">{footer?.subTitle1}</Link>
                <Link to="/">{footer?.subTitle2}</Link>
                <Link to="/">{footer?.subTitle3}</Link>
              </div>
            </div>
          ))
        }
        </div>
      </div>

      <div className="flex flex-col gap-10 pb-10 border-b-2 border-slate-100 web:hidden">
        <div className="flex flex-row items-center justify-center gap-3 text-primary">
          <img src="/logo.svg" alt="logo" />
          <span className="text-2xl font-bold uppercase">futurspace</span>
        </div>

        <div className="flex flex-col gap-6 text-center text-secondary opacity-60">
          <Link to="/">About us</Link>
          <Link to="/">Pricing</Link>
          <Link to="/">Offices</Link>
          <Link to="/">Spaces</Link>
          <Link to="/">Contact</Link>
        </div>

        <div className="flex flex-row items-center justify-center gap-4 text-2xl text-primary">
          <AiFillInstagram />
          <AiFillFacebook />
          <AiFillLinkedin />
          <AiOutlineTwitter />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <span className="text-sm font-normal text-center web:text-start web:text-base opacity-60 text-secondary">© 2023 All rights reserved - Futurspace</span>

        <div className="flex flex-row items-center justify-center gap-4 web:hidden">
          <span className="text-sm text-secondary opacity-60">Term of Service</span>
          <span className="text-sm text-secondary opacity-60">Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
}
