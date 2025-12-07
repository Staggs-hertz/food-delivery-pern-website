const Button = ({ content }) => {
  return (
    <button className="border-none text-gray-500 font-medium py-[1vw] px-[2.3vw] bg-white text-[max(1vw,13px)] rounded-4xl hover:scale-105 duration-400 cursor-pointer">
      {content}
    </button>
  );
};

export default Button;
