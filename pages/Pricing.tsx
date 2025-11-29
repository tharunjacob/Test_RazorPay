import React, { useState } from 'react';
import { Check, Mail } from 'lucide-react';
import { Button } from '../components/Button';
import { Region } from '../types';

const tiers = [
  {
    name: 'Starter Template',
    id: 'tier-template',
    price: { INDIA: '₹999', GLOBAL: '$19' },
    period: 'one-time',
    description: 'The ultimate Excel budget dashboard. Download immediately after payment.',
    features: [
      'Instant Email Delivery',
      'Income & Expense Tracker',
      'Monthly Dashboard View',
      'Net Worth Tracker',
      'Lifetime Usage License',
      'PDF Instruction Guide'
    ],
    mostPopular: true,
  },
  {
    name: 'Custom Service',
    id: 'tier-service',
    price: { INDIA: '₹4,999', GLOBAL: '$99' },
    period: 'starting from',
    description: 'A dedicated design service where we build a bespoke Excel dashboard tailored to your needs.',
    features: [
      'Consultation Call',
      'Custom Financial Logic',
      'Business Expense Integration',
      'Advanced Macros/VBA',
      'Branded Design',
      'Delivery in 3-5 Business Days'
    ],
    mostPopular: false,
  },
];

export const Pricing: React.FC = () => {
  const [region, setRegion] = useState<Region>(Region.INDIA);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-brand-600">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Simple, Transparent Pricing
          </p>
        </div>
        
        <div className="mt-8 flex justify-center">
          <div className="relative flex rounded-full bg-slate-100 p-1">
            <button
              onClick={() => setRegion(Region.INDIA)}
              className={`${
                region === Region.INDIA ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500 hover:text-slate-900'
              } relative rounded-full px-4 py-1.5 text-sm font-semibold transition focus:outline-none`}
            >
              India (INR)
            </button>
            <button
              onClick={() => setRegion(Region.GLOBAL)}
              className={`${
                region === Region.GLOBAL ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500 hover:text-slate-900'
              } relative rounded-full px-4 py-1.5 text-sm font-semibold transition focus:outline-none`}
            >
              International (USD)
            </button>
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-slate-600">
          Choose between our ready-to-use template or our premium custom design service.
        </p>

        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-x-8 xl:gap-x-12">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-3xl p-8 ring-1 xl:p-10 ${
                tier.mostPopular
                  ? 'bg-brand-50 ring-brand-500'
                  : 'ring-slate-200 hover:ring-slate-300'
              }`}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id={tier.id}
                  className={`text-lg font-semibold leading-8 ${
                    tier.mostPopular ? 'text-brand-600' : 'text-slate-900'
                  }`}
                >
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full bg-brand-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-brand-600">
                    Best Value
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-slate-900">
                  {tier.price[region]}
                </span>
                {tier.period && <span className="text-sm font-semibold leading-6 text-slate-600">/{tier.period}</span>}
              </p>
              <Button
                variant={tier.mostPopular ? 'primary' : 'outline'}
                className="mt-6 w-full"
                aria-describedby={tier.id}
              >
                {tier.name === 'Starter Template' ? 'Buy Template' : 'Request Custom Quote'}
              </Button>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-slate-600">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check className="h-6 w-5 flex-none text-brand-600" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center text-sm text-slate-500">
          <p>Secure payment via Razorpay. Templates are delivered via email immediately after purchase.</p>
        </div>
      </div>
    </div>
  );
};