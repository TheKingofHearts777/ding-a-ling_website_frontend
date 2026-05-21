import Layout from './navigation/Layout.jsx';
import About from './About.jsx';
import ProductRequest from './ProductRequest.jsx';
import Portfolio from './Portfolio.jsx';
import Home from './Home.jsx';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = "Ding-A-Ling Blacksmiths";
  }, [])

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product-request" element={<ProductRequest />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Layout>
  )
}

export default App