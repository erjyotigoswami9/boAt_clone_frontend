import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import { Home } from './components/bodyComponents/Home'
import { ProductListingPage } from './components/bodyComponents/ProductListingPage'
import { SingleProductPage } from './components/bodyComponents/SingleProductPage'
import { Search } from './components/bodyComponents/smallComponents/Search'
import { Category } from './components/bodyComponents/smallComponents/Category'


function App() {

  return (
    <>
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/products' element={<ProductListingPage/>} />
         <Route path='/product' element={<SingleProductPage />} />
         <Route path='/search' element={<Search/>} />
         <Route path='/searching/:category' element={<Category/>} />
         {/*<Route path='/' element={} />
         <Route path='/' element={} />
         <Route path='/' element={} />
         <Route path='/' element={} />
         <Route path='/' element={} /> */}
      </Routes>
    </>
  )
}

export default App
