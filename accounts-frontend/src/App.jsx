import React from 'react';
import './App.css'
import CreateAccount from './pages/CreateAccount'
import FetchSingleAccount from './pages/FetchSingleAccount';
import UpdateAccountBalance from './pages/UpdateAccountBalance';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div className='App'>
        <NavBar />
        <div className='Content'>
          <Routes>
            <Route path='/' element={<CreateAccount />} />
            <Route path='/create-account' element={<CreateAccount />} />
            <Route path='/retrieve-account' element={<FetchSingleAccount />} />
            <Route path='/update-balance' element={<UpdateAccountBalance />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
