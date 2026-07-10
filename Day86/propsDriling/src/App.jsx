// import React, { createContext, useState } from 'react'
// import ProductsCard from './Components/ProductsCard'
// import Wrapper from './Components/Wrapper';

// // const products = [
// //   {
// //     id: 1,
// //     name: "iPhone 16 Pro",
// //     price: 129999,
// //     category: "Mobile",
// //     brand: "Apple",
// //     rating: 4.9,
// //     stock: 15,
// //     onSale: true,
// //     image: "https://picsum.photos/200?random=1",
// //   },
// //   {
// //     id: 2,
// //     name: "Samsung Galaxy S25",
// //     price: 99999,
// //     category: "Mobile",
// //     brand: "Samsung",
// //     rating: 4.8,
// //     stock: 20,
// //     onSale: false,
// //     image: "https://picsum.photos/200?random=2",
// //   },
// //   {
// //     id: 3,
// //     name: "MacBook Air M4",
// //     price: 114999,
// //     category: "Laptop",
// //     brand: "Apple",
// //     rating: 4.9,
// //     stock: 8,
// //     onSale: true,
// //     image: "https://picsum.photos/200?random=3",
// //   },
// //   {
// //     id: 4,
// //     name: "Dell XPS 15",
// //     price: 139999,
// //     category: "Laptop",
// //     brand: "Dell",
// //     rating: 4.7,
// //     stock: 10,
// //     onSale: false,
// //     image: "https://picsum.photos/200?random=4",
// //   },
// //   {
// //     id: 5,
// //     name: "Sony WH-1000XM5",
// //     price: 29999,
// //     category: "Headphones",
// //     brand: "Sony",
// //     rating: 4.8,
// //     stock: 30,
// //     onSale: true,
// //     image: "https://picsum.photos/200?random=5",
// //   },
// //   {
// //     id: 6,
// //     name: "Apple Watch Series 10",
// //     price: 45999,
// //     category: "Smartwatch",
// //     brand: "Apple",
// //     rating: 4.7,
// //     stock: 18,
// //     onSale: false,
// //     image: "https://picsum.photos/200?random=6",
// //   },
// //   {
// //     id: 7,
// //     name: "iPad Air",
// //     price: 69999,
// //     category: "Tablet",
// //     brand: "Apple",
// //     rating: 4.8,
// //     stock: 12,
// //     onSale: true,
// //     image: "https://picsum.photos/200?random=7",
// //   },
// //   {
// //     id: 8,
// //     name: "Logitech MX Master 3S",
// //     price: 9999,
// //     category: "Accessories",
// //     brand: "Logitech",
// //     rating: 4.9,
// //     stock: 40,
// //     onSale: false,
// //     image: "https://picsum.photos/200?random=8",
// //   },

// //   {
// //     id: 8,
// //     name: "Logitech MX Master 3S",
// //     price: 9999,
// //     category: "Accessories",
// //     brand: "Logitech",
// //     rating: 4.9,
// //     stock: 40,
// //     onSale: true,
// //     image: "https://picsum.photos/200?random=8",
// //   },

// //   {
// //     id: 8,
// //     name: "Logitech MX Master 3S",
// //     price: 9999,
// //     category: "Accessories",
// //     brand: "Logitech",
// //     rating: 4.9,
// //     stock: 40,
// //     onSale: true,
// //     image: "https://picsum.photos/200?random=8",
// //   },
// // ];

// export const MyContext = createContext()
// const App = () => {
//   const[firstName, setfirstName] = useState("");
//   const[lastName, setlasttName] = useState("");
//   return (
// //     <div className="grid grid-cols-4 gap-10 m-10">
// //       {products.map((item) => {
// //         if (item.onSale) {
// //           return (
// //             <Wrapper key={item.id}>
// //               <ProductsCard
// //                 onSale={item.onSale}
// //                 name={item.name}
// //                 rating={item.rating}
// //                 price={item.price}
// //                 image={item.image}
// //               />
// //             </Wrapper>
// //           );
// //         }

// //         return (
// //           <ProductsCard
// //             key={item.id}
// //             onSale={item.onSale}
// //             name={item.name}
// //             rating={item.rating}
// //             price={item.price}
// //             image={item.image}
// //           />
// //         );
// //       })}
// // </div>
// //   )


 
//   <div>
//     <input type="text" onChange={(e) => {
//      setfirstName(e.target.value)
//   }} />

//   <input type="text" onChange={(e) => {
//      setlasttName(e.target.value)
//   }} />
//   </div>
//   )

// }

// export default App


import React, { createContext, useState } from "react";
import Four from "./Pages/Four";

export const MyContext = createContext();

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <MyContext.Provider
      value={{
        firstName,
        lastName,
      }}
    >
      <div className="p-10 space-y-4">
        <input
          type="text"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
          className="border p-2"
        />

        <input
          type="text"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
          className="border p-2"
        />

        <Four />
      </div>
    </MyContext.Provider>
  );
};

export default App;