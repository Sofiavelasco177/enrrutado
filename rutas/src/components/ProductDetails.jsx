import { useLocation } from 'react-router-dom';
import './productDetails.css';


const products = [
  { id: 1, name: 'Teléfono Inteligente: Samsung Galaxy S23 Ultra', price: 1199, description: 'El Samsung Galaxy S23 Ultra es un teléfono premium de alta gama con pantalla Dynamic AMOLED de 6.8 pulgadas, procesador Snapdragon 8 Gen 2, y sistema de cámara cuádruple de 200 MP. Ofrece un rendimiento potente y una experiencia de cámara excelente, ideal para usuarios que buscan lo último en tecnología móvil.' },
  { id: 2, name: ' Laptop: MacBook Pro 14" con M2 Pro', price:1999 , description: 'La MacBook Pro de 14 pulgadas con el chip M2 Pro ofrece un rendimiento de nivel profesional en un diseño compacto. Es perfecta para edición de video, diseño gráfico y programación avanzada. Su batería de larga duración y su pantalla Retina de alta resolución hacen que esta MacBook sea ideal para profesionales en movimiento.' },
  { id: 3, name: 'Smartwatch: Garmin Fenix 7X Pro', price: 600, description: 'El Garmin Fenix 7X Pro es un reloj inteligente diseñado para entusiastas de la aventura y el deporte. Con GPS integrado, funciones avanzadas de entrenamiento, y una batería de larga duración, es ideal para excursionistas, corredores y ciclistas.' },
  { id: 4, name: 'Audífonos Inalámbricos: Sony WH-1000XM5', price: 1200, description:'Los Sony WH-1000XM5 son audífonos premium con cancelación activa de ruido líder en el mercado. Ofrecen un sonido de alta calidad y una comodidad excepcional para largas sesiones de escucha. Son ideales para aquellos que buscan la mejor experiencia de audio en un diseño ligero y plegable.'},
];


function ProductDetails() {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const productId = parseInt(query.get('id'), 10);
  const product = products.find(p => p.id === productId);
  console.log(productId)
  console.log(product)
  /* 
  if (!product) { 
    return <h2>Producto no encontrado</h2>;
  } 
  */
  return (
    <div className='product-details-container'>
      <h2 className='product-details-title'>{product.name}</h2>
      <p className='product-details-price'>Precio: ${product.price}</p>
      <p className='product-details-description'>{product.description}</p>
    </div>
  );
}

export default ProductDetails;
