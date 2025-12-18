import { useState } from "react";
const Choices = ({ choice, setchoice }) => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    alignItems: "center",
    margin: "0 auto 20px auto",
    padding: "0",
    fontFamily: "monospace",
  };

  return (
    <div style={containerStyle}>
      <style>
        {`
            .choice-btn {
                padding: 8px 20px;
                border: 2px solid black;
                border-radius: 15px;
                background-color: transparent;
                cursor: pointer;
                font-weight: bold;
                font-size: 1rem;
                transition: all 0.2s ease;
            }
            .choice-btn:hover {
                background-color: #f0f0f0;
                transform: translateY(-2px);
                box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            } 
            .choice-btn:active {
                background-color: black;
                color: white;
                transform: translateY(0px);
                box-shadow: none;
            }
        `}
      </style>

      <button className="choice-btn" onClick={() => setchoice("all")}>
        All
      </button>
      <button className="choice-btn" onClick={() => setchoice("completed")}>
        Completed
      </button>
    </div>
  );
};

export default Choices;
