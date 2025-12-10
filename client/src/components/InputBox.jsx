const InputBox = ({ type, name, placeholder }) => {
  return (
    <input
      className="rounded p-2.5 border border-[#c9c9c9] w-full"
      type={type}
      name={name}
      placeholder={placeholder}
      required
    />
  );
};

export default InputBox;
