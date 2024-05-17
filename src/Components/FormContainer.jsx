import { useSelector } from "react-redux";
import InputComponent from "./InputComponent";
import Question from "./Question";
const options = [
  {
    option: "Excellent",
    value: "excellent",
  },
  {
    option: "Good",
    value: "good",
  },
  {
    option: "Fair",
    value: "fair",
  },
  {
    option: "Bad",
    value: "bad",
  },
];
const FormContainer = ({setSavedAnswer,}) => {
  const errors = useSelector((state) => state.error)
  return (
    <div className="bg-white p-4 rounded">
      <div className=" py-3 grid-rows-4  grid grid-cols-2 gap-x-6">
        <InputComponent
          type={"text"}
          label={"Customer Name"}
          placeholder={"E.g. jon snow"}
          required={true}
          id="cus"
          name="name"
          error={errors.name}
        />
        <InputComponent
          type={"email"}
          label={"Email"}
          placeholder={"E.g. abc@gmail.com"}
          required={true}
          id="email"
          error={errors.email}
          name="email"
        />
        <InputComponent
          type={"number"}
          label={"Phone"}
          placeholder={"9999999999"}
          required={true}
          id="phone"
          name="phone"
          error={errors.phone}
        />
        <div></div>
        <Question
          options={options}
          question={
            "Please rate the quality of the service you received from your host."
          }
          name="q1"
          setSavedAnswer={setSavedAnswer}
           error={errors.q1}
        />
        <Question
          options={options}
          question={
            "Please rate the quality of the beverage."
          }
          name="q2"
          setSavedAnswer={setSavedAnswer}
           error={errors.q2}
        />
        <Question
          options={options}
          question={
            "Was our restaurant clean?"
          }
          name="q3"
          setSavedAnswer={setSavedAnswer}
           error={errors.q3}
        />
        <Question
          options={options}
          question={
            "Please rate your overall dining experience."
          }
          name="q4"
          setSavedAnswer={setSavedAnswer}
           error={errors.q4}
        />
      </div>
    </div>
  );
};

export default FormContainer;
