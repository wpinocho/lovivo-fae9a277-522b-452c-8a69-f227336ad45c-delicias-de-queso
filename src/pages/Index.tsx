import React from 'react';
import { CartProvider } from '../contexts/CartContext';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { CheeseStore } from '../components/CheeseStore';
import { Footer } from '../components/Footer';

const Index = () => {
  console.log('Rendering Index page');
  
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <HeroSection />
          <CheeseStore />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Index;