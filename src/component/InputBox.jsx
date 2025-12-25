import { useState } from "react";

const InputBox = ({ addtask }) => {
  const [text, setText] = useState("");

  const onchangeHandeler = (event) => {
    setText(event.target.value);
  };

  const handleAdd = () => {
    if (text.trim() === "") return;
    addtask(text);
    setText("");
  };

  const onKeyDownHandler = (event) => {
    if (event.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div className="input-container">
      <style>
        {`
          /* Base Container Styles */
          .input-container {
            display: flex;
            gap: 10px;
            width: 95%; /* Mobile first: take almost full width */
            max-width: 600px; /* Tablet/Desktop restriction */
            margin: 20px auto;
            font-family: monospace;
            box-sizing: border-box;
          }

          /* Input Field Styles */
          .task-input {
            flex: 1; /* Take all available space */
            min-width: 0; /* Crucial: allows input to shrink on tiny screens */
            padding: 12px 15px; /* Large padding for easy tapping */
            border: 2px solid black;
            font-size: 16px; /* Prevents auto-zoom on iPhones */
            outline: none;
            border-radius: 10px;
            background-color: white;
            transition: border-color 0.2s;
            -webkit-appearance: none; /* Removes default iOS styling */
          }
          
          .task-input:focus {
            border-color: #555;
          }

          /* Button Styles */
          .add-btn {
            padding: 12px 24px;
            border: 2px solid black;
            border-radius: 10px;
            background-color: #e0e0e0;
            font-weight: bold;
            font-size: 1rem;
            cursor: pointer;
            white-space: nowrap; /* Prevents text wrapping */
            transition: all 0.1s ease;
            -webkit-tap-highlight-color: transparent; /* Removes blue tap highlight on mobile */
            user-select: none;
          }

          .add-btn:hover {
            background-color: #d0d0d0;
            transform: translateY(-2px);
          }

          .add-btn:active {
            background-color: black;
            color: white;
            transform: translateY(0px);
          }

          /* Mobile Optimization (Tiny screens < 350px) */
          @media (max-width: 350px) {
            .input-container {
                gap: 5px;
                width: 100%;
                padding: 0 5px;
            }
            .add-btn {
                padding: 12px 15px; /* Smaller button for very small screens */
            }
            .task-input {
                font-size: 14px; /* Slightly smaller text if screen is super tiny */
            }
          }
        `}
      </style>

      <input
        type="text"
        placeholder="Enter a task..."
        className="task-input"
        onChange={onchangeHandeler}
        onKeyDown={onKeyDownHandler}
        value={text}
      />
      <button
        className="add-btn"
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
};

export default InputBox;