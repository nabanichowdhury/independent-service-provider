import React from "react";
import { Link } from "react-router-dom";
import Login from "../Login/Login";

const Register = () => {
  return (
    <div className="text-light w-50 mx-auto container">
      <h1>Register Here</h1>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
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
        Already have an account?
        <Link to="/login" element={<Login></Login>}>
          Login Here{" "}
        </Link>
      </p>
    </div>
  );
};

export default Register;
