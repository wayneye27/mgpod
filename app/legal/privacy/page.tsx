import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for MGPod Reviews."
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-12">
      <h1 className="text-4xl font-black text-ink">Privacy Policy</h1>
      <section className="prose-content mt-6 rounded-lg border border-line bg-white p-6 shadow-soft">
        <p>
          MGPod Reviews may collect basic analytics data, affiliate click data, and information
          you voluntarily submit through contact or newsletter forms.
        </p>
        <h2>Analytics</h2>
        <p>
          We may use privacy-conscious analytics or standard web analytics to understand aggregate
          traffic, popular pages, and technical issues.
        </p>
        <h2>Affiliate links</h2>
        <p>
          Some outbound links use tracking parameters so affiliate networks can attribute purchases.
          These networks may process data according to their own policies.
        </p>
        <h2>Contact</h2>
        <p>Questions about privacy can be sent to wayneye27@gmail.com.</p>
      </section>
    </main>
  );
}
