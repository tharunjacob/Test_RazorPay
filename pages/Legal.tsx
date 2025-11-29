import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const LegalLayout: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div className="mx-auto max-w-3xl text-base leading-7 text-slate-700">
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-8">{title}</h1>
      {children}
    </div>
  </div>
);

export const Privacy: React.FC = () => (
  <LegalLayout title="Privacy Policy">
    <p>Last updated: October 26, 2024</p>
    <h3 className="mt-8 text-xl font-bold text-slate-900">1. Introduction</h3>
    <p className="mt-4">
      TrackSpendz ("we", "us", or "our") respects the privacy of our users. This Privacy Policy explains how we collect and use your information when you purchase our digital products or services.
    </p>
    <h3 className="mt-8 text-xl font-bold text-slate-900">2. Collection of Data</h3>
    <p className="mt-4">
      We collect information you provide directly to us during the purchase process, specifically your name, email address, and billing details. This is solely for the purpose of delivering the digital product (Excel Template) to your inbox and generating invoices.
    </p>
    <h3 className="mt-8 text-xl font-bold text-slate-900">3. Use of Your Information</h3>
    <p className="mt-4">
      We use your email address to send you the purchased files and any updates to the templates. We do not sell your personal data to third parties.
    </p>
    <h3 className="mt-8 text-xl font-bold text-slate-900">4. Contact Us</h3>
    <p className="mt-4">
      If you have questions or comments about this Privacy Policy, please contact us at: support@trackspendz.com
    </p>
  </LegalLayout>
);

export const Terms: React.FC = () => (
  <LegalLayout title="Terms and Conditions">
    <p>Last updated: October 26, 2024</p>
    <h3 className="mt-8 text-xl font-bold text-slate-900">1. Agreement to Terms</h3>
    <p className="mt-4">
      These Terms and Conditions constitute a legally binding agreement made between you and TrackSpendz concerning your purchase of digital Excel templates and custom dashboard services.
    </p>
    <h3 className="mt-8 text-xl font-bold text-slate-900">2. Nature of Products & Services</h3>
    <p className="mt-4">
      <strong>Products:</strong> We provide downloadable Excel templates. These are digital files delivered via email.<br/>
      <strong>Services:</strong> We provide "Custom Dashboard Design" services where we build specific spreadsheets based on user requirements. This is a "sale as a service" model.
    </p>
    <p className="mt-4">
      We are not financial advisors. Our templates are tools for budgeting and do not constitute professional financial advice. You are responsible for the accuracy of data entered into the templates.
    </p>
    <h3 className="mt-8 text-xl font-bold text-slate-900">3. License</h3>
    <p className="mt-4">
      Upon purchase of a template, you are granted a non-exclusive, non-transferable license to use the Excel template for personal or internal business use. Reselling or redistributing the templates is strictly prohibited.
    </p>
  </LegalLayout>
);

export const Refund: React.FC = () => (
  <LegalLayout title="Refund and Cancellation Policy">
    <h3 className="mt-8 text-xl font-bold text-slate-900">1. Template Purchases</h3>
    <p className="mt-4">
      Due to the digital nature of our Excel templates, we generally do not offer refunds once the file has been downloaded or emailed. However, if the file is corrupt or materially different from the description, please contact us within 7 days for a replacement or refund.
    </p>
    <h3 className="mt-8 text-xl font-bold text-slate-900">2. Custom Services</h3>
    <p className="mt-4">
      For custom dashboard services, a refund may be requested if we fail to deliver the agreed-upon scope of work within the specified timeline (3-5 business days). Cancellation requests must be made before the design work begins. Once work has commenced, a cancellation fee may apply.
    </p>
    <h3 className="mt-8 text-xl font-bold text-slate-900">3. Contact</h3>
    <p className="mt-4">
      For any billing related queries, please email us at support@trackspendz.com.
    </p>
  </LegalLayout>
);

export const Shipping: React.FC = () => (
  <LegalLayout title="Shipping & Delivery Policy">
    <p>Last updated: October 26, 2024</p>
    <p className="mt-4">
      TrackSpendz provides purely digital products (Excel files) and design services. Therefore, <strong>no physical shipping is involved</strong>.
    </p>
    <h3 className="mt-8 text-xl font-bold text-slate-900">1. Delivery of Templates (Instant)</h3>
    <p className="mt-4">
      Upon successful payment for a "Starter Template" or any other pre-made digital file:
    </p>
    <ul className="list-disc pl-5 mt-4 space-y-2">
      <li><strong>Delivery Method:</strong> Email.</li>
      <li><strong>Timeline:</strong> Immediate (Automated email within 15 minutes of purchase).</li>
      <li><strong>Format:</strong> Downloadable .xlsx file link sent to your registered email address.</li>
    </ul>

    <h3 className="mt-8 text-xl font-bold text-slate-900">2. Delivery of Custom Services (3-5 Days)</h3>
    <p className="mt-4">
      For "Custom Dashboard Services", the delivery timeline is as follows:
    </p>
    <ul className="list-disc pl-5 mt-4 space-y-2">
      <li><strong>Delivery Method:</strong> Email.</li>
      <li><strong>Timeline:</strong> 3-5 business days from the date of receiving your complete requirements.</li>
      <li><strong>Process:</strong> We will email you the initial draft for review. Final delivery occurs after your approval.</li>
    </ul>

    <h3 className="mt-8 text-xl font-bold text-slate-900">3. Contact Information</h3>
    <p className="mt-4">
      If you do not receive your product link within the specified time, please check your spam folder or contact us immediately at <a href="mailto:support@trackspendz.com" className="text-brand-600">support@trackspendz.com</a>.
    </p>
  </LegalLayout>
);

// Wrapper to scroll top on route change
export const LegalWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return <>{children}</>;
};