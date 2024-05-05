export const color = [
  'white',
  'black',
  'red',
  'marun',
  'Being',
  'Pink',
  'Green',
  'Yellow',
];
export const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White' },
      { value: 'beige', label: 'Beige' },
      { value: 'blue', label: 'Blue' },
      { value: 'brown', label: 'Brown' },
      { value: 'green', label: 'Green' },
      { value: 'purple', label: 'Purple' },
      { value: 'yellow', label: 'Yellow' },
      { value: 'black', label: 'Black' },
    ],
  },
  {
    id: 'size',
    name: 'Size',
    options: [
      { value: 'S', label: 'S' },
      { value: 'M', label: 'M' },
      { value: 'L', label: 'L' },
    ],
  },
];

export const singleFilter = [
  {
    id: 'price',
    name: 'Price',
    options: [
      { value: '159-399', label: 'RS 159 to RS 399' },
      { value: '399-999', label: 'RS 399 to RS 999' },
      { value: '999-1999', label: 'RS 999 to RS 1999' },
      { value: '1999-2999', label: 'RS 1999 to RS 2999' },
      { value: '2999-3999', label: 'RS 2999 to RS 3999' },
    ],
  },
  {
    id: 'discount',
    name: 'DISCOUNT RANGE',
    options: [
      { value: '10', label: '10% And Above' },
      { value: '20', label: '20% And Above' },
      { value: '30', label: '30% And Above' },
      { value: '40', label: '40% And Above' },
      { value: '50', label: '50% And Above' },
      { value: '60', label: '60% And Above' },
    ],
  },
  {
    id: 'stock',
    name: 'Availability',
    options: [
      { value: 'in_stock', label: 'In Stock' },
      { value: 'out_of_stock', label: 'Out Of Stock' },
    ],
  },
];
export const sortOptions = [
  { name: 'Price: Low to High', query: 'price_low', current: false },
  { name: 'Price High to Low', query: 'price_high', current: false },
];
