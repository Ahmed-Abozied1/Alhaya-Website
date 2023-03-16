import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#f2f2f2" }}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "5rem", margin: "0" }}>404</h1>
        <p style={{ fontSize: "1.5rem", margin: "0", marginTop: "1rem" }}>Oops! Page not found</p>
        <p style={{ fontSize: "1rem", margin: "0", marginTop: "1rem" }}>The page you are looking for might have been removed or is temporarily unavailable.</p>
        <Link to="/" style={{ display: "block", marginTop: "1rem", textDecoration: "underline" }}>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Go back to homepage
</button>        </Link>
       

      </div>
    </div>
  );
};

export default NotFound;
