import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Template from './Pages/PageTemplate/Template';
import UserInputPage from './Pages/UserInputPage/UserInputPage';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import LoginPage from './Pages/LoginPage/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Template />} />
        <Route path="/input" element={<UserInputPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
