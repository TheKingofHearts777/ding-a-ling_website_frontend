import { use, useState } from 'react';
import Layout from './navigation/Layout.jsx';
import About from './About.jsx';
import ProductRequest from './ProductRequest.jsx';
import Portfolio from './Portfolio.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  useEffect(() => {
    document.title = "Ding-A-Ling Website"
  }, [])

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product-request" element={<ProductRequest />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

function Home() {
  return <div>Home Page</div>
}

export default App