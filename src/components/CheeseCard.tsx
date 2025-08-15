import React, { useState } from 'react';
import { Plus, Minus, ShoppingCart, MapPin, Star } from 'lucide-react';
import { Cheese } from '../types/cheese';
import { useCart } from '../contexts/CartContext';

interface CheeseCardProps {
  cheese: Cheese;
}

export const CheeseCard: React.FC<CheeseCardProps> = ({ cheese }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    console.log('Adding cheese to cart:', cheese.name);
    addToCart(cheese, quantity);
    setQuantity(1);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'fresco': return 'bg-green-100 text-green-800';
      case 'semicurado': return 'bg-yellow-100 text-yellow-800';
      case 'curado': return 'bg-orange-100 text-orange-800';
      case 'azul': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const renderStars = (intensity: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < intensity ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={cheese.image}
          alt={cheese.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(cheese.type)}`}>
            {cheese.type.charAt(0).toUpperCase() + cheese.type.slice(1)}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{cheese.name}</h3>
        
        <div className="flex items-center space-x-1 mb-2">
          <MapPin className="h-4 w-4 text-gray-500" />
          <span className="text-sm text-gray-600">{cheese.origin}</span>
        </div>
        
        <div className="flex items-center space-x-1 mb-3">
          <span className="text-sm text-gray-600 mr-2">Intensidad:</span>
          <div className="flex space-x-1">
            {renderStars(cheese.intensity)}
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{cheese.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-amber-600">€{cheese.price.toFixed(2)}</span>
          <span className="text-sm text-gray-500">Stock: {cheese.stock}</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="flex items-center border border-gray-300 rounded-lg">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-2 hover:bg-gray-100 transition-colors"
              disabled={quantity <= 1}
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="px-4 py-2 font-medium">{quantity}</span>
            <button
              onClick={() => setQuantity(Math.min(cheese.stock, quantity + 1))}
              className="p-2 hover:bg-gray-100 transition-colors"
              disabled={quantity >= cheese.stock}
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
          
          <button
            onClick={handleAddToCart}
            disabled={cheese.stock === 0}
            className="flex-1 bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            <ShoppingCart className="h-4 w-4" />
            <span>{cheese.stock === 0 ? 'Sin Stock' : 'Añadir'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};