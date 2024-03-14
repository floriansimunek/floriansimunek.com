import Footer from '@components/Footer';
import Menu from '@components/Menu';
import Error404 from '@pages/Error404';
import Home from '@pages/Home';
import Service from '@pages/Service';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:slug" element={<Service />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
