import React, { useState, useMemo } from 'react';
import { cheeses } from '../data/cheeses';
import { CheeseCard } from './CheeseCard';
import { CheeseFilters } from './CheeseFilters';
import { Cheese } from '../types/cheese';

export const CheeseStore: React.FC = () => {
  const [selectedType, setSelectedType] = useState('all');
  const [selectedOrigin, setSelectedOrigin] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const filteredAndSortedCheeses = useMemo(() => {
    console.log('Filtering cheeses with:', { selectedType, selectedOrigin, sortBy });
    
    let filtered = cheeses.filter((cheese: Cheese) => {
      const typeMatch = selectedType === 'all' || cheese.type === selectedType;
      const originMatch = selectedOrigin === 'all' || cheese.origin.includes(selectedOrigin);
      return typeMatch && originMatch;
    });

    // Ordenar
    filtered.sort((a: Cheese, b: Cheese) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'intensity':
          return b.intensity - a.intensity;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [selectedType, selectedOrigin, sortBy]);

  return (
    <section id="productos" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Nuestros Quesos Artesanales
        </h2>
        
        <CheeseFilters
          selectedType={selectedType}
          selectedOrigin={selectedOrigin}
          sortBy={sortBy}
          onTypeChange={setSelectedType}
          onOriginChange={setSelectedOrigin}
          onSortChange={setSortBy}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAndSortedCheeses.map((cheese) => (
            <CheeseCard key={cheese.id} cheese={cheese} />
          ))}
        </div>
        
        {filteredAndSortedCheeses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No se encontraron quesos con los filtros seleccionados.</p>
          </div>
        )}
      </div>
    </section>
  );
};