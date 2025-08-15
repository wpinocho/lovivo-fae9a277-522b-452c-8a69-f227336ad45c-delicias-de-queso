import React from 'react';
import { ShoppingCart, Store } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { CartDialog } from './CartDialog';

export const Header: React.FC = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <header className="bg-amber-50 border-b border-amber-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Store className="h-8 w-8 text-amber-600" />
            <h1 className="text-2xl font-bold text-amber-800">La Quesería</h1>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <a href="#inicio" className="text-amber-700 hover:text-amber-900 font-medium">
              Inicio
            </a>
            <a href="#productos" className="text-amber-700 hover:text-amber-900 font-medium">
              Productos
            </a>
            <a href="#sobre-nosotros" className="text-amber-700 hover:text-amber-900 font-medium">
              Sobre Nosotros
            </a>
          </nav>

          <CartDialog>
            <button className="relative p-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors">
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </CartDialog>
        </div>
      </div>
    </header>
  );
};