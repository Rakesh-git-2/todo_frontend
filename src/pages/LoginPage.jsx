import React from "react";
import Header from "../components/header";
import Login from "../components/Login";

function LoginPage() {
  return (
    <div class="auth">
      <Header
        heading="Login to your account"
        paragraph="Don't have an account yet? "
        linkName="Signup"
        linkUrl="/signup"
      />
      <Login />
    </div>
  );
}

export default LoginPage;
