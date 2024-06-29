import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accordion from "./Accordion/Accordion.jsx";
import ColorGenerator from "./ColorGenerator/ColorGenerator.jsx";
import StarRating from "./StarRating/StarRating.jsx";
import ImageSlider from "./ImageSlider/ImageSlider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/accordion" element={<Accordion />} />
      <Route path="/color-generator" element={<ColorGenerator />} />
      <Route path="/star-rating" element={<StarRating noOfStars={8} />} />
      <Route
        path="/image-slider"
        element={
          <ImageSlider url="https://picsum.photos/v2/list?page=1" limit="10" />
        }
      />
    </Routes>
    {/* <App /> */}
  </BrowserRouter>
);
