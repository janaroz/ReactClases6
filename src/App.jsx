import React from "react";

import MiHooksOne from './components/hooksFolderOne';
import MiHooksTwo from './components/hooksFolderTwo';
import { ProductCard } from "./components/ProductCart";

import './App.css'

function App() {
  
  return (
    <div>
      <h2>HOOLAAAA</h2>
      <MiHooksOne/>   
      <MiHooksTwo/>    
      <ProductCard/>
    </div>
  )
}

export default App
