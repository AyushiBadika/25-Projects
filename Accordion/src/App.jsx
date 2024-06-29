import "./App.css";
import { Link } from "react-router-dom";
export default function App() {
  return (
    <div className="flex flex-col p-10 ">
      <Link to="/accordion">Accordion</Link>
      <Link to="/color-generator"> Color Generator</Link>
      <Link to="/star-rating"> Star Rating</Link>
      <Link to="/image-slider"> Image Slider</Link>
    </div>
  );
}
