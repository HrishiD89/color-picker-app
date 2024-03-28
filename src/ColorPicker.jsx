import { useState } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState("FFFFFF");

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };
  return (
    <div className="canvas-container">
      <h1>Color Picker</h1>
      <div className="canvas-display" style={{ backgroundColor: color }}>
        <p>Selected Color : {color}</p>
      </div>
      <label>Pick a color!</label>
      <input type="color" value={color} onChange={handleColorChange} />
    </div>
  );
}
