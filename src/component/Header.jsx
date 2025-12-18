function Header() {
  const headerStyle = {
    fontFamily: "monospace",
    
    fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
    fontWeight: "bold",
    textAlign: "center",
    padding: "1rem",
    borderTop: "4px double black",
    borderBottom: "4px double black",
    backgroundColor: "#f0f0f0",
    
    width: "90%", 
    maxWidth: "600px",
    margin: "20px auto",
    boxSizing: "border-box",
  };

  return <div style={headerStyle}>TASK MANAGER</div>;
}

export default Header;
