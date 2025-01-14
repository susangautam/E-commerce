import { useState } from "react";
import Categories from "./Components/Categories";
import Products from "./Components/Products";

import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Footer from "./Components/footer";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <Hero />
      <Categories onCategorySelect={setSelectedCategory} />
      {selectedCategory && <Products selectedCategory={selectedCategory} />}
      <Footer/>
    </div>
  );
};

export default App;
