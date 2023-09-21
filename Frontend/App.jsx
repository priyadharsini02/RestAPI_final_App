import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Addbook from './users/Admin/Addbook';
import Editbook from './users/Admin/Editbook';
import Viewbook from './users/Admin/Viewbook';
import Signup from './login/Signup';
import Login from './login/Login';
import Confirmation from './login/Confirmation';
import AdminHome from './pages/AdminHome';
import CustomerHome from './pages/CustomerHome';
import CustomerViewBook from './users/Customer/CustomerViewBook';
import ShoppingCart from './cart/ShoppingCart';
import DisplayCart from './cart/DisplayCart';



function App() {

  return (
    <>
    <Router>
    <Routes>  
      <Route exact path='/addbook' element={<Addbook/>}/>
      <Route exact path='/editbook/:id' element={<Editbook/>}/>
      <Route exact path='/viewbook/:id' element={<Viewbook/>}/>
      <Route exact path='/' element={<Signup/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/confirmation' element={<Confirmation/>}/>
      <Route exact path='/admin_home' element={<AdminHome/>}/>
      <Route exact path='/customer_home' element={<CustomerHome/>}/>
      <Route exact path='/customerViewBook/:id' element={<CustomerViewBook/>}/>  
      <Route exact path='/scart'  element={<ShoppingCart/>}/>
      <Route exact path='/displaycart' element={<DisplayCart/>}/>

    </Routes>
    </Router>
      
    </>
  )
}

export default App
