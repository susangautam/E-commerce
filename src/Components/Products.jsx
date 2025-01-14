import PropTypes from "prop-types";

const products = [
  {
    id: 1,
    name: "T-Shirt",
    category: "Clothing",
    price: "Rs 200",
    image: "",
  },
  {
    id: 2,
    name: "Smartphone",
    category: "Electronics",
    price: "Rs 69,999",
    image: "",
  },
  {
    id: 3,
    name: "Rice",
    category: "Grocery",
    price: "Rs 100",
    image: "",
  },
  {
    id: 4,
    name: "Guitar",
    category: "Musical Instruments",
    price: "Rs 9,999",
    image: "",
  },
];

const Products = ({ selectedCategory }) => {
  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">
          Products in {selectedCategory}
        </h2>
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h3 className="text-xl font-bold text-gray-800 mt-4">
                  {product.name}
                </h3>
                <p className="text-gray-600 mt-2">{product.price}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">
            No products available in this category.
          </p>
        )}
      </div>
    </section>
  );
};

Products.propTypes = {
  selectedCategory: PropTypes.string.isRequired,
};

export default Products;
