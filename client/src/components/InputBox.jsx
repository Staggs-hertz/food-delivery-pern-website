const InputBox = ({ type, name, placeholder, onChange, value }) => {
  return (
    <input
      className="rounded p-2.5 border border-[#c9c9c9] w-full"
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
    />
  );
};

export default InputBox;
