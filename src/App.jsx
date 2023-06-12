import React, { useEffect, useState } from 'react';
import './App.css';

const getProducts = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const images = {
  0: 'https://specs-tech.com/wp-content/uploads/2020/01/iPhone-9.jpg',
  1: 'https://www.discoazul.com/uploads/media/images/apple-iphone-x-64gb-silver-11.jpeg',
  2: 'https://araure.solutekla.com/photo/1/samsung/celulares/celular_samsung_galaxy_s9_plus_negro/celular_samsung_galaxy_s9_plus_negro_0001',
  3: 'https://amazonspreview.com/wp-content/uploads/2021/03/Oppo-F19-Pro.jpg',
  4: 'https://www.manual.com.ve/thumbs/products/l/1280522-huawei-p30.jpg',
  5: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-mbp16touch-silver-gallery-2019?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1582233083340',
  6: 'https://http2.mlstatic.com/D_NQ_NP_777600-MLV53524499786_012023-O.jpg',
  7: 'https://m.media-amazon.com/images/I/71A1fFf1vOL.jpg',
  8: 'https://images.priceoye.pk/infinix-inbook-x1-pro-14-inches-core-i7-8gb-ram-512gb-ssd-pakistan-priceoye-639m8.jpg',
  9: 'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08221781.jpg',
};

const App = () => {
  const [productsList, setProductsList] = useState({});

  const handle = () => {
    const { products } = productsList;

    const mapProducts = products.map((product) => {
      console.log(product);
    });
  };

  useEffect(() => {
    getProducts('https://dummyjson.com/products?limit=10').then((products) => {
      setProductsList(products);
    });
  }, []);

  return (
    <>
      <div>
        <h1>All products</h1>
      </div>
      <div className='products'>
        {productsList.products === undefined ? (
          <p>Loading...</p>
        ) : (
          productsList.products.map((product) => (
            <div key={product.id} className='product'>
              <div className='product__image-container'>
                <img className='product__image' src={images[product.id - 1]} />
              </div>
              <div className='product__title-container'>
                <h2 className='product_title'>{product.title}</h2>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default App;
