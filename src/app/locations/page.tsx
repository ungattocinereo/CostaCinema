import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Filming Locations | Costiera Cinema",
  description: "Explore the stunning Amalfi Coast locations featured in The Equalizer 3, Ripley, and Hotel Costiera.",
};

export default function LocationsPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-display font-bold text-vintage-sepia mb-4">
            Filming Locations
          </h1>
          <p className="text-lg text-vintage-sepia-light font-heading">
            Discover the iconic Amalfi Coast settings
          </p>
        </div>
        <div className="text-center text-muted-foreground">
          <p>Interactive map and location details coming soon...</p>
        </div>
      </div>
    </main>
  );
}
