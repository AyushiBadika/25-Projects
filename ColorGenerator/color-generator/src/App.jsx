import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("");

  const randomNumber = (length) => {
    return Math.floor(Math.random() * length);
  };

  const generateHexColor = () => {
    const hexString = "0123456789ABCDEF";
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hexString.charAt(randomNumber(hexString.length));
    }

    setColor(hexColor);
  };
  const generateRGBColor = () => {
    setColor(
      `rgb(${randomNumber(255)},${randomNumber(255)},${randomNumber(255)})`
    );
  };

  useEffect(() => {
    if (colorType === "hex") generateHexColor();
    else generateRGBColor();
  }, [colorType]);
  return (
    <div
      style={{
        backgroundColor: color,
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "20px",
        flexDirection: "column",
        gap: "50px",
      }}
    >
      <div>
        <button onClick={() => setColorType("hex")}>Generate Hex Color</button>
        <button onClick={() => setColorType("rgb")}>Gereate RGB Color</button>
        <button
          onClick={
            colorType === "hex"
              ? () => generateHexColor()
              : () => generateRGBColor()
          }
        >
          Generate Color
        </button>
      </div>
      <h2 style={{ color: "white" }}>
        {colorType === "hex" ? "Hex Color :" : "RGB Color"}
      </h2>
      <h1 style={{ color: "white" }}>{color}</h1>
    </div>
  );
}
