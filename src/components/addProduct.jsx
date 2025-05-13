import React, { useContext, useState } from 'react';
import { ProductContext } from '../context/productContext';
import { useNavigate } from 'react-router-dom';
const Product = () => {
    const navigate = useNavigate();
    const{addProduct}=useContext(ProductContext)
   const [product, setProduct] = useState({
    productName: '',
    price: '',
    image: null,
  });

    function  handleChange(e){
const { name, value, type, files } = e.target;

    setProduct((prev) => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value,
    }));
    
    }
    const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(product)
navigate("/");
    // You can now send `product` to a backend or process it
  };
  return (
    <div className="container mx-auto p-4 mb-30">
      <h1 className="text-3xl font-bold text-black mb-20">Product</h1>

      <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
        <div className="p-2">
          <input
            type="text"
            id="product"
            name="productName"
            placeholder="Product Name"
            className="block w-50 rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2 bg-[#f6f6f6]"
            required
            onChange={handleChange}
          />
        </div>

        <div className="p-2">
          <label
            htmlFor="image-upload"
            className="w-50 h-12 border-2 border-dashed border-gray-300 rounded-md cursor-pointer flex items-center justify-center bg-[#f6f6f6] hover:bg-gray-50"
          >
            <span className="text-gray-600">Select Image of Product</span>
          </label>
          <input
            id="image-upload"
            name="image"
            type="file"
            accept="image/*"
            className="sr-only"
            onChange={handleChange}

          />
{product.image && (
  <div className="mt-4">
    <img
      src={URL.createObjectURL(product.image)}
      alt="Product Preview"
      className="max-w-xs h-20 rounded-md border"
    />
  </div>
)}     </div>

        <div className="p-2">
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Product Price"
            className="block w-50 rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2 bg-[#f6f6f6]"
            required
            onChange={handleChange}

          />
        </div>

        <div className="p-2">
          <button
            type="submit"
            className="block w-50 bg-[#8c0327] hover:bg-[#6b0220] text-white font-bold py-3 px-4 rounded-full cursor-pointer"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default Product;
