import { useEffect, useState } from "react";
import "./ColorGenerator.css";
export default function ColorGenerator() {
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
        <button className="cg-button" onClick={() => setColorType("hex")}>
          Generate Hex Color
        </button>
        <button className="cg-button" onClick={() => setColorType("rgb")}>
          Gereate RGB Color
        </button>
        <button
          className="cg-button"
          onClick={
            colorType === "hex"
              ? () => generateHexColor()
              : () => generateRGBColor()
          }
        >
          Generate Color
        </button>
      </div>
      <h2 style={{ color: "white" }} className="text-3xl font-bold">
        {colorType === "hex" ? "Hex Color :" : "RGB Color"}
      </h2>
      <h1 style={{ color: "white" }} className="text-4xl font-bold">
        {color}
      </h1>
    </div>
  );
}
