import React from "react";
import ErrorInputComponet from "./ErrorInputComponet";
import ContrySelect from "./ContrySelect";

const InputComponent = ({
  label,
  type,
  placeholder,
  error,
  id,
  required,
  name,
  ...props
}) => {
  
  return (
    <div className="flex flex-col m-1">
      <label className="font-bold" htmlFor={id}>
        {label} <>{required && <span className="text-red-600">*</span>}</>
      </label>

      <div className={`w-full ${type === "number" && "flex"}`}>
        {type === "number" && <ContrySelect />}
        <input
          type={type}
          className="w-full border border-gray-300 rounded p-1 focus:border-gray-400 focus-visible:border-gray-400"
          placeholder={placeholder}
          id={id}
          name={name}
          {...props}
        />
      </div>
      {error && <ErrorInputComponet error={error} />}
    </div>
  );
};

export default InputComponent;
