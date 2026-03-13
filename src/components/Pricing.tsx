import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Basic',
    href: '#',
    priceMonthly: 39,
    description: 'All the basics for starting a new chapter.',
    features: ['Access to gym equipment', 'Locker room access', 'Free weights area', '1 Guest pass per month'],
  },
  {
    name: 'Pro',
    href: '#',
    priceMonthly: 59,
    description: 'A plan that scales with your rapidly growing fitness.',
    features: [
      'Everything in Basic',
      'Unlimited group classes',
      'Sauna & Spa access',
      'Personalized workout plan',
      '4 Guest passes per month',
    ],
  },
  {
    name: 'Elite',
    href: '#',
    priceMonthly: 99,
    description: 'Dedicated support and infrastructure for your peak performance.',
    features: [
      'Everything in Pro',
      '2 Personal training sessions/mo',
      'Nutrition consultation',
      'Priority class booking',
      'Unlimited guest passes',
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center text-center">
          <h2 className="text-base text-emerald-500 font-semibold tracking-wide uppercase">Pricing</h2>
          <p className="mt-2 text-4xl font-black text-white tracking-tight sm:text-5xl uppercase">
            Choose Your Plan
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto font-light">
            No hidden fees. No long-term contracts. Just results.
          </p>
        </div>
        <div className="mt-20 space-y-4 sm:mt-24 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-3xl p-8 xl:p-10 ${
                tier.name === 'Pro' 
                  ? 'bg-emerald-500 text-black ring-2 ring-emerald-500 scale-105 z-10' 
                  : 'bg-zinc-900 border border-white/10 text-white'
              }`}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3 id={tier.name} className={`text-2xl font-bold uppercase tracking-wide ${tier.name === 'Pro' ? 'text-black' : 'text-white'}`}>
                  {tier.name}
                </h3>
                {tier.name === 'Pro' && (
                  <p className="rounded-full bg-black/10 px-2.5 py-1 text-xs font-semibold leading-5 text-black uppercase tracking-wider">
                    Most popular
                  </p>
                )}
              </div>
              <p className={`mt-4 text-sm leading-6 ${tier.name === 'Pro' ? 'text-black/80' : 'text-gray-400'}`}>
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className={`text-5xl font-black tracking-tight ${tier.name === 'Pro' ? 'text-black' : 'text-white'}`}>${tier.priceMonthly}</span>
                <span className={`text-sm font-semibold leading-6 ${tier.name === 'Pro' ? 'text-black/80' : 'text-gray-400'}`}>/month</span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.name}
                className={`mt-6 block rounded-xl py-3 px-3 text-center text-sm font-bold uppercase tracking-wider leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors ${
                  tier.name === 'Pro'
                    ? 'bg-black text-white hover:bg-zinc-800 focus-visible:outline-black'
                    : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white'
                }`}
              >
                Get Started
              </a>
              <ul role="list" className={`mt-8 space-y-3 text-sm leading-6 xl:mt-10 ${tier.name === 'Pro' ? 'text-black/80' : 'text-gray-400'}`}>
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check className={`h-6 w-5 flex-none ${tier.name === 'Pro' ? 'text-black' : 'text-emerald-500'}`} aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
