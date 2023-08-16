import { IoFlash } from 'react-icons/io5';
import { FaStar } from 'react-icons/fa';
import { RiVipDiamondFill } from 'react-icons/ri';

export const discount = 15;

export const pricing = [
  {
    planIcon: <IoFlash />,
    planName: 'Silver',
    pricePerMonth: 399,
    planBenefit: [
      { benefit: 'Coworking & Rooms', isCheck: true },
      { benefit: 'High-speed Internet', isCheck: true },
      { benefit: 'Explusive Workspace', isCheck: false },
      { benefit: 'Customisable Room', isCheck: false },
      { benefit: 'All-inclusive Pricing', isCheck: false },
    ],
  },
  {
    planIcon: <FaStar />,
    planName: 'Gold',
    pricePerMonth: 599,
    planBenefit: [
      { benefit: 'Coworking & Rooms', isCheck: true },
      { benefit: 'High-speed Internet', isCheck: true },
      { benefit: 'Explusive Workspace', isCheck: true },
      { benefit: 'Customisable Room', isCheck: true },
      { benefit: 'Meeting Room', isCheck: true },
      { benefit: 'Private Office', isCheck: true },
      { benefit: 'All-inclusive Pricing', isCheck: false },
    ],
  },
  {
    planIcon: <RiVipDiamondFill />,
    planName: 'Platinum',
    pricePerMonth: 999,
    planBenefit: [
      { benefit: 'Coworking & Rooms', isCheck: true },
      { benefit: 'High-speed Internet', isCheck: true },
      { benefit: 'Explusive Workspace', isCheck: true },
      { benefit: 'Customisable Room', isCheck: true },
      { benefit: 'All-inclusive Pricing', isCheck: true },
    ],
  },
];
