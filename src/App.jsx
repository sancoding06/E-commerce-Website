import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Account } from './components/Account'
import { Home} from './components/Home'
import { Dresses } from './components/Dresses'
import { Tops } from './components/Tops'
import { Bottoms } from './components/Bottoms'
import { Bags } from './components/Bags'
import { Footwear } from './components/Footwear'
import { Add } from './components/Add'
import { Product } from './components/Product'
import { Wishlist } from './components/Wishlist'
import { Cart } from './components/Cart'
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/dresses" element={<Dresses/>}/>
        <Route path="/tops" element={<Tops/>}/>
        <Route path="/bottoms" element={<Bottoms/>}/>
        <Route path="/bags" element={<Bags/>}/>
        <Route path="/footwear" element={<Footwear/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </>
  )
}

export default App
