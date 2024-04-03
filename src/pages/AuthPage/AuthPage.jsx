import { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import { motion } from "framer-motion";
import "./AuthPage.css";

export default function AuthPage({ setUser }) {
  const spring = {
    type: "spring",
    damping: 20,
    stiffness: 300,
  };

  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);
  return (
    <main>
      <div className="banner">
        <div className="banner-text">MiState</div>
      </div>
      <div className="page-container">
        <h1>{isOn ? "Sign Up" : "Log In"}</h1>
        <div className="button-container">
          <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
            <motion.div className="handle" layout transition={spring} />
          </div>
        </div>
        {isOn ? (
          <SignUpForm setUser={setUser} />
        ) : (
          <LoginForm setUser={setUser} />
        )}
      </div>
      <p className="lead grey-text text-center w-responsive mx-auto mb-5">
        Take a tour of your emotions with Email: guest123@email.com - Pw: visitor123!
      </p>
    </main>
  );
}
