import React from "react";

const SimpleHeader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        margin: "30px 0",
        overflow: "hidden",
        borderRadius: "15px",
      }}
    >
      <style>
        {`
            @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap');

            @keyframes typeLoop {
                0% { width: 0; }
                60% { width: 100%; } 
                90% { width: 100%; } 
                100% { width: 0; }
            }
        `}
      </style>

      <div
        style={{
          fontFamily: '"Oswald", sans-serif',
          fontWeight: "300",
          fontSize: "clamp(2rem, 8vw, 4rem)",
          color: "black",
          letterSpacing: "2px",

          whiteSpace: "nowrap",
          overflow: "hidden",
          borderRight: "2px solid black",
          animation: "typeLoop 3s steps(20, end) infinite",
          width: "0",
          paddingRight: "5px",
        }}
      >
        Welcome...
      </div>
    </div>
  );
};

export default SimpleHeader;
