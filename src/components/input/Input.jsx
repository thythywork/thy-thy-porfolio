import React from "react";

const Input = ({ title, type, name, value, func }) => (
  <div className="flex flex-col">
    <label className="text-white mb-2" htmlFor={name}>{title}</label>
    {type === "textarea" ? (
      <textarea
        className="font-pop peer h-[100px] w-full border-b-2 border-solid border-[#D0D4FE] bg-transparent pt-4 pb-1.5 text-sm text-[#D0D4FE] outline outline-0 transition-al focus:outline-0 placeholder:opacity-0 focus:placeholder:opacity-10"
        id={name} // Ensuring the ID is unique and linked with label
        name={name}
        placeholder={title}
        value={value}
        onChange={func}
        required
      />
    ) : (
      <input
        className="font-pop peer h-[50px] w-full border-b-2 border-solid border-[#D0D4FE] bg-transparent pt-4 pb-1.5 text-sm text-[#D0D4FE] outline outline-0 transition-al focus:outline-0 placeholder:opacity-0 focus:placeholder:opacity-10"
        id={name} // Ensuring the ID is unique and linked with label
        type={type}
        name={name}
        placeholder={title}
        value={value}
        onChange={func}
        required
      />
    )}
  </div>
);

export default Input;
