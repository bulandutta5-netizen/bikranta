import { motion } from 'motion/react';
import { Dumbbell, HeartPulse, Trophy, Users } from 'lucide-react';

const features = [
  {
    name: 'Premium Equipment',
    description: 'Access to top-tier machines and free weights for all your strength training needs.',
    icon: Dumbbell,
  },
  {
    name: 'Expert Trainers',
    description: 'Certified professionals dedicated to helping you reach your fitness goals safely.',
    icon: Trophy,
  },
  {
    name: 'Group Classes',
    description: 'High-energy group sessions including HIIT, Yoga, Spin, and more.',
    icon: Users,
  },
  {
    name: 'Cardio Zone',
    description: 'State-of-the-art treadmills, ellipticals, and rowers with personal screens.',
    icon: HeartPulse,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-emerald-500 font-semibold tracking-wide uppercase">Why Choose Us</h2>
          <p className="mt-2 text-4xl font-black text-white tracking-tight sm:text-5xl uppercase">
            Everything You Need
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto font-light">
            We provide the best facilities and support to ensure you get the most out of every workout.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-zinc-900 p-8 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-colors group"
              >
                <div className="absolute -top-6 left-8">
                  <span className="inline-flex items-center justify-center p-4 bg-emerald-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6 text-black" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide">{feature.name}</h3>
                  <p className="mt-4 text-base text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
