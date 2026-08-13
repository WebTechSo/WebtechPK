import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with WebTech Solutions about your next project.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s map your next move."
        description="Share a bit about your goals. We’ll respond with clear next steps—no hard sell, just a practical conversation."
      />

      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[0.9fr_1.2fr] md:px-8">
          <Reveal>
            <div>
              <h2 className="font-display text-2xl font-bold text-ink">
                Direct lines
              </h2>
              <dl className="mt-6 space-y-5 text-sm">
                <div>
                  <dt className="font-semibold text-ink">Email</dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${company.email}`}
                      className="text-teal transition hover:text-ink"
                    >
                      {company.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">Phone</dt>
                  <dd className="mt-1 text-muted">{company.phone}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">Locations</dt>
                  <dd className="mt-1 text-muted">{company.location}</dd>
                </div>
              </dl>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="border border-line bg-white p-6 md:p-8">
              <h2 className="font-display text-2xl font-bold text-ink">
                Project inquiry
              </h2>
              <p className="mt-2 text-sm text-muted">
                Typical reply time: within one business day.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
