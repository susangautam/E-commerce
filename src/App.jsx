import Categories from "./Components/Categories";
import Footer from "./Components/footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";


const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
     <Header/>
     <Hero/>
     <Categories/>
     <Footer/>
    </div>
  );
};

export default App;
