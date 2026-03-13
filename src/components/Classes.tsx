import { motion } from 'motion/react';

const classes = [
  {
    name: 'HIIT Burn',
    time: 'Mon, Wed, Fri - 6:00 AM',
    trainer: 'Sarah Jenkins',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop',
  },
  {
    name: 'Powerlifting',
    time: 'Tue, Thu - 5:30 PM',
    trainer: 'Mike Tyson',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
  },
  {
    name: 'Vinyasa Yoga',
    time: 'Daily - 7:00 AM',
    trainer: 'Emma Stone',
    image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop',
  },
];

export default function Classes() {
  return (
    <section id="classes" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-base text-emerald-500 font-semibold tracking-wide uppercase">Our Classes</h2>
            <p className="mt-2 text-4xl font-black text-white tracking-tight sm:text-5xl uppercase">
              Find Your Fit
            </p>
          </div>
          <button className="text-emerald-500 hover:text-emerald-400 font-semibold uppercase tracking-wider flex items-center gap-2">
            View Full Schedule &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {classes.map((cls, index) => (
            <motion.div
              key={cls.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5]"
            >
              <img
                src={cls.image}
                alt={cls.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold text-white uppercase tracking-wide mb-2">{cls.name}</h3>
                <div className="space-y-1">
                  <p className="text-emerald-400 font-medium text-sm uppercase tracking-wider">{cls.time}</p>
                  <p className="text-gray-300 text-sm">with {cls.trainer}</p>
                </div>
                <button className="mt-6 w-full bg-white/10 hover:bg-emerald-500 text-white hover:text-black backdrop-blur-sm font-bold py-3 px-4 rounded-xl transition-all uppercase tracking-wider text-sm border border-white/20 hover:border-transparent">
                  Book Class
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
