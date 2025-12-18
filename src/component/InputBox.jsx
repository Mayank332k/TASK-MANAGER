import { useState } from "react";

const InputBox = ({ addtask }) => {
  const [text, setText] = useState("");

  const onchangeHandeler = (event) => {
    setText(event.target.value);
  };

  const onKeyDownHandler = (event) => {
    if (event.key === "Enter") {
      if (text.trim() === "") return;
      addtask(text);
      setText("");
    }
  };

  // actual component -->-->-->-->-->-->-->-->-->-->-->-->-->-->-->-->
  const containerStyle = {
    display: "flex",
    gap: "10px",
    width: "90%",
    maxWidth: "600px",
    margin: "20px auto",
    fontFamily: "monospace",
  };

  const inputStyle = {
    flex: 1,
    padding: "10px",
    border: "2px solid black",
    fontSize: "1rem",
    outline: "none",
    borderRadius: "10px",
  };

  return (
    <div style={containerStyle}>
      <style>
        {`
                    .add-btn {
                        padding: 10px 20px;
                        border: 2px solid black;
                        border-radius: 10px; /* Added radius here */
                        background-color: #e0e0e0;
                        font-weight: bold;
                        font-size: 1rem;
                        cursor: pointer;
                        transition: all 0.1s ease;
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
                `}
      </style>

      <input
        type="text"
        placeholder="Enter a task..."
        style={inputStyle}
        onChange={onchangeHandeler}
        onKeyDown={onKeyDownHandler}
        value={text}
      />
      <button
        className="add-btn"
        onClick={() => {
          addtask(text);
          setText("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default InputBox;
