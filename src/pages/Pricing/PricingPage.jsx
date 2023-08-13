import PricingContact from '../../components/pricing/PricingContact';
import PricingFAQ from '../../components/pricing/PricingFAQ';
import PricingHero from '../../components/pricing/PricingHero';
import PricingPricing from '../../components/pricing/PricingPricing';
import PricingSubscribe from '../../components/pricing/PricingSubscribe';

export default function PricingPage() {
  return (
    <main className=''>
      <PricingHero />
      <PricingPricing/>
      <PricingFAQ/>
      <PricingContact/>
      <PricingSubscribe/>
    </main>
  );
}
