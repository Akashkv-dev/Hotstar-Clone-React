import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Slider from './components/Slider'
import ProductionHouse from './components/ProductionHouse'
import GenreMovieList from './components/GenreMoviesList'


function App() {

  return (
    <>
    <div>
    <Header />
    <Slider />
    <ProductionHouse />
    <GenreMovieList />
    </div> 
    </>
  )
}

export default App
