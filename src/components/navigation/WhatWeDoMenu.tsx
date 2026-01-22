import { MegaMenuCard } from './MegaMenuCard';
import { Building2, Home, Train, Handshake, Wallet } from 'lucide-react';

const menuItems = [
  {
    title: 'Mega City Development',
    description: 'Integrated urban development and smart city planning at national scale.',
    href: '/what-we-do/mega-cities',
    icon: Building2,
  },
  {
    title: 'Housing at Scale',
    description: 'National housing programs and veteran workforce initiatives.',
    href: '/what-we-do/housing',
    icon: Home,
  },
  {
    title: 'National Infrastructure',
    description: 'Transport, energy, water, and digital infrastructure programs.',
    href: '/what-we-do/infrastructure',
    icon: Train,
  },
  {
    title: 'Public–Private Partnerships',
    description: 'BOT, PPP, and structured delivery models for sovereign projects.',
    href: '/what-we-do/ppp',
    icon: Handshake,
  },
  {
    title: 'Development Finance',
    description: 'Capital orchestration and sovereign-compliant financing frameworks.',
    href: '/what-we-do/finance',
    icon: Wallet,
  },
];

export const WhatWeDoMenu = () => {
  return (
    <div>
      <div className="mb-6">
        <span className="text-xs uppercase tracking-[0.2em] text-accent">
          Development Mandate
        </span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {menuItems.map((item) => (
          <MegaMenuCard
            key={item.title}
            title={item.title}
            description={item.description}
            href={item.href}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};
