import React, { useState, useEffect } from 'react';
 import loadingImage from "../../images/footerLogo.png";
import 'animate.css';
const Loading = ({ children }) => {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoading && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#222',
          }}
        >
        
<div  style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection:"column",
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#959F87',
            width:"100%",
          }} 
          className="animate__zoomInRight"
          >
          <img src={loadingImage} alt='Loading...' class="animate__zoomIn animate__animated "/>
</div>
        </div>
      )}
      {!showLoading && children}
    </>
  );
};

export default Loading;
