import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

export function Button() {
  return (
    <div>
      <Link to="sign-up">
        <button className="btn">Sign up</button>
      </Link>
    </div>
  );
}

export default Button;
