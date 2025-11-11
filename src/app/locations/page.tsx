"use client";

import { useState } from "react";
import { MapPin, Camera, Film, Navigation, Info } from "lucide-react";

const locations = [
  {
    id: 1,
    name: "Atrani",
    position: { x: 48, y: 52 },
    films: ["The Equalizer 3", "Ripley"],
    description: "A charming medieval village, one of Italy's smallest towns with stunning sea views.",
    scenes: "Featured in intense action sequences and atmospheric coastal scenes",
    coordinates: "40.6333° N, 14.6000° E",
  },
  {
    id: 2,
    name: "Positano",
    position: { x: 25, y: 58 },
    films: ["Hotel Costiera"],
    description: "The jewel of the Amalfi Coast with colorful cliffside houses cascading down to the sea.",
    scenes: "Luxurious hotel exteriors and romantic coastal promenades",
    coordinates: "40.6280° N, 14.4850° E",
  },
  {
    id: 3,
    name: "Amalfi",
    position: { x: 55, y: 48 },
    films: ["The Equalizer 3", "Ripley"],
    description: "The historic heart of the coast, featuring stunning cathedral architecture.",
    scenes: "Central piazza scenes and dramatic coastal cinematography",
    coordinates: "40.6340° N, 14.6027° E",
  },
  {
    id: 4,
    name: "Ravello",
    position: { x: 62, y: 35 },
    films: ["Ripley"],
    description: "Perched high above the sea with breathtaking panoramic views and elegant villas.",
    scenes: "Villa Cimbrone gardens and sophisticated dinner scenes",
    coordinates: "40.6486° N, 14.6125° E",
  },
  {
    id: 5,
    name: "Maiori",
    position: { x: 72, y: 50 },
    films: ["Ripley"],
    description: "Features the longest beach on the Amalfi Coast and charming seaside promenade.",
    scenes: "Beach sequences and coastal driving scenes",
    coordinates: "40.6489° N, 14.6419° E",
  },
  {
    id: 6,
    name: "Praiano",
    position: { x: 35, y: 55 },
    films: ["Hotel Costiera"],
    description: "A quiet fishing village offering authentic coastal Italian atmosphere.",
    scenes: "Sunset sequences and intimate village life",
    coordinates: "40.6100° N, 14.5333° E",
  },
  {
    id: 7,
    name: "Furore",
    position: { x: 42, y: 48 },
    films: ["The Equalizer 3"],
    description: "Famous for the dramatic Fiordo di Furore fjord carved into the cliffs.",
    scenes: "Dramatic chase sequences along coastal roads",
    coordinates: "40.6167° N, 14.5500° E",
  },
];

const films = [
  { id: "equalizer3", name: "The Equalizer 3", color: "bg-vintage-sepia", borderColor: "border-vintage-sepia" },
  { id: "ripley", name: "Ripley", color: "bg-coastal-blue", borderColor: "border-coastal-blue" },
  { id: "hotelcostiera", name: "Hotel Costiera", color: "bg-vintage-red", borderColor: "border-vintage-red" },
];

