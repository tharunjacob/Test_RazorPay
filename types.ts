export interface PricingPlan {
  name: string;
  priceINR: string;
  priceUSD: string;
  features: string[];
  recommended?: boolean;
}

export enum Region {
  INDIA = 'INDIA',
  GLOBAL = 'GLOBAL'
}

export interface ExpenseTip {
  category: string;
  tips: string[];
}

export interface NavItem {
  label: string;
  path: string;
}