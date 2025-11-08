import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop | Costiera Cinema",
  description: "Authentic film-inspired merchandise celebrating the Amalfi Coast cinema heritage.",
};

export default function ShopPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-display font-bold text-vintage-sepia mb-4">
            Film-Inspired Merchandise
          </h1>
          <p className="text-lg text-vintage-sepia-light font-heading">
            Authentic designs celebrating Amalfi Coast cinema
          </p>
        </div>
        <div className="text-center text-muted-foreground">
          <p>Product catalog coming soon...</p>
        </div>
      </div>
    </main>
  );
}
