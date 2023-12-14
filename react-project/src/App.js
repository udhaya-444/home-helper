import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import SignUp from './component/Signup.js'; 
import Login from './component/Login.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;