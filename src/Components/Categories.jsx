

const Categories = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Shop by Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <img src="/public/clothing.png" alt="Category 1" className="w-full rounded-t-lg" />
            <h3 className="text-lg font-semibold mt-4 text-center">Clothing</h3>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <img src="/public/electronics.jpeg" alt="Category 2" className="w-full rounded-t-lg" />
            <h3 className="text-lg font-semibold mt-4 text-center">Electronics</h3>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <img src="/public/grocery.jpg" alt="Category 3" className="w-full rounded-t-lg" />
            <h3 className="text-lg font-semibold mt-4 text-center">Grocery</h3>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <img src="/public/music.jpg" alt="Category 4" className="w-full rounded-t-lg" />
            <h3 className="text-lg font-semibold mt-4 text-center">Musical Instruments</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
