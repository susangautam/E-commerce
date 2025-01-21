import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Categories from "./Components/Categories";
import Products from "./Components/Products";
import SeeMore from "./Components/SeeMore";

import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <Router>
      <div className="bg-gray-50 min-h-screen">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Categories onCategorySelect={setSelectedCategory} />
                {selectedCategory && (
                  <Products selectedCategory={selectedCategory} />
                )}
              </>
            }
          />
          <Route
            path="/see-more"
            element={<SeeMore onCategorySelect={setSelectedCategory} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
