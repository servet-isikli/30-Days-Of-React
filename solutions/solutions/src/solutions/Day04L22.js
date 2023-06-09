import React from "react";

const divStyles = {
  backgroundColor: "#CCEEFF",
  borderRadius: "15px",
  paddingBottom: "10px",
};

const h1PStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const formStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "10px",
};

const formStylee = {
  display: "flex",
  justifyContent: "center",
  gap: "10px",
  border: "none",
  padding: "15px 35px",
  borderRadius: "10px",
};

const buttonStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};
const buttonStylee = {
  backgroundColor: "rgb(230, 130, 130)",
  margin: "1rem",
  fontSize: "1.2rem",
  padding: "8px 100px",
  color: "white",
  borderRadius: "10px",
  border: "none",
};

const Day04L22 = () => (
  <div style={divStyles}>
    <h1 style={h1PStyles}>SUBSCRIBE</h1>
    <p style={h1PStyles}>
      Sign up with your email address to receive news and updates
    </p>

    <form style={formStyle} action="" method="post">
      <input
        style={formStylee}
        type="text"
        name=""
        id=""
        placeholder="First Name"
      />
      <input
        style={formStylee}
        type="text"
        name=""
        id=""
        placeholder="Last Name"
      />
      <input
        style={formStylee}
        type="email"
        name=""
        id=""
        placeholder="Last Name"
      />
    </form>
    <div style={buttonStyle}>
      <button style={buttonStylee}> Subscribe</button>
    </div>
  </div>
);

export default Day04L22;
