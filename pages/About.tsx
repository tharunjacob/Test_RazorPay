import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-slate-700">
        <p className="text-base font-semibold leading-7 text-brand-600">About Us</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Empowering financial clarity through Spreadsheets.</h1>
        <p className="mt-6 text-xl leading-8">
          TrackSpendz is a design-first financial services company. We believe that the best budgeting tool is one you own completely—like an Excel file.
        </p>
        <div className="mt-10 max-w-2xl">
          <p>
            We started as a group of Excel enthusiasts who were tired of subscription-based finance apps that held data hostage. We realized that with the right design, a spreadsheet could be just as powerful as an app, but with zero privacy risks.
          </p>
          <p className="mt-6">
            Our mission is to provide beautiful, functional, and automated Excel templates that make budgeting a joy, not a chore. We also offer custom development services for those with unique financial tracking needs.
          </p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-slate-900">Our Services</h2>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-slate-600">
            <li className="flex gap-x-3">
              <span><strong className="font-semibold text-slate-900">Template Design.</strong> We sell pre-made, high-quality Excel templates for personal finance.</span>
            </li>
            <li className="flex gap-x-3">
              <span><strong className="font-semibold text-slate-900">Custom Development.</strong> We build bespoke financial models and dashboards for clients who need specific tracking logic.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};