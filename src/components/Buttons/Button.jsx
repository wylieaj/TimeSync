const Button = ({ buttonLabel = "Placeholder", func }) => {
  return (
    <button onClick={func} className="py-2 px-8 rounded-md shadow-sm bg-stone-300 text-stone-500 hover:bg-stone-400 hover:text-stone-900">
      {buttonLabel}
    </button>
  );
};

export default Button;
