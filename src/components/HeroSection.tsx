import React from 'react';
import { ChefHat, Award, Truck } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section id="inicio" className="bg-gradient-to-br from-amber-50 to-yellow-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Bienvenido a La Quesería
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra selección de quesos artesanales de la más alta calidad, 
            cuidadosamente seleccionados de las mejores queserías de Europa.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-amber-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <ChefHat className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Artesanales</h3>
            <p className="text-gray-600">
              Quesos elaborados siguiendo métodos tradicionales por maestros queseros.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-amber-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Calidad Premium</h3>
            <p className="text-gray-600">
              Seleccionamos solo los mejores quesos con denominación de origen.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-amber-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Truck className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Envío Rápido</h3>
            <p className="text-gray-600">
              Entrega en 24-48h con embalaje especial para mantener la frescura.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <a
            href="#productos"
            className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-amber-700 transition-colors"
          >
            Ver Productos
          </a>
        </div>
      </div>
    </section>
  );
};