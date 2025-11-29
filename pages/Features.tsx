import React from 'react';
import { FileSpreadsheet, Lock, Edit3, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

export const Features: React.FC = () => {
  const features = [
    {
      name: 'Offline & Secure',
      description: 'Your financial data stays on your device. Since our product is an Excel file, you don\'t need to share bank credentials or upload data to the cloud.',
      icon: Lock,
    },
    {
      name: 'Lifetime Access',
      description: 'Say goodbye to monthly subscriptions. Buy the template once and use it forever. Updates included for the first year.',
      icon: Download,
    },
    {
      name: 'Fully Customizable',
      description: 'Need an extra column? Want to change the currency? It is Excel! You have complete freedom to modify the spreadsheet.',
      icon: Edit3,
    },
    {
      name: 'Professional Dashboards',
      description: 'Pre-built pivot tables and charts give you instant insights into your spending habits without needing to be an Excel wizard.',
      icon: FileSpreadsheet,
    },
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-brand-600">The Excel Advantage</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Why use a spreadsheet?
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Apps come and go, but Excel is forever. Our templates combine the power of professional financial modeling with the simplicity you need for personal budgeting.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-slate-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-slate-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        
        <div className="mt-16 flex justify-center">
           <Link to="/pricing">
              <Button size="lg">View Template Packs</Button>
           </Link>
        </div>
      </div>
    </div>
  );
};