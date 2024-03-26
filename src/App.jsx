import {Route, Routes} from 'react-router-dom'

import "./App.css";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart"
import { Layout } from './components';

function App() {
  return <>
    <div className="container">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/cart' element={<Cart/>}/>
        </Route>
      </Routes>
    </div>
  </>;
}

export default App;
