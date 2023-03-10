import Cart from './Cart/cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import { Pro } from './Home/Products/Pro';
import Profile from './Home/Profile';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/item/:id' element={<Pro />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/checkout-success' element={<Home alert='yes' />} />
          <Route path='/cancel' element={<Home alert='no' />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
