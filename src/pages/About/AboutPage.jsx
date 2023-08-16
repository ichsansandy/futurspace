import CTASection from '../../components/about/CTA.section';
import DataSection from '../../components/about/Data.section';
import HeroSection from '../../components/about/Hero.section';
import JointeamSection from '../../components/about/Jointeam.section';
import LeadershipSection from '../../components/about/Leadership.section';
import ServicesSection from '../../components/about/Services.section';
import SubscribesSection from '../../components/about/Subscribe.section';

export default function AboutPage() {
  return (
    <>
      <div className="bg-primary absolute top-0 left-0 w-full h-[600px] web:h-[1370px]" />
      <HeroSection />
      <DataSection />
      <ServicesSection />
      <LeadershipSection />
      <JointeamSection />
      <CTASection />
      <SubscribesSection />
    </>
  );
}
