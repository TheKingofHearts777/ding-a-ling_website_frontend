import { use, useState } from 'react';
import Layout from './navigation/Layout.jsx';
import About from './About.jsx';
import ProductRequest from './ProductRequest.jsx';
import Portfolio from './Portfolio.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect} from 'react';

function App() {
  useEffect(() => {
    document.title = "Ding-A-Ling Website"
  }, [])

  return (
    <BrowserRouter basename="/ding-a-ling_website_frontend">
      <Layout>
        <Routes>
          <Route path="ding-a-ling_website_frontend/" element={<Home />} />
          <Route path="ding-a-ling_website_frontend/about" element={<About />} />
          <Route path="ding-a-ling_website_frontend/product-request" element={<ProductRequest />} />
          <Route path="ding-a-ling_website_frontend/portfolio" element={<Portfolio />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

function Home() {
  return <div>Home Page</div>
}

export default App