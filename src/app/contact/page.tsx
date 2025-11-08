import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Costiera Cinema",
  description: "Get in touch with Costiera Cinema for inquiries, partnerships, or general questions.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-display font-bold text-vintage-sepia mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-vintage-sepia-light font-heading">
            We'd love to hear from you
          </p>
        </div>
        <div className="text-center text-muted-foreground">
          <p>Contact form coming soon...</p>
        </div>
      </div>
    </main>
  );
}
