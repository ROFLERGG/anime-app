import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/home';
import NotFound from './components/pages/404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