export default function LocationsPage() {
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);
  const [hoveredLocation, setHoveredLocation] = useState<number | null>(null);
  const [filterFilm, setFilterFilm] = useState<string | null>(null);

  const filteredLocations = filterFilm
    ? locations.filter((loc) => loc.films.includes(filterFilm))
    : locations;

  return (
    <main className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-coastal-blue/20 to-vintage-sepia/10 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-md">
                <MapPin className="w-5 h-5 text-coastal-blue" />
                <span className="font-heading text-coastal-blue font-semibold">Amalfi Coast, Italy</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-charcoal mb-6">
              Filming Locations
            </h1>
            <p className="text-xl text-vintage-sepia-light font-heading mb-4">
              Discover the stunning Amalfi Coast settings that brought these stories to life
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From medieval villages to dramatic cliffsides, explore the real locations
              where cinema meets the Italian coastline
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Film Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setFilterFilm(null)}
              className={`px-6 py-3 rounded-lg font-heading transition-all flex items-center gap-2 ${
                filterFilm === null
                  ? "bg-gradient-to-r from-vintage-sepia to-vintage-sepia-light text-white shadow-lg"
                  : "bg-white text-charcoal hover:shadow-md border border-gray-200"
              }`}
            >
              <Film className="w-4 h-4" />
              All Films
            </button>
            {films.map((film) => (
              <button
                key={film.id}
                onClick={() => setFilterFilm(film.name)}
                className={`px-6 py-3 rounded-lg font-heading transition-all flex items-center gap-2 ${
                  filterFilm === film.name
                    ? `${film.color} text-white shadow-lg`
                    : "bg-white text-charcoal hover:shadow-md border border-gray-200"
                }`}
              >
                <Camera className="w-4 h-4" />
                {film.name}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Map */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Map Container */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-vintage-sepia/10">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-display font-bold text-charcoal">
                  Amalfi Coast Map
                </h2>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Navigation className="w-4 h-4" />
                  <span>Interactive Map</span>
                </div>
              </div>

              {/* SVG Map */}
              <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-coastal-blue/5 to-vintage-sepia/5 rounded-xl overflow-hidden">
                {/* Stylized Coastline */}
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full"
                  style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }}
                >
                  {/* Sea */}
                  <rect x="0" y="0" width="100" height="100" fill="#7BA5B8" opacity="0.2" />

                  {/* Coastline */}
                  <path
                    d="M 10 70 Q 20 65, 30 62 T 50 55 T 70 52 T 90 48"
                    stroke="#5B8FA3"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.6"
                  />

                  {/* Land */}
                  <path
                    d="M 10 70 Q 20 65, 30 62 T 50 55 T 70 52 T 90 48 L 100 0 L 0 0 L 0 75 Z"
                    fill="#D4A574"
                    opacity="0.15"
                  />

                  {/* Location Markers */}
                  {filteredLocations.map((location) => {
                    const isSelected = selectedLocation === location.id;
                    const isHovered = hoveredLocation === location.id;
                    const scale = isSelected || isHovered ? 1.3 : 1;

                    return (
                      <g
                        key={location.id}
                        transform={`translate(${location.position.x}, ${location.position.y})`}
                        style={{ cursor: 'pointer', transition: 'all 0.2s' }}
                        onClick={() => setSelectedLocation(location.id)}
                        onMouseEnter={() => setHoveredLocation(location.id)}
                        onMouseLeave={() => setHoveredLocation(null)}
                      >
                        {/* Pin Shadow */}
                        <circle
                          cx="0"
                          cy="3"
                          r={2.5 * scale}
                          fill="black"
                          opacity="0.2"
                        />

                        {/* Pin */}
                        <circle
                          cx="0"
                          cy="0"
                          r={2.5 * scale}
                          fill={isSelected ? "#C13F3F" : "#D4A574"}
                          stroke="white"
                          strokeWidth="0.5"
                        />

                        {/* Label */}
                        {(isSelected || isHovered) && (
                          <text
                            x="0"
                            y="-4"
                            textAnchor="middle"
                            fontSize="3"
                            fontWeight="bold"
                            fill="#2C2C2C"
                            style={{ pointerEvents: 'none' }}
                          >
                            {location.name}
                          </text>
                        )}
                      </g>
                    );
                  })}
                </svg>

                {/* Legend */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-md">
                  <div className="text-xs font-heading font-semibold text-charcoal mb-2">
                    Click markers to explore
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="w-3 h-3 rounded-full bg-vintage-sepia"></div>
                    <span>Filming Location</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                    <div className="w-3 h-3 rounded-full bg-vintage-red"></div>
                    <span>Selected</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-vintage-sepia/10 sticky top-4">
              {selectedLocation ? (
                <>
                  {(() => {
                    const location = locations.find(l => l.id === selectedLocation)!;
                    return (
                      <div className="space-y-4">
                        <div>
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="text-2xl font-display font-bold text-charcoal">
                              {location.name}
                            </h3>
                            <button
                              onClick={() => setSelectedLocation(null)}
                              className="text-muted-foreground hover:text-charcoal"
                            >
                              ✕
                            </button>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                            <MapPin className="w-4 h-4" />
                            <span className="font-mono text-xs">{location.coordinates}</span>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <Info className="w-4 h-4 text-vintage-sepia" />
                              <span className="font-heading font-semibold text-charcoal text-sm">
                                About
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {location.description}
                            </p>
                          </div>

                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <Film className="w-4 h-4 text-coastal-blue" />
                              <span className="font-heading font-semibold text-charcoal text-sm">
                                Featured In
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {location.films.map((film) => {
                                const filmData = films.find(f => f.name === film);
                                return (
                                  <span
                                    key={film}
                                    className={`px-3 py-1 rounded-full text-xs font-heading text-white ${filmData?.color}`}
                                  >
                                    {film}
                                  </span>
                                );
                              })}
                            </div>
                          </div>

                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <Camera className="w-4 h-4 text-vintage-red" />
                              <span className="font-heading font-semibold text-charcoal text-sm">
                                Scenes
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {location.scenes}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })()}
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="inline-block p-4 bg-vintage-sepia/10 rounded-full mb-4">
                    <MapPin className="w-8 h-8 text-vintage-sepia" />
                  </div>
                  <h3 className="font-heading font-semibold text-charcoal mb-2">
                    Select a Location
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Click on any marker on the map to view detailed information about the filming location
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Location Grid */}
        <div className="mt-12">
          <h2 className="text-3xl font-display font-bold text-charcoal mb-8 text-center">
            All Locations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLocations.map((location) => (
              <button
                key={location.id}
                onClick={() => setSelectedLocation(location.id)}
                className="text-left bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 border border-vintage-sepia/10 hover:scale-105"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-heading font-bold text-charcoal">
                    {location.name}
                  </h3>
                  <MapPin className="w-5 h-5 text-vintage-sepia flex-shrink-0" />
                </div>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {location.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {location.films.map((film) => {
                    const filmData = films.find(f => f.name === film);
                    return (
                      <span
                        key={film}
                        className={`px-2 py-1 rounded text-xs font-heading text-white ${filmData?.color}`}
                      >
                        {film}
                      </span>
                    );
                  })}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Visit Info */}
        <div className="mt-16 bg-gradient-to-br from-coastal-blue/10 to-vintage-sepia/10 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold text-charcoal mb-4">
              Plan Your Visit
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Experience the magic of these cinematic locations in person. The Amalfi Coast
              is a UNESCO World Heritage Site offering stunning natural beauty year-round.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-heading font-semibold text-charcoal mb-2">Best Season</h3>
                <p className="text-sm text-muted-foreground">April to October for warm weather</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-heading font-semibold text-charcoal mb-2">Getting There</h3>
                <p className="text-sm text-muted-foreground">Fly to Naples, then bus or ferry</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-heading font-semibold text-charcoal mb-2">Pro Tip</h3>
                <p className="text-sm text-muted-foreground">Visit early morning or late afternoon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
