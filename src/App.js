import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import About from './Components/About/about';
import UserInputPage from './Pages/UserInputPage/UserInputPage';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import LoginPage from './Pages/LoginPage/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserInputPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/volunteer" element={<RegisterPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
