import React from "react";

const Blog = () => {
  return (
    <div className="text-light container w-50">
      <h1>What is the difference between Authorization and authentication?</h1>
      <p>
        AUthorization and Authentication both term are seems quite
        simmilar.Authentication means to verify a person if she/he is the user
        of the platform or not.When the authentication process is done
        successfully then the Authorization is given to the user and then she/he
        can access the platform.
      </p>

      <h1>
        Why we are using Firebase?What options are there to implement
        authentication?
      </h1>
      <p>
        We use firebase to do the Authentication of users while they will be
        entering in one website.We also can host our website useing firebase.We
        can do our authentication by verifying our mail,by signing up with
        google,facebook ,github and other well known website.That will be much
        easier for us to do authentication.
      </p>
    </div>
  );
};

export default Blog;
