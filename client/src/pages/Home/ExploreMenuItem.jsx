const ExploreMenuItem = ({ src, name, category, setCategory }) => {
  return (
    // Dynamic functionality to select and unselect a category
    <div onClick={() => setCategory((prev) => (prev === name ? "All" : name))}>
      <img
        className={`cursor-pointer w-[7.5vw] min-w-20 rounded-full transition duration-300 ${
          category === name && "border-4 border-secondary p-0.5"
        }`}
        src={src}
      />
      <p className="mt-2.5 text-gray-500 text-[max(1.4vw,16px)] cursor-pointer">
        {name}
      </p>
    </div>
  );
};

export default ExploreMenuItem;
