import React, { useContext } from 'react';
import { ProductContext } from '../context/productContext';

const Home = () => {
  const { products,setCartItems } = useContext(ProductContext); 

  return (
    <div className="antialiased text-gray-900">
      <div className="min-h p-8 flex flex-wrap gap-4 justify-center">
        {products?.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-2xl xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2"
          >
            {product.image && (
              <img
                className="h-48 w-full object-cover object-end"
                src={URL.createObjectURL(product.image)}
                alt={product.productName}
              />
            )}
            <div className="p-6">
              <h4 className="font-semibold text-lg leading-tight truncate">
                {product.productName}
              </h4>
              <div className="mt-1 text-gray-700 font-bold">${product.price}</div>
              <div className="mt-4">
                <button
                  type="button"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition cursor-pointer"
                  onClick={() => setCartItems(index+1)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
