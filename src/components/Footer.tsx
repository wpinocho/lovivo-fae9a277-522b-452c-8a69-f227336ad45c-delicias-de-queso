import React from 'react';
import { Store, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Store className="h-6 w-6 text-amber-400" />
              <h3 className="text-xl font-bold">La Quesería</h3>
            </div>
            <p className="text-gray-300">
              Tu tienda de confianza para los mejores quesos artesanales de Europa.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-300 hover:text-amber-400">Inicio</a></li>
              <li><a href="#productos" className="text-gray-300 hover:text-amber-400">Productos</a></li>
              <li><a href="#sobre-nosotros" className="text-gray-300 hover:text-amber-400">Sobre Nosotros</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Categorías</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Quesos Frescos</span></li>
              <li><span className="text-gray-300">Quesos Curados</span></li>
              <li><span className="text-gray-300">Quesos Azules</span></li>
              <li><span className="text-gray-300">Quesos Semicurados</span></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-amber-400" />
                <span className="text-gray-300">info@laqueseria.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-amber-400" />
                <span className="text-gray-300">+34 123 456 789</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-amber-400" />
                <span className="text-gray-300">Madrid, España</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 La Quesería. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};