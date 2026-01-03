import React, { useState } from "react";

function InputForm() {
  const [text, setText] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h2>Live Input Value</h2>

      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>You typed: <strong>{text}</strong></p>
    </div>
  );
}

export default InputForm;
