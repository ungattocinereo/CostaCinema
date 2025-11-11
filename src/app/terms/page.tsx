import type { Metadata } from "next";
import { Scale, ShoppingCart, Package, CreditCard, RotateCcw, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | Costiera Cinema",
  description: "Terms and Conditions of sale for Costiera Cinema online store.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-vintage-sepia/10 to-coastal-blue/10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-md">
                <Scale className="w-5 h-5 text-vintage-sepia" />
                <span className="font-heading text-vintage-sepia font-semibold">Legal Agreement</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-charcoal mb-6">
              Terms &amp; Conditions
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: November 11, 2025
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Quick Navigation */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          <a href="#orders" className="bg-white rounded-lg p-6 border border-vintage-sepia/10 hover:shadow-lg transition-all">
            <ShoppingCart className="w-8 h-8 text-vintage-sepia mb-3" />
            <h3 className="font-heading font-semibold text-charcoal text-sm">Orders</h3>
          </a>
          <a href="#payment" className="bg-white rounded-lg p-6 border border-vintage-sepia/10 hover:shadow-lg transition-all">
            <CreditCard className="w-8 h-8 text-coastal-blue mb-3" />
            <h3 className="font-heading font-semibold text-charcoal text-sm">Payment</h3>
          </a>
          <a href="#shipping" className="bg-white rounded-lg p-6 border border-vintage-sepia/10 hover:shadow-lg transition-all">
            <Package className="w-8 h-8 text-vintage-red mb-3" />
            <h3 className="font-heading font-semibold text-charcoal text-sm">Shipping</h3>
          </a>
          <a href="#returns" className="bg-white rounded-lg p-6 border border-vintage-sepia/10 hover:shadow-lg transition-all">
            <RotateCcw className="w-8 h-8 text-coastal-blue mb-3" />
            <h3 className="font-heading font-semibold text-charcoal text-sm">Returns</h3>
          </a>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-3xl font-display font-bold text-charcoal mb-4">1. General Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              These Terms and Conditions ("Terms") govern the sale of merchandise and use of services provided by Costiera Cinema ("we," "our," "us") through our website. By placing an order or using our services, you agree to be bound by these Terms.
            </p>
            <div className="bg-vintage-sepia/5 rounded-lg p-6">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-charcoal">Company:</strong> Costiera Cinema<br />
                <strong className="text-charcoal">Email:</strong> hello@costieracinema.com<br />
                <strong className="text-charcoal">Address:</strong> [Company Address], Italy<br />
                <strong className="text-charcoal">VAT Number:</strong> [VAT Number]
              </p>
            </div>
          </section>

          {/* Applicable Law */}
          <section>
            <h2 className="text-3xl font-display font-bold text-charcoal mb-4">2. Applicable Law</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              These Terms are governed by and construed in accordance with Italian law, particularly:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Italian Civil Code (Codice Civile)</li>
              <li>Legislative Decree 206/2005 (Consumer Code - Codice del Consumo)</li>
              <li>EU Regulation 2016/679 (GDPR)</li>
              <li>Legislative Decree 70/2003 (E-commerce Directive)</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Any disputes shall be subject to the exclusive jurisdiction of the Italian courts.
            </p>
          </section>

          {/* Eligibility */}
          <section>
            <h2 className="text-3xl font-display font-bold text-charcoal mb-4">3. Eligibility</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our services are available exclusively to consumers aged 18 years or older who have the legal capacity to enter into binding contracts. By placing an order, you represent that you meet these requirements.
            </p>
          </section>

          {/* Products */}
          <section>
            <h2 className="text-3xl font-display font-bold text-charcoal mb-4">4. Products and Pricing</h2>

            <h3 className="text-xl font-heading font-semibold text-charcoal mb-3 mt-6">4.1 Product Information</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We make every effort to display our products as accurately as possible. However, we cannot guarantee that your device's display of colors or product details will be completely accurate.
            </p>

            <h3 className="text-xl font-heading font-semibold text-charcoal mb-3 mt-6">4.2 Pricing</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>All prices are displayed in Euros (€) and include Italian VAT at the applicable rate</li>
              <li>Shipping costs are calculated separately and shown before final checkout</li>
              <li>We reserve the right to modify prices at any time, but changes will not affect orders already placed</li>
              <li>In case of obvious pricing errors, we reserve the right to cancel the order</li>
            </ul>

            <h3 className="text-xl font-heading font-semibold text-charcoal mb-3 mt-6">4.3 Availability</h3>
            <p className="text-muted-foreground leading-relaxed">
              Product availability is subject to change. If a product becomes unavailable after you place an order, we will notify you promptly and offer a full refund or alternative product.
            </p>
          </section>

          {/* Orders */}
          <section id="orders">
            <div className="flex items-center gap-3 mb-4">
              <ShoppingCart className="w-6 h-6 text-vintage-sepia" />
              <h2 className="text-3xl font-display font-bold text-charcoal">5. Order Process</h2>
            </div>

            <h3 className="text-xl font-heading font-semibold text-charcoal mb-3">5.1 Placing an Order</h3>
            <div className="bg-coastal-blue/5 rounded-lg p-6 mb-4">
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Select products and add them to your cart</li>
                <li>Review your order and proceed to checkout</li>
                <li>Provide accurate shipping and billing information</li>
                <li>Choose your payment method</li>
                <li>Review and confirm your order</li>
                <li>Receive order confirmation via email</li>
              </ol>
            </div>

            <h3 className="text-xl font-heading font-semibold text-charcoal mb-3 mt-6">5.2 Order Confirmation</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              After placing an order, you will receive an email confirmation containing your order details. This confirmation does not constitute acceptance of your order but acknowledgment of receipt.
            </p>

            <h3 className="text-xl font-heading font-semibold text-charcoal mb-3 mt-6">5.3 Order Acceptance</h3>
            <p className="text-muted-foreground leading-relaxed">
              A binding contract is formed when we send you a shipping confirmation email. We reserve the right to refuse or cancel any order for legitimate reasons, including product unavailability, pricing errors, or suspected fraudulent activity.
            </p>
          </section>

          {/* Payment */}
          <section id="payment">
            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="w-6 h-6 text-coastal-blue" />
              <h2 className="text-3xl font-display font-bold text-charcoal">6. Payment</h2>
            </div>

            <h3 className="text-xl font-heading font-semibold text-charcoal mb-3">6.1 Payment Methods</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We accept the following payment methods:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
              <li>Credit and debit cards (Visa, Mastercard, American Express)</li>
              <li>PayPal</li>
              <li>Bank transfer (for certain orders)</li>
            </ul>

            <h3 className="text-xl font-heading font-semibold text-charcoal mb-3 mt-6">6.2 Payment Security</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              All payment transactions are processed through secure, PCI-DSS compliant payment gateways. We do not store your complete credit card information on our servers.
            </p>

            <h3 className="text-xl font-heading font-semibold text-charcoal mb-3 mt-6">6.3 Payment Timing</h3>
            <p className="text-muted-foreground leading-relaxed">
              Payment is due at the time of order placement. Your payment method will be charged when your order is confirmed and processed for shipping.
            </p>
          </section>

          {/* Shipping */}
          <section id="shipping">
            <div className="flex items-center gap-3 mb-4">
              <Package className="w-6 h-6 text-vintage-red" />
              <h2 className="text-3xl font-display font-bold text-charcoal">7. Shipping and Delivery</h2>
            </div>

            <h3 className="text-xl font-heading font-semibold text-charcoal mb-3">7.1 Shipping Areas</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We currently ship to addresses within the European Union. International shipping may be available for select destinations.
            </p>

            <h3 className="text-xl font-heading font-semibold text-charcoal mb-3 mt-6">7.2 Delivery Times</h3>
            <div className="bg-vintage-sepia/5 rounded-lg p-6 mb-4">
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong className="text-charcoal">Italy:</strong> 3-5 business days</li>
                <li><strong className="text-charcoal">EU Countries:</strong> 5-10 business days</li>
                <li><strong className="text-charcoal">International:</strong> 10-20 business days (where available)</li>
              </ul>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              These are estimated delivery times and may vary during peak seasons or due to circumstances beyond our control.
            </p>

            <h3 className="text-xl font-heading font-semibold text-charcoal mb-3 mt-6">7.3 Shipping Costs</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Shipping costs are calculated based on the destination and weight of your order. The exact cost will be displayed before you complete your purchase.
            </p>

            <h3 className="text-xl font-heading font-semibold text-charcoal mb-3 mt-6">7.4 Risk of Loss</h3>
            <p className="text-muted-foreground leading-relaxed">
              Risk of loss and title for products pass to you upon delivery to the carrier. We are not responsible for shipping delays caused by the carrier or customs.
            </p>
          </section>

          {/* Returns */}
          <section id="returns">
            <div className="flex items-center gap-3 mb-4">
              <RotateCcw className="w-6 h-6 text-coastal-blue" />
              <h2 className="text-3xl font-display font-bold text-charcoal">8. Returns and Right of Withdrawal</h2>
            </div>

            <h3 className="text-xl font-heading font-semibold text-charcoal mb-3">8.1 Right of Withdrawal (EU Consumer Rights)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In accordance with EU Consumer Rights Directive and Italian Consumer Code (Legislative Decree 206/2005), you have the right to withdraw from your purchase within <strong className="text-charcoal">14 days</strong> without giving any reason.
            </p>
            <div className="bg-coastal-blue/5 rounded-lg p-6 mb-4">
              <h4 className="font-heading font-semibold text-charcoal mb-2">Withdrawal Period</h4>
              <p className="text-sm text-muted-foreground mb-2">
                The 14-day period begins from the day you (or a third party designated by you) receive the goods.
              </p>
              <h4 className="font-heading font-semibold text-charcoal mb-2 mt-3">How to Exercise Your Right</h4>
              <p className="text-sm text-muted-foreground">
                To exercise your right of withdrawal, you must inform us of your decision by email to <a href="mailto:returns@costieracinema.com" className="text-coastal-blue hover:underline">returns@costieracinema.com</a> with a clear statement of your intention to withdraw.
              </p>
            </div>

            <h3 className="text-xl font-heading font-semibold text-charcoal mb-3 mt-6">8.2 Return Conditions</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To be eligible for a return, your item must be:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Unused and in the same condition as received</li>
              <li>In original packaging with all tags attached</li>
              <li>Returned within 14 days of receipt</li>
              <li>Accompanied by proof of purchase</li>
            </ul>

            <h3 className="text-xl font-heading font-semibold text-charcoal mb-3 mt-6">8.3 Return Shipping</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You are responsible for the cost of return shipping unless the product is defective or we made an error. We recommend using a trackable shipping method.
            </p>

            <h3 className="text-xl font-heading font-semibold text-charcoal mb-3 mt-6">8.4 Refunds</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Once we receive and inspect your return, we will notify you of the approval or rejection of your refund. If approved:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Refund will be processed within 14 days of receiving the returned item</li>
              <li>Original payment method will be credited</li>
              <li>Original shipping costs are non-refundable (unless the product was defective)</li>
            </ul>

            <h3 className="text-xl font-heading font-semibold text-charcoal mb-3 mt-6">8.5 Exceptions</h3>
            <p className="text-muted-foreground leading-relaxed">
              The following items cannot be returned:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Personalized or custom-made products</li>
              <li>Items marked as "Final Sale" or "Limited Edition"</li>
              <li>Gift cards</li>
            </ul>
          </section>

          {/* Defective Products */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-vintage-red" />
              <h2 className="text-3xl font-display font-bold text-charcoal">9. Defective Products and Warranties</h2>
            </div>

            <h3 className="text-xl font-heading font-semibold text-charcoal mb-3">9.1 Legal Guarantee</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In accordance with Italian Consumer Code (Articles 128-135), all products come with a 2-year legal guarantee against defects. If a product is defective:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>You may request repair or replacement</li>
              <li>If repair or replacement is not possible, you may request a price reduction or contract termination</li>
              <li>Defects appearing within 6 months of delivery are presumed to have existed at delivery</li>
            </ul>

            <h3 className="text-xl font-heading font-semibold text-charcoal mb-3 mt-6">9.2 Reporting Defects</h3>
            <p className="text-muted-foreground leading-relaxed">
              To report a defective product, contact us at <a href="mailto:support@costieracinema.com" className="text-coastal-blue hover:underline">support@costieracinema.com</a> within 2 months of discovering the defect.
            </p>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-3xl font-display font-bold text-charcoal mb-4">10. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              All content on our website, including text, graphics, logos, images, and software, is the property of Costiera Cinema or its licensors and is protected by Italian and international copyright laws.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You may not reproduce, distribute, modify, or create derivative works from our content without express written permission.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-3xl font-display font-bold text-charcoal mb-4">11. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To the maximum extent permitted by Italian law:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>We are not liable for indirect, incidental, or consequential damages</li>
              <li>Our total liability shall not exceed the amount paid for the product in question</li>
              <li>We are not liable for delays or failures due to circumstances beyond our control</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Nothing in these Terms limits our liability for death or personal injury caused by our negligence, fraud, or any liability that cannot be excluded by Italian law.
            </p>
          </section>

          {/* Privacy */}
          <section>
            <h2 className="text-3xl font-display font-bold text-charcoal mb-4">12. Privacy and Data Protection</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your personal data is processed in accordance with our Privacy Policy and applicable data protection laws including GDPR and Italian Legislative Decree 196/2003. Please review our <a href="/privacy" className="text-coastal-blue hover:underline">Privacy Policy</a> for detailed information.
            </p>
          </section>

          {/* Dispute Resolution */}
          <section>
            <h2 className="text-3xl font-display font-bold text-charcoal mb-4">13. Dispute Resolution</h2>

            <h3 className="text-xl font-heading font-semibold text-charcoal mb-3">13.1 Customer Service</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For any issues or complaints, please first contact our customer service at <a href="mailto:support@costieracinema.com" className="text-coastal-blue hover:underline">support@costieracinema.com</a>. We are committed to resolving disputes amicably.
            </p>

            <h3 className="text-xl font-heading font-semibold text-charcoal mb-3 mt-6">13.2 Online Dispute Resolution (ODR)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              EU consumers may access the European Commission's Online Dispute Resolution platform at: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-coastal-blue hover:underline">https://ec.europa.eu/consumers/odr</a>
            </p>

            <h3 className="text-xl font-heading font-semibold text-charcoal mb-3 mt-6">13.3 Jurisdiction</h3>
            <p className="text-muted-foreground leading-relaxed">
              Any disputes arising from these Terms shall be governed by Italian law and subject to the exclusive jurisdiction of the Italian courts. Consumers maintain the right to bring proceedings in the courts of their place of residence in accordance with EU regulations.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-3xl font-display font-bold text-charcoal mb-4">14. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of our services after changes constitutes acceptance of the modified Terms. We recommend reviewing these Terms periodically.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-3xl font-display font-bold text-charcoal mb-4">15. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For questions about these Terms and Conditions, please contact us:
            </p>
            <div className="bg-gradient-to-br from-vintage-sepia/10 to-coastal-blue/10 rounded-lg p-6">
              <p className="text-muted-foreground">
                <strong className="text-charcoal">Costiera Cinema</strong><br />
                <strong className="text-charcoal">Email:</strong> <a href="mailto:hello@costieracinema.com" className="text-coastal-blue hover:underline">hello@costieracinema.com</a><br />
                <strong className="text-charcoal">Customer Support:</strong> <a href="mailto:support@costieracinema.com" className="text-coastal-blue hover:underline">support@costieracinema.com</a><br />
                <strong className="text-charcoal">Returns:</strong> <a href="mailto:returns@costieracinema.com" className="text-coastal-blue hover:underline">returns@costieracinema.com</a>
              </p>
            </div>
          </section>

          {/* Severability */}
          <section>
            <h2 className="text-3xl font-display font-bold text-charcoal mb-4">16. Severability</h2>
            <p className="text-muted-foreground leading-relaxed">
              If any provision of these Terms is found to be invalid or unenforceable by a court, the remaining provisions will continue in full force and effect. The invalid provision will be modified to the minimum extent necessary to make it valid and enforceable.
            </p>
          </section>
        </div>

        {/* Bottom Notice */}
        <div className="mt-8 text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            These Terms and Conditions comply with Italian law and EU consumer protection regulations.
          </p>
          <p className="text-xs text-muted-foreground">
            By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms.
          </p>
        </div>
      </div>
    </main>
  );
}
