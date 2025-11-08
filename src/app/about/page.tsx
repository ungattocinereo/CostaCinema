import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Costiera Cinema",
  description: "Discover the story behind Costiera Cinema and the films that brought the Amalfi Coast to the world stage.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-5xl font-display font-bold text-vintage-sepia mb-6">
          The Story Behind Costiera Cinema
        </h1>
        <p className="text-lg text-muted-foreground">
          Coming soon...
        </p>
      </div>
    </main>
  );
}
