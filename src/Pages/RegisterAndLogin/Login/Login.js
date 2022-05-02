import React, { useRef } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useHref, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Register from "../Register/Register";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  // Sign In Using Google
  const [signInWithGoogle, userGoole, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);
  const navigate = useNavigate();
  // Sign in using email and Password
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  // sign in using Facebook
  const [signInWithFacebook, userFacebook, loadingFacebook, errorFacebook] =
    useSignInWithFacebook(auth);
  // Handle submit button with email
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
    console.log(email, password);
  };
  // Handle google login
  const handleGoogleLogin = () => {
    signInWithGoogle();
  };
  const handFacebookLogin = () => {
    signInWithFacebook();
  };

  return (
    <div className="text-light w-50 mx-auto container">
      <h1>Login Here</h1>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            ref={emailRef}
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            ref={passwordRef}
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>

      <p>
        Have not registered yet?
        <Link to="/register" element={<Register></Register>}>
          Register Now{" "}
        </Link>
      </p>
      <button
        onClick={handleGoogleLogin}
        type="submit"
        class="btn btn-primary w-100 my-3"
      >
        <img src="https://img.icons8.com/fluency/48/000000/google-logo.png" />{" "}
        Sign In Using Google
      </button>
      <button
        onClick={handFacebookLogin}
        type="submit"
        class="btn btn-primary w-100 mb-5"
      >
        <img src="https://img.icons8.com/office/40/000000/facebook-new.png" />
        Sign In Using FaceBook
      </button>
    </div>
  );
};

export default Login;
