import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { useState } from "react";
import "./sign-in-form.styles.scss";

const SignInForm = () => {
  const [formFields, setFormFields] = useState({email:"", password:""});
  const { email, password } = formFields;

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormFields({...formFields, [name]:value});
  }

  const signInWithGoogle = async () => {
    try {
      const response = await signInWithGooglePopup();
      await createUserDocumentFromAuth(response.user);
      alert("Successfully signed in with Google");
    } catch (error) {
      console.log("Error encountered during Google sign in", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password);
      console.log(response);
      setFormFields({email:"", password:""});
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Wrong email or password');
          break;
        case 'auth/user-not-found':
          alert('User does not exist');
          break;
        default:
          console.log("Login encounters error", error);
      }
    }
  };

  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <div className="buttons-container">
          <Button type="submit" >Sign In</Button>
          <Button buttonType="google" onClick={signInWithGoogle} >Google Sign In</Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;