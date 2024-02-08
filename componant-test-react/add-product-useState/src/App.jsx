import React, { useState } from 'react';
//initial db
const initialProducts = [
  {
    id: 1,
    title: 'laptop gamer MSI',
    price: '800 $',
    thumbnail: '/img/images.jpeg'
  },
  {
    id: 2,
    title: 'laptp gamer LEGION',
    price: '1000 $',
    thumbnail: '/img/gaming-laptops.webp'
  },
  {
    id: 3,
    title: 'laptop gamer ALIEN WAR',
    price: '3640 $',
    thumbnail: '/img/images (1).jpeg'
  },
  {
    id: 4,
    title: 'laptop gamer PAVILLON',
    price: '1270 $',
    thumbnail: '/img/3331630-a.jpg'
  }
];


function App() {
  // use state statment
  const [products, setProducts] = useState(initialProducts);
  // to add new product
  const [newProduct, setNewProduct] = useState({
    id: null,
    title: '',
    price: '',
    thumbnail: ''
  });

// stle 


  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: '20px'
  };

  const productStyle = {
    width: '300px',
    height: '400px',
    textAlign: 'center',
    border: '1px solid #ccc',
    padding: '10px',
    borderRadius: '5px',
    margin: '10px'
  };

  const imageStyle = {
    width: '100%',
    height: '200px', 
    objectFit: 'cover', 
    marginBottom: '10px'
  };

  const buttonStyle = {
    padding: '10px 20px',
    marginTop: '10px', // Add top margin to button for separation from input fields
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const position = {
    position: 'fixed',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '20px',
    margin: '10px', // Add margin between the form and other elements
    backgroundColor: '#f8f9fa', // Lighter background color
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    display: 'flex', // Use flexbox for alignment
    flexDirection: 'column', // Arrange items vertically
    alignItems: 'center', // Center-align the items horizontally
  };
  
  const inputStyle = {
    marginBottom: '10px', // Add bottom margin to input fields
    padding: '8px', // Adjust padding for input fields
    border: '1px solid #ccc', // Add border for input fields
    borderRadius: '5px', // Add border radius for input fields
    width: '100%', // Ensure input fields fill the width of the form
    boxSizing: 'border-box', // Ensure padding and border are included in width calculation
  };
  

  
  
  
  

 //style end//

// form submite confirmation
  const submite = (e) => {
    e.preventDefault();
    const id = products.length + 1;
    setProducts([...products, { ...newProduct, id }]);
    setNewProduct({ id: null, title: '', price: '', thumbnail: '' }); // Reset form fields
  };

  return (<div id='root'>
          <center><h1>Gaming laptops for sale</h1></center>
          <div style={containerStyle}>
              {/* Render existing products */}
              {products.map((product) => (<div key={product.id} style={productStyle}>
                                          <img src={product.thumbnail} alt={product.title} style={imageStyle} />
                                          <h5>{product.title}</h5>
                                          <p>{product.price}</p>
                                          <button type="button" style={buttonStyle}>SHOP NOW</button>
                                          </div>))}
          </div>

          {/* Form to add new product */}
          <form onSubmit={submite} style={position} >
            <input style={inputStyle} type="text" placeholder="Title" value={newProduct.title} onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}/>
            <input style={inputStyle} type="text" placeholder="Price" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} />
            <input style={inputStyle} type="text"  placeholder="Thumbnail URL"  value={newProduct.thumbnail} onChange={(e) => setNewProduct({ ...newProduct, thumbnail: e.target.value })}/>
            
          <button type="submit" style={buttonStyle}>Add Product</button>
          </form>

      </div>);
}

export default App;









// import React from 'react';


// const products = [
//   {
//     id: 1,
//     title: 'laptop gamer MSI',
//     price: '800 $',
//     thumbnail: '/img/images.jpeg'
//   },
//   {
//     id: 2,
//     title: 'laptp gamer LEGION',
//     price: '1000 $',
//     thumbnail: '/img/gaming-laptops.webp'
//   },
//   {
//     id: 3,
//     title: 'laptop gamer ALIEN WAR',
//     price: '3640 $',
//     thumbnail: '/img/images (1).jpeg'
//   },
//   {
//     id: 4,
//     title: 'laptop gamer PAVILLON',
//     price: '1270 $',
//     thumbnail: '/img/3331630-a.jpg'
//   }
// ];





// function App() {
//   const containerStyle = {
//     display: 'flex',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     flexWrap: 'wrap', // Allow items to wrap to the next line
//     padding: '20px'
//   };

//   const productStyle = {
//     width: '300px', // Set a fixed width for each product card
//     height: '400px', // Set a fixed height for each product card
//     textAlign: 'center',
//     border: '1px solid #ccc',
//     padding: '10px',
//     borderRadius: '5px',
//     margin: '10px' // Add some margin between products
//   };

//   const imageStyle = {
//     width: '100%', // Set the width to 100% to ensure all images fill their containers
//     height: '200px', // Set a fixed height for each image
//     objectFit: 'cover', // Ensure images maintain aspect ratio and cover the entire container
//     marginBottom: '10px'
//   };
 
//   const buttonStyle = {
//     backgroundColor: '#007bff', // Adjust the color as needed
//     color: '#fff',
//     border: 'none',
//     borderRadius: '5px',
//     padding: '10px 20px',
//     fontSize: '16px',
//     fontWeight: 'bold',
//     textTransform: 'uppercase',
//     cursor: 'pointer',
//     outline: 'none',
//     transition: 'background-color 0.3s ease', // Add smooth transition on hover
//   };
  
  
//   return (<div id='root'>
//               <center><h1>Gaming laptops for sale</h1></center>
//               <div style={containerStyle}>
//                       {products.map((product) => (<div key={product.id} style={productStyle}>
//                                                       <img src={product.thumbnail} alt={product.title}  style={imageStyle}/>
//                                                       <h5 > {product.title}</h5>
//                                                       <p>{product.price}</p>
//                                                       <button type="button" style={buttonStyle} > SHOP NOW</button>
//                                                        </div>)
//                                                   )};
//                       {products.splice(0,0,products)}
                                      
//               </div>
                        
//            </div>);
// }

// export default App;

























   // let list = [
   //    <li>MAMA</li>,
   //    <li>BABA</li>,
   //    <li>DOHA</li>,
   //    <li>MAHA</li>,
   //    <li>MALAK</li>,
   //    <li>AYOUB</li>,
   //    <li>FATIMAZAHRA</li>,
   //    <li>HOUISSAM</li>,
   //    <li>WISSAL</li>,
   //    <li>NOURA</li>
   // ];

   // // Modify the list array
   // list.splice(0, 2, <li>nana</li>, <li>lala</li>);

   // // Map the modified list to JSX elements
   // let map = list.map(a => a);

   // // Find "lala" in the list
   // let found = list.find(a => a.props.children === "lala");

   // // Return the JSX elements and the result of the search
   // return (
   //    <div>
   //       {map}
   //       {found ? "exist" : "not exist"}
   //    </div>
   // );