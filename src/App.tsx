/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, lazy, Suspense, useCallback, useMemo } from 'react';
import Background from './components/Background';
import CustomCursor from './components/CustomCursor';
import Nav from './components/Nav';
import Hero from './components/Hero';
import SectionAtelier from './components/SectionAtelier';
import SectionCatalog from './components/SectionCatalog';
import SectionResonance from './components/SectionResonance';
import LoadingScreen from './components/LoadingScreen';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { CartItem } from './types';

// Lazy loading below-the-fold components for better initial load performance
const SectionAbout = lazy(() => import('./components/SectionAbout'));
const SectionTimeline = lazy(() => import('./components/SectionTimeline'));
const SectionRelics = lazy(() => import('./components/SectionRelics'));
const SectionMaterials = lazy(() => import('./components/SectionMaterials'));
const SectionPhilosophy = lazy(() => import('./components/SectionPhilosophy'));
const SectionJewelry = lazy(() => import('./components/SectionJewelry'));
const SectionPress = lazy(() => import('./components/SectionPress'));
const SectionConcierge = lazy(() => import('./components/SectionConcierge'));
const SectionTestimonials = lazy(() => import('./components/SectionTestimonials'));
const SectionLocations = lazy(() => import('./components/SectionLocations'));
const SectionNewsletter = lazy(() => import('./components/SectionNewsletter'));

// Suspense fallback for lazy loaded sections
const SectionLoader = () => (
  <div className="w-full flex items-center justify-center min-h-[300px]">
    <div className="w-12 h-12 rounded-full border-t border-red-500 animate-spin opacity-50" />
  </div>
);

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = useCallback((product: Omit<CartItem, 'quantity'>) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  }, []);

  const handleOpenCart = useCallback(() => setIsCartOpen(true), []);
  const handleCloseCart = useCallback(() => setIsCartOpen(false), []);

  const cartItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const mainContent = useMemo(() => (
    <>
      <main className="w-full flex flex-col items-center pb-24 relative z-10 space-y-16 md:space-y-24">
        {/* Above the fold (eagerly loaded) */}
        <Hero />
        <SectionAtelier />
        <SectionCatalog addToCart={addToCart} />

        {/* Below the fold (lazy loaded) */}
        <Suspense fallback={<SectionLoader />}>
          <SectionAbout />
          <SectionTimeline />
          <SectionResonance />
          <SectionMaterials />
          <SectionRelics />
          <SectionJewelry />
          <SectionTestimonials />
          <SectionPress />
          <SectionConcierge />
          <SectionLocations />
          <SectionPhilosophy />
          <SectionNewsletter />
        </Suspense>
      </main>

      <Footer />
    </>
  ), [addToCart]);

  return (
    <div className="relative w-full h-full text-white cursor-none selection:bg-red-500/30 overflow-x-hidden">
      <LoadingScreen />
      <CustomCursor />
      <Background />
      
      {/* Global Black Vignette overlay for corners */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,black_100%)] pointer-events-none z-50 mix-blend-multiply" />
      
      <Nav 
        onOpenCart={handleOpenCart} 
        cartItemsCount={cartItemsCount} 
      />
      
      {mainContent}
      
      <Cart 
        isOpen={isCartOpen} 
        onClose={handleCloseCart} 
        cartItems={cartItems}
        onRemove={removeFromCart}
      />
    </div>
  );
}
