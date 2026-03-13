/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Classes from './components/Classes';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-emerald-500 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Classes />
        <Pricing />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
