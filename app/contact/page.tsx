import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Seller AI Tools for corrections, partnerships, and editorial questions."
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-12">
      <h1 className="text-4xl font-black text-ink">Contact</h1>
      <div className="prose-content mt-6 rounded-lg border border-line bg-white p-6 shadow-soft">
        <p>
          For corrections, partnership questions, or editorial feedback, email
          wayneye27@gmail.com.
        </p>
        <p>
          We review product claims, pricing notes, and affiliate disclosures regularly, but software
          plans and offers can change. Send a note if you spot outdated information.
        </p>
      </div>
    </main>
  );
}
