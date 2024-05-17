import { useState } from "react";
import ErrorInputComponet from "./ErrorInputComponet";
const Question = ({ options, question, name, setSavedAnswer,error, ...props }) => {
  const [selectedValue, setSelectedValue] = useState("");
  const handleSingleSelect = (e) => {
    setSelectedValue(e.target.value);
    setSavedAnswer((prev) => {
      const newState = {
        ...prev,
       [e.target.name]:e.target.value
      }
      return newState
    })
  };
  return (
    <div className="">
      <h1 className="font-semibold">
        {question}
        <span className="text-red-600">*</span>
      </h1>
      <div className="flex gap-5">
        {options?.map((item, i) => (
          <div className="flex gap-2 items-center" key={i}>
            <input
              type="checkbox"
              className="checked:bg-violet-800 text-violet-700 focus:ring-blue-500 focus:border-blue-500 "
              id={i + name}
              value={item.value}
              name={name}
              {...props}
              checked={item.value === selectedValue}
              onChange={handleSingleSelect}
            />
            <label htmlFor={i + name}>{item.option}</label>
          </div>
        ))}
      </div>
      {error && <ErrorInputComponet error={ error} />}
    </div>
  );
};

export default Question;
