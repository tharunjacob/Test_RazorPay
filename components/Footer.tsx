import React from 'react';
import { Link } from 'react-router-dom';
import { Wallet, Twitter, Linkedin, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Wallet className="h-6 w-6 text-brand-500" />
              <span className="font-bold text-xl text-white">TrackSpendz</span>
            </Link>
            <p className="text-sm text-slate-400">
              Professional Excel templates and custom spreadsheet services for personal finance.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Product</h3>
            <ul className="space-y-3">
              <li><Link to="/features" className="hover:text-brand-400 text-sm">Features</Link></li>
              <li><Link to="/pricing" className="hover:text-brand-400 text-sm">Templates</Link></li>
              <li><Link to="/about" className="hover:text-brand-400 text-sm">About Us</Link></li>
              <li><Link to="/login" className="hover:text-brand-400 text-sm">Login</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link to="/privacy" className="hover:text-brand-400 text-sm">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-brand-400 text-sm">Terms & Conditions</Link></li>
              <li><Link to="/refund" className="hover:text-brand-400 text-sm">Refund Policy</Link></li>
              <li><Link to="/shipping" className="hover:text-brand-400 text-sm">Shipping Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-sm">support@trackspendz.com</li>
              <li className="text-sm">+91 94473 20320 (Mon-Fri)</li>
              <li className="text-sm">
                United Elysiym 2, Channasandra,<br />
                Bangalore, KA 560067, India
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-brand-400"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-brand-400"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="hover:text-brand-400"><Facebook className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} TrackSpendz Technologies Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};