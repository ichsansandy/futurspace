import ContactCTA from '../../components/Contact/ContactCTA';
import ContactClient from '../../components/Contact/ContactClient';
import ContactContact from '../../components/Contact/ContactContact';
import ContactForm from '../../components/Contact/ContactForm';
import ContactHero from '../../components/Contact/ContactHero';
import ContactMap from '../../components/Contact/ContactMap';

export default function ContactPage() {
  return (
    <div className="">
      <ContactHero />
      <ContactMap />
      <ContactContact />
      <ContactCTA />
      <ContactClient />
      <ContactForm />
    </div>
  );
}
