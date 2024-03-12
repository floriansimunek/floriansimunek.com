import Footer from '@components/Footer';
import Error404 from '@pages/Error404';
import Home from '@pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
