import { addError, resetErrors } from "../store/slicer";
import {v4 as uuid4} from "uuid"
export const submitForm = (e, disptach,questions,navigate) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const phoneCode = e.target[2].value;
    const phone = e.target[3].value;
    const q1 = questions.q1;
    const q2 =questions.q2;
    const q3 = questions.q3;
    const q4 =questions.q4;
    disptach(resetErrors())
    if (name === "") {
        disptach(addError({ name: "name", value: "Please enter your name" }))
        return;
    }
    if (email === "") {
        disptach(addError({ name: "email", value: "Please enter your email" }))
        return;
    }
    if (phone==="") {
        disptach(addError({ name: "phone", value: "Please enter your phone" }))
        return;
    }
    const emailRegrex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     if (!email.toLowerCase().match(emailRegrex)) {
         disptach(addError({ name: "email", value: "Please enter a valid email" }))
        return;
    }
    const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g
    if (!phone.match(phoneRegex)) {
         disptach(addError({ name: "phone", value: "Please enter a valid phone number" }))
        return;
    }
    if (q1 === "") {
        disptach(addError({ name: "q1", value: "Please select your answer" }))
        return;
    }
    if (q2 === "") {
        disptach(addError({ name: "q2", value: "Please select your answer" }))
        return;
    }
    if (q3 === "") {
        disptach(addError({ name: "q3", value: "Please select your answer" }))
        return;
    }
    if (q4 === "") {
        disptach(addError({ name: "q4", value: "Please select your answer" }))
        return;
    }
    const id =uuid4()
    const previousData = JSON.parse(localStorage.getItem("submittedForms"))
    if (previousData) { localStorage.setItem("submittedForms", JSON.stringify([...previousData, { name, email, phone: phoneCode + phone, q1, q2, q3, q4, id }])) } else {
        localStorage.setItem("submittedForms", JSON.stringify([{ name, email, phone: phoneCode + phone, q1, q2, q3, q4, id }]))
    }
    navigate('/thankyou')
}