
import { Routes, Route, Link } from 'react-router-dom';
import {  Blog, Home, Store } from './App';

function App(){
   return (
  <>
   <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
   <div className="container-fluid justify-content-center">
      <ul className="navbar-nav d-flex justify-content-between align-items-center w-50">
         <li className="nav-item"><Link className="nav-link text-danger" to="/">Home</Link></li>
         <li className="nav-item"><Link className="nav-link text-danger" to="/store">Store</Link></li>
         <li className="nav-item"><Link className="nav-link text-danger" to="/blog">Blog</Link></li>
      </ul>
   </div>
   </nav>






   <div>
   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/store" element={<Store />} />
   <Route path="/blog" element={<Blog />} />
   </Routes>
   </div>
   </>
   );
}
export default App;