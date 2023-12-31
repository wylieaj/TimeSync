import { forwardRef } from "react";

const Input = forwardRef(function Input({ labelName = "placeholder", inputLink = "placeholder", isTextArea = false, ...props }, ref) {
  return (
    <p className="flex flex-col gap-2">
      <label htmlFor={inputLink} className="text-xl text-stone-700 text-center">
        {labelName}
      </label>
      {isTextArea ? (
        <textarea id={inputLink} ref={ref} className="bg-stone-200 shadow-md p-2 outline-none rounded-md w-[36rem] h-[12rem] text-stone-700 text-lg focus:border-b-[1px] focus:border-stone-700" />
      ) : (
        <input
          id={inputLink}
          ref={ref}
          type="text"
          {...props}
          className="bg-stone-200 shadow-md p-2 outline-none rounded-md w-[20rem] text-stone-700 text-lg focus:border-b-[1px] focus:border-stone-700"
        />
      )}
    </p>
  );
});

export default Input;
