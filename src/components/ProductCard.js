// import React, { useState } from "react";
// import "./ProductCard.css";
// import { v4 as uuidv4 } from "uuid";

// const ProductCard = ({ product }) => {
//   console.log(product);
  
//   //Counter
//   const [counter, setCounter] = useState(0);

//   const add = () => setCounter(counter + 1);
//   const substract = () => setCounter(counter - 1);


//   return (
//     <>
//       <div className="product-list">
//         {product.map((obj) => (
//         <div key={uuidv4()} className="product-card">
//           <input type="checkbox" />
//           <div className="card-left">
//             <p className="product-title">{obj.product}</p>
//             <p>{obj.brand}</p>
//             <p>{obj.quantity}</p>
//             <div className="counter">
//               <button
//                 className="btn-subs-counter"
//                 onClick={substract}
//                 style={{ opacity: counter === 1 ? 0.4 : 1 }}
//               >
//                 -
//               </button>
//               <p>{counter}</p>
//               <button 
//                 className="btn-add-counter" 
//                 onClick={add}>
//                 +
//               </button>
//             </div>
//           </div>
//           <div className="card-right">
//             <p>$ {obj.price}</p>
//           </div>
//         </div>
//       ))}
//       </div>
//     </>
//   );
// };

// export default ProductCard;
