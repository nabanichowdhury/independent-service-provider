import React from "react";
import { Link } from "react-router-dom";
import Register from "../Register/Register";

const Login = () => {
  return (
    <div className="text-light w-50 mx-auto container">
      <h1>Login Here</h1>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
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
      <button type="submit" class="btn btn-primary w-100 my-3">
        <img src="https://img.icons8.com/fluency/48/000000/google-logo.png" />{" "}
        Sign In Using Google
      </button>
      <button type="submit" class="btn btn-primary w-100 mb-5">
        <img src="https://img.icons8.com/office/40/000000/facebook-new.png" />
        Sign In Using FaceBook
      </button>
    </div>
  );
};

export default Login;
