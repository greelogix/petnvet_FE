import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mainlayout from './Components/Mainlayout/Mainlayout'
import Home from './Views/Home'
import Store from './Views/Store';
import Products from './Views/Products'


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="" element={<Mainlayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
           <Route path="/products" element={<Products />} />
           {/*   <Route path="/register" element={<Register />} />
            <Route path="/addlist" element={<Addlist />} />
            <Route path="/trial" element={<Trial />} />
            <Route path="/editproduct/:id" element={<Editproduct />} /> */}
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
