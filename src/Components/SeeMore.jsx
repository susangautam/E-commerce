import PropTypes from "prop-types";

const SeeMore = ({ onCategorySelect }) => {
  const categories = [
    { name: "Clothing", image: "/clothing.png" },
    { name: "Electronics", image: "/electronics.jpeg" },
    { name: "Grocery", image: "/grocery.jpg" },
    { name: "Musical Instruments", image: "/music.jpg" },
    { name: "Books", image: "/books.jpg" },
    { name: "Furniture", image: "/furniture.jpg" },
    { name: "Toys", image: "/toy.jpg" },
    { name: "Beauty Products", image: "/beauty.jpg" },
    { name: "Sports Equipment", image: "/sports.jpg" },
    { name: "Home Decor", image: "/decor.jpg" },
    { name: "Jewelry", image: "/jewelry.jpg" },
    { name: "Pet Supplies", image: "/pets.jpg" },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">All Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              onClick={() => onCategorySelect(category.name)}
              className="bg-white p-4 rounded-lg shadow cursor-pointer hover:shadow-lg transition"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full rounded-t-lg"
              />
              <h3 className="text-lg font-semibold mt-4 text-center">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

SeeMore.propTypes = {
  onCategorySelect: PropTypes.func.isRequired,
};

export default SeeMore;
