import PricingContact from '../../components/Pricing/PricingContact';
import PricingFAQ from '../../components/Pricing/PricingFAQ';
import PricingHero from '../../components/Pricing/PricingHero';
import PricingPricing from '../../components/Pricing/PricingPricing';
import PricingSubscribe from '../../components/Pricing/PricingSubscribe';

export default function PricingPage() {
  return (
    <main className="">
      <PricingHero />
      <PricingPricing />
      <PricingFAQ />
      <PricingContact />
      <PricingSubscribe />
    </main>
  );
}
