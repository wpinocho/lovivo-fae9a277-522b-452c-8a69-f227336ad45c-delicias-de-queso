import { Cheese } from '../types/cheese';

export const cheeses: Cheese[] = [
  {
    id: '1',
    name: 'Manchego Curado',
    description: 'Queso manchego con 12 meses de curación. Sabor intenso y textura firme.',
    price: 24.50,
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&h=300&fit=crop',
    origin: 'La Mancha, España',
    type: 'curado',
    intensity: 4,
    stock: 15
  },
  {
    id: '2',
    name: 'Cabrales',
    description: 'Queso azul asturiano de sabor fuerte y cremoso. Elaborado con leche de vaca, oveja y cabra.',
    price: 18.90,
    image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?w=400&h=300&fit=crop',
    origin: 'Asturias, España',
    type: 'azul',
    intensity: 5,
    stock: 8
  },
  {
    id: '3',
    name: 'Mozzarella Fresca',
    description: 'Mozzarella italiana fresca, perfecta para ensaladas y pizzas.',
    price: 8.75,
    image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400&h=300&fit=crop',
    origin: 'Italia',
    type: 'fresco',
    intensity: 1,
    stock: 25
  },
  {
    id: '4',
    name: 'Gouda Semicurado',
    description: 'Queso holandés semicurado con 6 meses de maduración. Sabor suave y cremoso.',
    price: 16.20,
    image: 'https://images.unsplash.com/photo-1634141510639-d691d86f47be?w=400&h=300&fit=crop',
    origin: 'Holanda',
    type: 'semicurado',
    intensity: 2,
    stock: 12
  },
  {
    id: '5',
    name: 'Roquefort',
    description: 'El rey de los quesos azules franceses. Cremoso y con un sabor único.',
    price: 22.80,
    image: 'https://images.unsplash.com/photo-1571197119282-7c4e2b2d7c6e?w=400&h=300&fit=crop',
    origin: 'Francia',
    type: 'azul',
    intensity: 5,
    stock: 6
  },
  {
    id: '6',
    name: 'Brie de Meaux',
    description: 'Queso francés de pasta blanda con corteza blanca. Cremoso y delicado.',
    price: 14.50,
    image: 'https://images.unsplash.com/photo-1559561853-08451507cbe7?w=400&h=300&fit=crop',
    origin: 'Francia',
    type: 'fresco',
    intensity: 2,
    stock: 18
  }
];