import React from 'react';
import { Link } from 'react-router-dom';
import './product.css';


const products = [
  { id: 1, name: 'Teléfono Inteligente' },
  { id: 2, name: 'Laptop'},
  { id: 3, name: 'Smartwatch' },
  { id: 4, name: 'Audífonos Inalámbricos'},
  
];

function Products() {
  return (
    <div className='products-container'>
      <h2 className='products-title'>Lista de Productos</h2>
      <ul className='products-list'>
        {products.map(product => (
          <li key={product.id} className='product-item"'>
            <Link to={`/producto/details?id=${product.id}`}>
              {product.name} - ${product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;