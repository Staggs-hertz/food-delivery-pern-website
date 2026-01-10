const AddCategoriesOptions = ({ onChange, value }) => {
  return (
    <select
      onChange={onChange}
      value={value}
      name="category_id"
      className="rounded p-3.5 border border-[#c9c9c9] w-full cursor-pointer"
    >
      <option value="1">Salad</option>
      <option value="2">Rolls</option>
      <option value="3">Desserts</option>
      <option value="4">Sandwich</option>
      <option value="5">Cake</option>
      <option value="6">Pure veg</option>
      <option value="7">Pasta</option>
      <option value="8">Noodles</option>
    </select>
  );
};

export default AddCategoriesOptions;
