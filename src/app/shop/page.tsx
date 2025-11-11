"use client";

import type { Metadata } from "next";
import { useState } from "react";
import { ShoppingBag, Shirt, Watch, Image, Sparkles } from "lucide-react";

const categories = [
  {
    id: "all",
    name: "All Products",
    icon: ShoppingBag,
    description: "Browse our complete collection",
  },
  {
    id: "clothing",
    name: "Clothing",
    icon: Shirt,
    description: "T-shirts, hoodies, and apparel",
  },
  {
    id: "accessories",
    name: "Accessories",
    icon: Watch,
    description: "Caps, bags, and more",
  },
  {
    id: "prints",
    name: "Art Prints & Posters",
    icon: Image,
    description: "Stunning location photography",
  },
  {
    id: "collectibles",
    name: "Limited Editions",
    icon: Sparkles,
    description: "Exclusive collectible items",
  },
];

const films = [
  {
    id: "equalizer3",
    name: "The Equalizer 3",
    color: "from-vintage-sepia to-vintage-sepia-light",
  },
  {
    id: "ripley",
    name: "Ripley",
    color: "from-coastal-blue to-coastal-blue-light",
  },
  {
    id: "hotelcostiera",
    name: "Hotel Costiera",
    color: "from-vintage-red to-rose-400",
  },
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedFilm, setSelectedFilm] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-vintage-sepia/10 to-coastal-blue/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-charcoal mb-6">
              Film-Inspired Merchandise
            </h1>
            <p className="text-xl text-vintage-sepia-light font-heading mb-4">
              Authentic designs celebrating the Amalfi Coast cinema heritage
            </p>
            <p className="text-muted-foreground">
              Each piece tells a story from the sun-drenched coast of Southern Italy
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Film Filter */}
        <div className="mb-12">
          <h2 className="text-2xl font-heading font-semibold text-charcoal mb-6 text-center">
            Shop by Film
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedFilm(null)}
              className={`px-6 py-3 rounded-lg font-heading transition-all ${
                selectedFilm === null
                  ? "bg-gradient-to-r from-vintage-sepia to-vintage-sepia-light text-white shadow-lg"
                  : "bg-white text-charcoal hover:shadow-md"
              }`}
            >
              All Films
            </button>
            {films.map((film) => (
              <button
                key={film.id}
                onClick={() => setSelectedFilm(film.id)}
                className={`px-6 py-3 rounded-lg font-heading transition-all ${
                  selectedFilm === film.id
                    ? `bg-gradient-to-r ${film.color} text-white shadow-lg`
                    : "bg-white text-charcoal hover:shadow-md"
                }`}
              >
                {film.name}
              </button>
            ))}
          </div>
        </div>

        {/* Category Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-heading font-semibold text-charcoal mb-6 text-center">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`group relative p-6 rounded-xl transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-br from-vintage-sepia to-vintage-sepia-light text-white shadow-xl scale-105"
                      : "bg-white text-charcoal hover:shadow-lg hover:scale-102"
                  }`}
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div
                      className={`p-4 rounded-full transition-colors ${
                        selectedCategory === category.id
                          ? "bg-white/20"
                          : "bg-vintage-sepia/10 group-hover:bg-vintage-sepia/20"
                      }`}
                    >
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-1">
                        {category.name}
                      </h3>
                      <p
                        className={`text-sm ${
                          selectedCategory === category.id
                            ? "text-white/80"
                            : "text-muted-foreground"
                        }`}
                      >
                        {category.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="max-w-2xl mx-auto text-center py-16">
          <div className="bg-white rounded-2xl shadow-lg p-12 border border-vintage-sepia/10">
            <div className="mb-6">
              <div className="inline-block p-4 bg-gradient-to-br from-vintage-sepia/10 to-coastal-blue/10 rounded-full mb-4">
                <ShoppingBag className="w-12 h-12 text-vintage-sepia" />
              </div>
            </div>
            <h2 className="text-3xl font-display font-bold text-charcoal mb-4">
              Opening Soon
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Our carefully curated collection of film-inspired merchandise is coming soon.
              Each piece is designed with authentic Italian craftsmanship.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-left bg-vintage-sepia/5 rounded-lg p-4">
                <Shirt className="w-5 h-5 text-vintage-sepia mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading font-semibold text-charcoal mb-1">
                    Premium Apparel
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Organic cotton tees, hoodies, and more featuring iconic scenes
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-left bg-coastal-blue/5 rounded-lg p-4">
                <Watch className="w-5 h-5 text-coastal-blue mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading font-semibold text-charcoal mb-1">
                    Stylish Accessories
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Caps, tote bags, and everyday items with Italian flair
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-left bg-vintage-red/5 rounded-lg p-4">
                <Sparkles className="w-5 h-5 text-vintage-red mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading font-semibold text-charcoal mb-1">
                    Limited Editions
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Exclusive numbered prints and collectible memorabilia
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-vintage-sepia/10">
              <p className="text-sm text-muted-foreground mb-4">
                Be the first to know when we launch
              </p>
              <button className="px-8 py-3 bg-gradient-to-r from-vintage-sepia to-vintage-sepia-light text-white rounded-lg font-heading hover:shadow-lg transition-all">
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
