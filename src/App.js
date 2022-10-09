import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Template from './Pages/PageTemplate/Template';
import UserInputPage from './Pages/UserInputPage/UserInputPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Template />} />
        <Route path="/input" element={<UserInputPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
