import React, { useState } from "react";

function Seemore() {
  const [see, setSee] = useState([
    { id: 1, text: "Show More" },
    { id: 2, text: "Show More" },
    // {id:, text: 'Show More'},
  ]);

  const handleSee = (id) => {
    const updatedSee = see.map((div) =>
      div.id === id ? { ...div, text: "Show less" } : div
    );
    setSee(updatedSee);
  };
  return (
    <div>
      {see.map((div) => (
        <span key={div.id} onClick={() => handleSee(div.id)}>
          Div {div.id}: {div.text}
        </span>
      ))}
    </div>
  );
}

export default Seemore;
