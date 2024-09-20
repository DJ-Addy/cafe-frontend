
import './App.css';
import NavBar from './layout/NavBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import Menu from './pages/Menu';
import Footer from './layout/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <div className="App">
       <Router>
       <NavBar/>
      
      <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/Menu" element={<Menu />} />
         {/* <Route exact path="/edituser/:id" element={<editCustomer />} />
  <Route exact path="/viewuser/:id" element={<viewCustomer />} />*/}
        </Routes>
        <Footer/>
       </Router>
    </div>
  );
}

export default App;
