const MobileAppOrderStep = ({ number, title, text }) => {
  return (
    <div className="pt-2 mb-6">
      <div className="mb-7">
        <a
          href="#"
          className="py-4 px-5 rounded bg-[#ffe5e0] text-secondary hover:bg-secondary hover:text-white transition duration-500"
        >
          {number}
        </a>
      </div>
      <h3 className="font-semibold text-xl">{title}</h3>
      <p className="text-gray-500">{text}</p>
    </div>
  );
};

export default MobileAppOrderStep;
