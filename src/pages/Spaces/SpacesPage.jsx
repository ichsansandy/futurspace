import SpacesCTA from '../../components/Spaces/SpacesCTA';
import SpacesFeedback from '../../components/Spaces/SpacesFeedback';
import SpacesHero from '../../components/Spaces/SpacesHero';
import SpacesService from '../../components/Spaces/SpacesService';
import ContactClient from '../../components/Contact/ContactClient';
import ReviewSection from '../../components/Home/Review.section';

export default function SpacesPage() {
  return (
    <main>
      <SpacesHero />
      <SpacesService />
      <SpacesCTA />
      <ReviewSection />
      <SpacesFeedback />
      <ContactClient />
    </main>
  );
}
