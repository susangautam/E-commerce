
const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold text-primary">Hamro Pasal</div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-primary">Home</a>
          <a href="#" className="text-gray-700 hover:text-primary">Shop</a>
          <a href="#" className="text-gray-700 hover:text-primary">About</a>
          <a href="#" className="text-gray-700 hover:text-primary">Contact</a>
        </nav>
        <div className="flex items-center space-x-4">
          <input 
            type="text" 
            placeholder="Search" 
            className="hidden md:block px-3 py-1 border rounded-lg text-sm" 
          />
          <button className="text-gray-700 hover:text-primary">
            <i className="fas fa-user"></i>
          </button>
          <button className="text-gray-700 hover:text-primary">
            <i className="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
