// import React from 'react'
// import { useAppContext } from '../../context/AppContext'
// import toast from 'react-hot-toast'

// const ProductList = () => {
//     const {products, currency, axios, fetchProducts} = useAppContext()

//     const toggleStock = async (id, inStock)=>{
//         try {
//             const { data } = await axios.post('/api/product/stock', {id, inStock});
//             if (data.success){
//                 fetchProducts();
//                 toast.success(data.message)
//             }else{
//                 toast.error(data.message)
//             }
//         } catch (error) {
//             toast.error(error.message)
//         }
//     }
//   return (
//     <div className="no-scrollbar flex-1 h-[95vh] overflow-y-scroll flex flex-col justify-between">
//             <div className="w-full md:p-10 p-4">
//                 <h2 className="pb-4 text-lg font-medium">All Products</h2>
//                 <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
//                     <table className="md:table-auto table-fixed w-full overflow-hidden">
//                         <thead className="text-gray-900 text-sm text-left">
//                             <tr>
//                                 <th className="px-4 py-3 font-semibold truncate">Product</th>
//                                 <th className="px-4 py-3 font-semibold truncate">Category</th>
//                                 <th className="px-4 py-3 font-semibold truncate hidden md:block">Selling Price</th>
//                                 <th className="px-4 py-3 font-semibold truncate">In Stock</th>
//                             </tr>
//                         </thead>
//                         <tbody className="text-sm text-gray-500">
//                             {products.map((product) => (
//                                 <tr key={product._id} className="border-t border-gray-500/20">
//                                     <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate">
//                                         <div className="border border-gray-300 rounded p-2">
//                                             <img src={product.image[0]} alt="Product" className="w-16" />
//                                         </div>
//                                         <span className="truncate max-sm:hidden w-full">{product.name}</span>
//                                     </td>
//                                     <td className="px-4 py-3">{product.category}</td>
//                                     <td className="px-4 py-3 max-sm:hidden">{currency}{product.offerPrice}</td>
//                                     <td className="px-4 py-3">
//                                         <label className="relative inline-flex items-center cursor-pointer text-gray-900 gap-3">
//                                             <input onClick={()=> toggleStock(product._id, !product.inStock)} checked={product.inStock} type="checkbox" className="sr-only peer" />
//                                             <div className="w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-200"></div>
//                                             <span className="dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
//                                         </label>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//   )
// }

// export default ProductList

import React from "react";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const ProductList = () => {
  const { products, currency, axios, fetchProducts } = useAppContext();

  const toggleStock = async (id, inStock) => {
    try {
      const { data } = await axios.post("/api/product/stock", { id, inStock });
      if (data.success) {
        fetchProducts();
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex-1 h-[95vh] overflow-y-auto p-4 md:p-10">
      <h2 className="pb-4 text-lg font-medium">All Products</h2>

      {/* ✅ Scrollable container */}
      <div className="w-full overflow-x-auto border border-gray-300 rounded-md bg-white">
        <table className="min-w-[800px] w-full table-auto">
          <thead className="bg-gray-100 text-sm text-gray-700">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">Product</th>
              <th className="px-4 py-3 text-left font-semibold">Category</th>
              <th className="px-4 py-3 text-left font-semibold">
                Selling Price
              </th>
              <th className="px-4 py-3 text-left font-semibold">In Stock</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-600">
            {products.map((product) => (
              <tr key={product._id} className="border-t border-gray-200">
                <td className="px-4 py-3 flex items-center gap-4">
                  <div className="w-16 h-16 border border-gray-300 rounded p-1 shrink-0">
                    <img
                      src={product.image[0]}
                      alt="Product"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="whitespace-normal">{product.name}</span>
                </td>
                <td className="px-4 py-3">{product.category}</td>
                <td className="px-4 py-3">
                  {currency}
                  {product.offerPrice}
                </td>
                <td className="px-4 py-3">
                  <label className="relative inline-flex items-center cursor-pointer gap-2">
                    <input
                      onClick={() => toggleStock(product._id, !product.inStock)}
                      checked={product.inStock}
                      type="checkbox"
                      className="sr-only peer"
                    />
                    <div className="w-12 h-7 bg-slate-300 rounded-full peer-checked:bg-blue-600 transition-colors duration-200" />
                    <span className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 peer-checked:translate-x-5" />
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
