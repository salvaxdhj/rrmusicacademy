import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/FooterSection';
import Hero from './components/Hero';
import Elencos from './components/Elencos'; 
import About from './components/About';
import Plans from './components/Plans';
import JuniorPlans from './components/JuniorPlans';
import DiplomaPlans from './components/DiplomaPlans';
import Teachers from './components/Teachers';
import Director from './components/Director';
import Store from './components/Store';
import ProductDetail from './components/ProductDetail';
import CartSidebar from './components/CartSidebar';
import Article from './components/Article';
import { ShopProvider } from './context/ShopContext';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

const App: React.FC = () => {
  return (
    <ShopProvider>
        <HashRouter>
        <div className="flex flex-col min-h-screen">
            <ScrollToTop />
            <Navbar />
            <CartSidebar /> {/* El carrito vive aquí para estar disponible siempre */}
            <main className="flex-grow">
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/elencos" element={<Elencos />} />
                <Route path="/about" element={<About />} />
                <Route path="/director" element={<Director />} />
                <Route path="/article/:id" element={<Article />} />
                
                <Route path="/plans" element={<Plans />} />
                <Route path="/plans/junior" element={<JuniorPlans />} />
                <Route path="/plans/diploma" element={<DiplomaPlans />} />
                
                <Route path="/teachers" element={<Teachers />} />
                
                {/* Rutas de la Tienda */}
                <Route path="/store" element={<Store />} />
                <Route path="/store/product/:id" element={<ProductDetail />} />
            </Routes>
            </main>
            <Footer />
        </div>
        </HashRouter>
    </ShopProvider>
  );
};

export default App;