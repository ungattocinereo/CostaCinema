import type { Metadata } from "next";
import { Shield, Lock, Eye, FileText, Mail, Database } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Costiera Cinema",
  description: "Privacy Policy and data protection information for Costiera Cinema in compliance with GDPR and Italian law.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-vintage-sepia/10 to-coastal-blue/10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-md">
                <Shield className="w-5 h-5 text-coastal-blue" />
                <span className="font-heading text-coastal-blue font-semibold">GDPR Compliant</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-charcoal mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: November 11, 2025
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Quick Info Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <div className="bg-white rounded-lg p-6 border border-vintage-sepia/10">
            <Lock className="w-8 h-8 text-vintage-sepia mb-3" />
            <h3 className="font-heading font-semibold text-charcoal mb-2">Your Data is Protected</h3>
            <p className="text-sm text-muted-foreground">We use industry-standard encryption</p>
          </div>
          <div className="bg-white rounded-lg p-6 border border-vintage-sepia/10">
            <Eye className="w-8 h-8 text-coastal-blue mb-3" />
            <h3 className="font-heading font-semibold text-charcoal mb-2">Transparent Process</h3>
            <p className="text-sm text-muted-foreground">Clear about data collection and use</p>
          </div>
          <div className="bg-white rounded-lg p-6 border border-vintage-sepia/10">
            <FileText className="w-8 h-8 text-vintage-red mb-3" />
            <h3 className="font-heading font-semibold text-charcoal mb-2">Your Rights</h3>
            <p className="text-sm text-muted-foreground">Full control over your personal data</p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-3xl font-display font-bold text-charcoal mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Costiera Cinema ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This policy is in compliance with the European Union General Data Protection Regulation (GDPR) (EU) 2016/679 and Italian Legislative Decree no. 196/2003 (Privacy Code) as amended by Legislative Decree no. 101/2018.
            </p>
          </section>

          {/* Data Controller */}
          <section>
            <h2 className="text-3xl font-display font-bold text-charcoal mb-4">2. Data Controller</h2>
            <div className="bg-vintage-sepia/5 rounded-lg p-6">
              <p className="text-muted-foreground leading-relaxed mb-2">
                <strong className="text-charcoal">Company:</strong> Costiera Cinema<br />
                <strong className="text-charcoal">Email:</strong> privacy@costieracinema.com<br />
                <strong className="text-charcoal">Address:</strong> [Company Address], Italy
              </p>
            </div>
          </section>

          {/* Information We Collect */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-coastal-blue" />
              <h2 className="text-3xl font-display font-bold text-charcoal">3. Information We Collect</h2>
            </div>

            <h3 className="text-xl font-heading font-semibold text-charcoal mb-3 mt-6">3.1 Personal Data</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When you interact with our website or services, we may collect:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Name and contact information (email address, phone number)</li>
              <li>Billing and shipping address</li>
              <li>Payment information (processed securely through third-party payment processors)</li>
              <li>Account credentials (username and password)</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="text-xl font-heading font-semibold text-charcoal mb-3 mt-6">3.2 Automatically Collected Information</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>IP address and browser type</li>
              <li>Device information and operating system</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring website addresses</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-3xl font-display font-bold text-charcoal mb-4">4. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We process your personal data for the following purposes:
            </p>
            <div className="space-y-4">
              <div className="bg-coastal-blue/5 rounded-lg p-4">
                <h4 className="font-heading font-semibold text-charcoal mb-2">Order Processing</h4>
                <p className="text-sm text-muted-foreground">To process and fulfill your orders, including payment processing and shipping.</p>
              </div>
              <div className="bg-vintage-sepia/5 rounded-lg p-4">
                <h4 className="font-heading font-semibold text-charcoal mb-2">Customer Service</h4>
                <p className="text-sm text-muted-foreground">To respond to your inquiries, provide support, and communicate about your orders.</p>
              </div>
              <div className="bg-vintage-red/5 rounded-lg p-4">
                <h4 className="font-heading font-semibold text-charcoal mb-2">Marketing Communications</h4>
                <p className="text-sm text-muted-foreground">To send promotional emails about new products and offers (with your consent via double opt-in).</p>
              </div>
              <div className="bg-coastal-blue/5 rounded-lg p-4">
                <h4 className="font-heading font-semibold text-charcoal mb-2">Website Improvement</h4>
                <p className="text-sm text-muted-foreground">To analyze website usage and improve our services and user experience.</p>
              </div>
              <div className="bg-vintage-sepia/5 rounded-lg p-4">
                <h4 className="font-heading font-semibold text-charcoal mb-2">Legal Compliance</h4>
                <p className="text-sm text-muted-foreground">To comply with legal obligations, including tax and accounting requirements.</p>
              </div>
            </div>
          </section>

          {/* Legal Basis */}
          <section>
            <h2 className="text-3xl font-display font-bold text-charcoal mb-4">5. Legal Basis for Processing</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Under GDPR, we process your personal data based on:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li><strong className="text-charcoal">Contractual Necessity:</strong> Processing necessary to fulfill our contract with you</li>
              <li><strong className="text-charcoal">Consent:</strong> You have given explicit consent for specific processing activities</li>
              <li><strong className="text-charcoal">Legitimate Interests:</strong> Processing necessary for our legitimate business interests</li>
              <li><strong className="text-charcoal">Legal Obligations:</strong> Processing required to comply with applicable laws</li>
            </ul>
          </section>

          {/* Data Sharing */}
          <section>
            <h2 className="text-3xl font-display font-bold text-charcoal mb-4">6. Data Sharing and Disclosure</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may share your information with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li><strong className="text-charcoal">Service Providers:</strong> Third parties who help operate our business (payment processors, shipping companies, email service providers)</li>
              <li><strong className="text-charcoal">Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong className="text-charcoal">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We do not sell your personal data to third parties.
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-3xl font-display font-bold text-charcoal mb-4">7. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your personal data only as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations (including Italian tax law requiring 10-year retention of invoices), resolve disputes, and enforce our agreements.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-vintage-red" />
              <h2 className="text-3xl font-display font-bold text-charcoal">8. Your Rights Under GDPR</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You have the following rights regarding your personal data:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-vintage-sepia/20 rounded-lg p-4">
                <h4 className="font-heading font-semibold text-charcoal mb-2">Right to Access</h4>
                <p className="text-sm text-muted-foreground">Request a copy of your personal data</p>
              </div>
              <div className="border border-vintage-sepia/20 rounded-lg p-4">
                <h4 className="font-heading font-semibold text-charcoal mb-2">Right to Rectification</h4>
                <p className="text-sm text-muted-foreground">Correct inaccurate data</p>
              </div>
              <div className="border border-vintage-sepia/20 rounded-lg p-4">
                <h4 className="font-heading font-semibold text-charcoal mb-2">Right to Erasure</h4>
                <p className="text-sm text-muted-foreground">Request deletion of your data</p>
              </div>
              <div className="border border-vintage-sepia/20 rounded-lg p-4">
                <h4 className="font-heading font-semibold text-charcoal mb-2">Right to Restriction</h4>
                <p className="text-sm text-muted-foreground">Limit how we use your data</p>
              </div>
              <div className="border border-vintage-sepia/20 rounded-lg p-4">
                <h4 className="font-heading font-semibold text-charcoal mb-2">Right to Data Portability</h4>
                <p className="text-sm text-muted-foreground">Receive your data in a usable format</p>
              </div>
              <div className="border border-vintage-sepia/20 rounded-lg p-4">
                <h4 className="font-heading font-semibold text-charcoal mb-2">Right to Object</h4>
                <p className="text-sm text-muted-foreground">Object to certain processing activities</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mt-4">
              To exercise these rights, please contact us at <a href="mailto:privacy@costieracinema.com" className="text-coastal-blue hover:underline">privacy@costieracinema.com</a>
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-3xl font-display font-bold text-charcoal mb-4">9. Cookies and Tracking</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use cookies and similar technologies to enhance your browsing experience. You can control cookie preferences through your browser settings. For detailed information, please see our Cookie Policy.
            </p>
            <div className="bg-vintage-sepia/5 rounded-lg p-4">
              <h4 className="font-heading font-semibold text-charcoal mb-2">Types of Cookies We Use:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                <li>Essential cookies (required for website functionality)</li>
                <li>Analytics cookies (to understand website usage)</li>
                <li>Marketing cookies (with your consent)</li>
              </ul>
            </div>
          </section>

          {/* International Transfers */}
          <section>
            <h2 className="text-3xl font-display font-bold text-charcoal mb-4">10. International Data Transfers</h2>
            <p className="text-muted-foreground leading-relaxed">
              If we transfer your data outside the European Economic Area (EEA), we ensure appropriate safeguards are in place, such as Standard Contractual Clauses approved by the European Commission.
            </p>
          </section>

          {/* Security */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-coastal-blue" />
              <h2 className="text-3xl font-display font-bold text-charcoal">11. Data Security</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. This includes SSL encryption, secure servers, and access controls.
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-3xl font-display font-bold text-charcoal mb-4">12. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected data from a minor, please contact us immediately.
            </p>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-3xl font-display font-bold text-charcoal mb-4">13. Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy periodically. We will notify you of significant changes by posting the new policy on this page and updating the "Last updated" date. Your continued use of our services after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* Contact */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-vintage-red" />
              <h2 className="text-3xl font-display font-bold text-charcoal">14. Contact Us</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
            </p>
            <div className="bg-gradient-to-br from-vintage-sepia/10 to-coastal-blue/10 rounded-lg p-6">
              <p className="text-muted-foreground">
                <strong className="text-charcoal">Email:</strong> <a href="mailto:privacy@costieracinema.com" className="text-coastal-blue hover:underline">privacy@costieracinema.com</a><br />
                <strong className="text-charcoal">Subject Line:</strong> Privacy Inquiry<br />
                <strong className="text-charcoal">Response Time:</strong> Within 30 days as required by GDPR
              </p>
            </div>
          </section>

          {/* Supervisory Authority */}
          <section>
            <h2 className="text-3xl font-display font-bold text-charcoal mb-4">15. Right to Lodge a Complaint</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you believe your data protection rights have been violated, you have the right to lodge a complaint with the Italian Data Protection Authority (Garante per la protezione dei dati personali):
            </p>
            <div className="bg-vintage-sepia/5 rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                <strong className="text-charcoal">Garante per la protezione dei dati personali</strong><br />
                Piazza Venezia, 11 - 00187 Roma<br />
                Website: <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-coastal-blue hover:underline">www.garanteprivacy.it</a>
              </p>
            </div>
          </section>
        </div>

        {/* Bottom Notice */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            This Privacy Policy is governed by Italian law and complies with GDPR requirements.
          </p>
        </div>
      </div>
    </main>
  );
}
