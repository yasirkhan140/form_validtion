import { useDispatch, useSelector } from "react-redux";
import Aromaticbar from "./Components/ArmaticBar";
import SubmitButton from "./Components/SubmitButton";
import { submitForm } from "./custome/formSubmit";
import FormContainer from "./Components/FormContainer";
import { useState } from "react";
import { useNavigate } from "react-router";

function App() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const saved = useSelector((state) => state.saved)
  const [savedAnswer, setSavedAnswer] = useState({
    q1:"",
    q2:"",
    q3:"",
    q4:"",
  })
  return (
    <form onSubmit={(e) => submitForm(e, dispatch,savedAnswer,navigate)}>
      <div className="App bg-gray-200 p-2">
        <Aromaticbar />
        <FormContainer setSavedAnswer={setSavedAnswer}  />
      </div>
      <SubmitButton />
    </form>
  );
}

export default App;
