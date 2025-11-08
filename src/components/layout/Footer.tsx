import Link from "next/link";
import { Instagram, Mail } from "lucide-react";

const footerNavigation = {
  about: [
    { name: "Our Story", href: "/about" },
    { name: "The Films", href: "/about#films" },
    { name: "Locations", href: "/locations" },
  ],
  shop: [
    { name: "T-Shirts", href: "/shop/t-shirts" },
    { name: "Headwear", href: "/shop/headwear" },
    { name: "Posters", href: "/shop/posters" },
  ],
  connect: [
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "Email", href: "mailto:hello@costieracinema.com", icon: Mail },
    { name: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-vintage-charcoal text-vintage-cream" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container mx-auto px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="text-3xl font-display font-bold">
              Costiera Cinema
            </Link>
            <p className="text-sm leading-6 text-vintage-cream/70">
              Authentic merchandise celebrating the films of Amalfi Coast.
            </p>
            <div className="flex space-x-6">
              {footerNavigation.connect
                .filter((item) => item.icon)
                .map((item) => {
                  const Icon = item.icon!;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-vintage-cream/70 hover:text-vintage-cream transition-colors"
                    >
                      <span className="sr-only">{item.name}</span>
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </a>
                  );
                })}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-heading font-semibold leading-6 text-vintage-cream">
                  About
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.about.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-vintage-cream/70 hover:text-vintage-cream transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-heading font-semibold leading-6 text-vintage-cream">
                  Shop
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.shop.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-vintage-cream/70 hover:text-vintage-cream transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-heading font-semibold leading-6 text-vintage-cream">
                Connect
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {footerNavigation.connect.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm leading-6 text-vintage-cream/70 hover:text-vintage-cream transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-vintage-cream/10 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs leading-5 text-vintage-cream/50">
              &copy; {new Date().getFullYear()} Costiera Cinema. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-xs leading-5 text-vintage-cream/50 hover:text-vintage-cream/70 transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-xs leading-5 text-vintage-cream/50 hover:text-vintage-cream/70 transition-colors"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
