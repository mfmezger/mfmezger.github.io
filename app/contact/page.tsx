import type { Metadata } from 'next';

import ContactIcons from '@/components/Contact/ContactIcons';
import EmailLink from '@/components/Contact/EmailLink';

import PageWrapper from '@/components/Template/PageWrapper';

export const metadata: Metadata = {
  title: 'Contact',
  description: "Contact Marc Fabian Mezger via email @ hi@gmail.com",
};

export default function ContactPage() {
  return (
    <PageWrapper>
      <section className="contact-page">
        <header className="contact-header">
          <h1 className="page-title">Get in Touch</h1>
          <p className="contact-summary">
            Feel free to reach out via any of the channels below.
          </p>
        </header>

        <div className="contact-content">
          <ContactIcons />
          <p className="contact-hint">Usually respond within 24 hours</p>
        </div>
      </section>
    </PageWrapper>
  );
}
