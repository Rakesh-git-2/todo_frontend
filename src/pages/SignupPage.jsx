import React from "react";
import Header from "../components/header";
import Signup from "../components/Signup";

function SignupPage() {
  return (
    <div className="auth">
      <Header
        heading="Signup to create an account"
        paragraph="Already have an account? "
        linkName="Login"
        linkUrl="/login"
      />
      <Signup />
    </div>
  );
}

export default SignupPage;
