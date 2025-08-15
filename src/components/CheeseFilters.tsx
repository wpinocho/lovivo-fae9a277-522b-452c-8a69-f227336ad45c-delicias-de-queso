import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Filter } from 'lucide-react';

interface CheeseFiltersProps {
  selectedType: string;
  selectedOrigin: string;
  sortBy: string;
  onTypeChange: (type: string) => void;
  onOriginChange: (origin: string) => void;
  onSortChange: (sort: string) => void;
}

export const CheeseFilters: React.FC<CheeseFiltersProps> = ({
  selectedType,
  selectedOrigin,
  sortBy,
  onTypeChange,
  onOriginChange,
  onSortChange
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <div className="flex items-center space-x-2 mb-4">
        <Filter className="h-5 w-5 text-amber-600" />
        <h3 className="font-semibold text-gray-800">Filtros</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Queso</label>
          <Select value={selectedType} onValueChange={onTypeChange}>
            <SelectTrigger>
              <SelectValue placeholder="Todos los tipos" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos los tipos</SelectItem>
              <SelectItem value="fresco">Fresco</SelectItem>
              <SelectItem value="semicurado">Semicurado</SelectItem>
              <SelectItem value="curado">Curado</SelectItem>
              <SelectItem value="azul">Azul</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Origen</label>
          <Select value={selectedOrigin} onValueChange={onOriginChange}>
            <SelectTrigger>
              <SelectValue placeholder="Todos los orígenes" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos los orígenes</SelectItem>
              <SelectItem value="España">España</SelectItem>
              <SelectItem value="Francia">Francia</SelectItem>
              <SelectItem value="Italia">Italia</SelectItem>
              <SelectItem value="Holanda">Holanda</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Ordenar por</label>
          <Select value={sortBy} onValueChange={onSortChange}>
            <SelectTrigger>
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Nombre</SelectItem>
              <SelectItem value="price-low">Precio: Menor a Mayor</SelectItem>
              <SelectItem value="price-high">Precio: Mayor a Menor</SelectItem>
              <SelectItem value="intensity">Intensidad</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};