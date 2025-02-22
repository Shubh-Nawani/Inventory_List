import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Get() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/products')
      .then(response => setProducts(response.data))
      .catch(err => console.error(err.message));
  }, []);

  return (
    <div>
      <h1>Get Page</h1>
      <Link to="/">Go to Add Page</Link>

      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <h4 key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.desc}</p>
            <p>Price: ${product.price}</p>
            <p>Stock: {product.stock}</p>
          </h4>
        ))}
      </ul>
    </div>
  );
}

export default Get;