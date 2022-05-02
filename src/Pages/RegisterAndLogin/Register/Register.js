import React, { useRef } from "react";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import Login from "../Login/Login";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const Register = () => {
  // Sign Up using Email and password
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="text-light w-50 mx-auto container">
      <h1>Register Here</h1>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
        </div>
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
            required
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
            required
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      <p>
        Already have an account?
        <Link to="/login" element={<Login></Login>}>
          Login Here{" "}
        </Link>
      </p>
    </div>
  );
};

export default Register;
