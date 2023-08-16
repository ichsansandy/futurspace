import FAQcomponent from './FAQcomponent';
import { faqsList } from '../../utils/mockAPI';

export default function PricingFAQ() {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[1100px]">
        <div className="py-[60px] flex flex-col gap-6">
          <h2 className="text-center">Frequently asked questions about coworking</h2>
          <p className="text-[21px] px-7 leading-[26.46px] font-normal text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing
            elit cursus commodo at sit mi sed gravida et imperdiet
            sagittis euismod tortor fringilla amet.
          </p>
        </div>
        <div className="flex flex-col gap-4 px-5">
          {faqsList.map((faq, index) => (
            <FAQcomponent
              key={`faq${index * 1}`}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
