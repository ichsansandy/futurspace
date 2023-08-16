import { FaLocationDot, FaArrowRight } from 'react-icons/fa6';

const contacts = [
  {
    title: 'Global Locations',
    main: ['1901 Thornridge Cir. Shiloh, Hawaii 81063'],
    button: 'All location',
    icon: <FaLocationDot />,
  },
  {
    title: 'Call Us Now',
    main: ['(252) 555-0126', '(808) 555-0111'],
    button: 'Learn more',
    icon: <FaArrowRight />,
  },
  {
    title: 'Customer Service',
    main: ['Our friendly team is here to help.'],
    button: 'Email us',
    icon: <FaArrowRight />,
  },
];

export default function ContactContact() {
  return (
    <div className="flex flex-col max-w-[499px] py-[60px] gap-16 sm:gap-40 box-border web:flex-row web:gap-0 web:justify-evenly web:max-w-none">
      {contacts.map((c) => (
        <div
          key={c.title}
          className="flex flex-col items-start gap-5 rounded-xl px-8 py-5 sm:px-16 sm:py-14 bg-white shadow-custom-shadow group hover:scale-110 transition-all hover:border-2 border-primary web:max-w-[280px] web:gap-3 web:px-12 web:py-8 box-border w-full"
        >
          <p className="text-xl sm:text-[32px] web:text-[20px] leading-[40px] web:leading-[30px] font-bold">{c.title}</p>
          <div className="sm:text-[26px] web:text-[15px] leading-[32px] web:leading-[20px] max-w-[340px] ">
            {c.main.map((m) => (
              <p key={m}>{m}</p>
            ))}
          </div>
          <p className="sm:text-[26px] web:text-[15px] leading-[32px] web:leading-[20px] flex items-center gap-4 text-primary group-hover:underline transition-all">
            {c.button}
            <div className="rounded-full flex justify-center items-center p-2 bg-primary text-white sm:text-[20px] web:text-[10px] ">{c.icon}</div>
          </p>
        </div>
      ))}
    </div>
  );
}
