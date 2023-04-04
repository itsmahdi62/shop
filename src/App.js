import './App.css';
import Header from "./Component/Header/Header"
import Product from './Component/Product/Product';
import Footer from "./Component/Footer/Footer"
import { useState } from 'react';
import Login from './Containers/Login';
const App =() => {
  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null)

  return (
    <div className="App">
      <Header setToken={setToken}/>
      {token ? <Product /> : <Login token={token} setToken={setToken}/>}
      
      <Footer />
    </div>
  );
}

export default App;
