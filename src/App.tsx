import Layout from './Pages/Layout';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import ProductPage from './Pages/ProductPage';
import'./globals.scss';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import WishingList from './components/WishingList';

function App() {

  return (
    <>
    <Routes>
      <Route element={<Layout />} >
        <Route path='/' element={<Home />} />
        <Route path='/wishingList' element={<WishingList />} />
        <Route path='/health' element={<ProductPage title="Health" />} />
        <Route path='/guides' element={<ProductPage title="Guides"/>} />
        <Route path="/categories/:categoryName" element={<ProductPage />} />
        <Route path='/shop' element={<Shop />} />
      </Route>
    </Routes>
      
    </>
  )
}

export default App
