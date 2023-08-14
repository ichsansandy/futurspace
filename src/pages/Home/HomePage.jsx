import Banner from '../../components/Home/Banner.section';
import CTAsection from '../../components/Home/CTA.section';
import FeatureSection from '../../components/Home/Feature.section';
import LocationSection from '../../components/Home/Location.section';
import PlansSection from '../../components/Home/Plans.section';
import ReviewSection from '../../components/Home/Review.section';
import Services from '../../components/Home/Services.section';
import SubscribeSection from '../../components/Home/Subscribe.section';

export default function HomePage() {
  return (
    <>
      <Banner />
      <Services />
      <FeatureSection />
      <PlansSection />
      <LocationSection />
      <ReviewSection />
      <CTAsection />
      <SubscribeSection />
    </>
  );
}
