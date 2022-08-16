import { useState} from "react";
import { 
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils';
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import './sign-up-form.styles.scss';

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: ""
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {displayName, email, password, confirmPassword} = formFields;

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormFields({...formFields, [name]:value});
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password not matched, confirm again!");
      return;
    }

    try {
      const response = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(response.user, { displayName });
      setFormFields(defaultFormFields);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use");
      }
      console.log("User creation encounters error", error);
    }
  };

  return (
      <div className="sign-up-container">
        <h2>Do not have an account?</h2>
        <span>Sign up with email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput 
            label="Display Name" 
            inputOptions={{
              type:"text",
              name:"displayName",
              value:displayName,
              onChange:handleChange,
              required:true
            }} 
          />

          <FormInput 
            label="Email" 
            inputOptions={{
              type:"email",
              name:"email",
              value:email,
              onChange:handleChange,
              required:true
            }} 
          />

          <FormInput 
            label="Password" 
            inputOptions={{
              type:"password",
              name:"password",
              value:password,
              onChange:handleChange,
              required:true
            }} 
          />

          <FormInput 
            label="Confirm Password" 
            inputOptions={{
              type:"password",
              name:"confirmPassword",
              value:confirmPassword,
              onChange:handleChange,
              required:true
            }} 
          />

          <Button type="submit">sign up</Button>
        </form>
      </div>
  );

}

export default SignUpForm;