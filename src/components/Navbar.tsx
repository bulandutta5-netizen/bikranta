import { motion } from 'motion/react';
import { Menu, X, Dumbbell } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <Dumbbell className="h-8 w-8 text-emerald-500" />
            <span className="text-white text-2xl font-bold tracking-tighter uppercase">
              Shape of You
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['Home', 'Features', 'Classes', 'Pricing'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-emerald-500 transition-colors px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wider"
                >
                  {item}
                </a>
              ))}
              <button className="bg-emerald-500 hover:bg-emerald-600 text-black font-bold py-2 px-6 rounded-full transition-colors uppercase tracking-wider text-sm">
                Join Now
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black border-b border-white/10"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Home', 'Features', 'Classes', 'Pricing'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-emerald-500 block px-3 py-2 rounded-md text-base font-medium uppercase"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="w-full mt-4 bg-emerald-500 hover:bg-emerald-600 text-black font-bold py-3 px-6 rounded-md transition-colors uppercase tracking-wider">
              Join Now
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
