const BlackButton = ({ type, content }) => {
  return (
    <button
      className="w-[max(10vw,150px)] py-3 px-1.5 bg-black border-none text-white rounded cursor-pointer"
      type={type}
    >
      {content}
    </button>
  );
};

export default BlackButton;
