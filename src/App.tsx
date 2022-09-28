import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import { add, list, remove, update } from './api/products';
import reactLogo from './assets/react.svg'
import './App.css'
import { IProduct } from './models/products';
import Add from './page/Add';
import Edit from './page/Edit';
import List from './page/List';

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<List  /> } />
        <Route path='add' element={ <Add /> }/>
        <Route path=':id/edit' element={ <Edit/> }/>


      </Routes>
    </div>
  )
}

export default App
