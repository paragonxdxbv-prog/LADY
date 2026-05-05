/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Background from './components/Background';
import CustomCursor from './components/CustomCursor';
import Nav from './components/Nav';
import Hero from './components/Hero';
import SectionAtelier from './components/SectionAtelier';
import SectionResonance from './components/SectionResonance';
import SectionRelics from './components/SectionRelics';
import SectionLookbook from './components/SectionLookbook';
import SectionEditorial from './components/SectionEditorial';
import SectionArchive from './components/SectionArchive';
import SectionNewsletter from './components/SectionNewsletter';
import SectionRunway from './components/SectionRunway';
import SectionPresence from './components/SectionPresence';
import SectionMaterials from './components/SectionMaterials';
import SectionPhilosophy from './components/SectionPhilosophy';
import SectionCatalog from './components/SectionCatalog';
import SectionJewelry from './components/SectionJewelry';
import LoadingScreen from './components/LoadingScreen';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { CartItem } from './types';

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: any) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="relative w-full h-full text-white cursor-none selection:bg-red-500/30 overflow-x-hidden">
      <LoadingScreen />
      <CustomCursor />
      <Background />
      
      <Nav 
        onOpenCart={() => setIsCartOpen(true)} 
        cartItemsCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)} 
      />
      
      <main className="w-full flex flex-col items-center pb-24 relative z-10 space-y-16 md:space-y-24">
        <Hero />
        <SectionAtelier />
        <SectionResonance addToCart={addToCart} />
        <SectionMaterials />
        <SectionRunway />
        <SectionRelics addToCart={addToCart} />
        <SectionEditorial />
        <SectionLookbook />
        <SectionArchive />
        <SectionJewelry />
        <SectionCatalog addToCart={addToCart} />
        <SectionNewsletter />
        <SectionPhilosophy />
        <SectionPresence />
      </main>

      <Footer />
      
      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cartItems}
        onRemove={removeFromCart}
      />
    </div>
  );
}
