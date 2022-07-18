// import logo from './logo.svg';
import './App.css';
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './context/Authcontext';
import Success from './pages/Success';
import Account from './pages/Account';
import Forgotpassword from "./pages/Forgotpassword";

// import Mgckart from './pages/Mgckart';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthContextProvider>

          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/success' element={<Success />} />
            <Route path='/account' element={<Account />} />
            
            {/* <Route path='/mgckart' element={<Mgckart />} /> */}
            <Route path='/forgotpassword' element={<Forgotpassword />} />



          </Routes>
        </AuthContextProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
