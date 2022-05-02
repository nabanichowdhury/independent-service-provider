import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import CheckOut from "../CheckOut/CheckOut";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  // const [user] = useAuthState();
  // const navigate = useNavigate();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || "/";
  // if (user) {
  //   navigate(from, { replace: true });
  // }

  return (
    <div className="text-light container w-50 mx-auto">
      <h1>Service number:{serviceId}</h1>
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
          <label for="exampleInputEmail1" class="form-label">
            Address
          </label>
          <input
            type="text"
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

        <button type="submit" class="btn btn-primary my-3 text-light">
          <Link
            className="text-light"
            to="/checkout"
            element={<CheckOut></CheckOut>}
          >
            Proceed Checkout
          </Link>
        </button>
      </form>
    </div>
  );
};

export default ServiceDetails;
