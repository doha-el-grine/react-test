import { useState } from "react";
import { Link } from "react-router-dom";
import './CARD.css';

const dbinit = [{ img: '', productname: '', price: '' }];

function Home(){
   return (
      <div className="text-center">
         <h2 className="mt-4" style={{ fontFamily: "'Roboto Mono', monospace" }}>Hello, click this button to go to the store:</h2>
         <Link to="/store" className="btn btn-danger mt-3">Go to Store</Link>
      </div>
   );
}

function Store(){
   const [Dbinit, setDbinit] = useState(dbinit);
   const [img, setImg] = useState('');
   const [productname, setProductname] = useState('');
   const [price, setPrice] = useState('');

   const addProduct = (e) => {
      e.preventDefault();
      setDbinit([...Dbinit, { img, productname, price }]);
      setImg('');
      setProductname('');
      setPrice('');
   };

   const searchProduct = (e) => {
      e.preventDefault();
      const filteredProducts = dbinit.filter((product) =>
         product.productname.toLowerCase().includes(productname.toLowerCase())
      );
      setDbinit(filteredProducts);
   };

   return (
      <>
         <div className="container mt-4 text-center">
            <form onSubmit={addProduct} className="text-center">
               <h3 className="mt-4" style={{ fontFamily: "'Roboto Mono', monospace" }}>here you can add product</h3>
               <input type="text" className="form-control form-control-sm" placeholder="URL img here" value={img} onChange={(e) => setImg(e.target.value)} /><br></br>
               <input type="text" className="form-control form-control-sm" placeholder="Product name here" value={productname} onChange={(e) => setProductname(e.target.value)} /><br></br>
               <input type="text" className="form-control form-control-sm" placeholder="Price here" value={price} onChange={(e) => setPrice(e.target.value)} /><br></br>
               <button type="submit" className="btn btn-dark btn-sm">Add Product</button>
            </form>  
            <p className="mt-4" style={{ fontFamily: "'Roboto Mono', monospace" }}> to see the product you add click here </p>
            <Link to="/blog"><button type="submit" className="btn btn-dark btn-sm"> go to product list  </button></Link>      
         </div>

         <div className="container mt-4">
            <form onSubmit={searchProduct} className="text-center">
               <label htmlFor="productName" className="mt-4" style={{ fontFamily: "'Roboto Mono', monospace" }}>Product search by name:</label>
               <input
                  type="text"
                  id="productName"
                  placeholder="Enter product name here"
                  value={productname}
                  onChange={(e) => setProductname(e.target.value)}
               />
               <button type="submit">Search</button>
            </form>
         </div>
      </>
   );
}

function Blog() {
   const [Dbinit, setDbinit] = useState(dbinit);

   const deleteProduct = (index) => {
      setDbinit(Dbinit.filter((_, i) => i !== index));
   };

   return (
      <div className="container mt-4">
         <div className="products-container">
            {Dbinit.map((product, index) => (
               <div className="product-card" key={index}>
                  <img src={product.img} className="product-img" alt={product.productname} />
                  <p className="product-name">{product.productname}</p>
                  <p className="product-price">{product.price}</p>
                  <button type="button" className="btn btn-danger btn-sm" onClick={() => deleteProduct(index)}>
                     Delete
                  </button>
               </div>
            ))}
         </div>
      </div>
   );
}



export { Home, Store, Blog };
