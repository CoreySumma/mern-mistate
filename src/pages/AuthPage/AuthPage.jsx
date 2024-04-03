import { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main>
      <br />
        <h1>MiState</h1>
      <div className="page-container">
        <div>
          <button onClick={() => setShowSignUp(!showSignUp)}>
            {showSignUp ? "Log In" : "Sign Up"}
          </button>
        </div>
        {showSignUp ? (
          <SignUpForm setUser={setUser} />
        ) : (
          <LoginForm setUser={setUser} />
        )}
      </div>
    </main>
  );
}
