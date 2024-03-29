import React, { useState, useEffect } from "react";
import loadingImage from "../../images/footerLogo.png";
import "animate.css";
import "./Loading.css";
const Loading = ({ children }) => {
  const [filled, setFilled] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    setIsRunning(true);
    if (filled < 100 && isRunning) {
      setTimeout(() => setFilled((prev) => (prev += 2)), 50);
    }
  }, [filled, isRunning]);
  const [showLoading, setShowLoading] = useState(true);

  return (
    <>
      {showLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#222",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              height: "100vh",
              backgroundColor: "#959F87",
              width: "100%",
            }}
          >
            <img
              src="/images/logo.jpg"
              alt="Loading..."
              className="animate__zoomIn animate__animated  rounded-3xl"
            />
          </div>
        </div>
      )}
      {!showLoading && children}
    </>
  );
};

export default Loading;
