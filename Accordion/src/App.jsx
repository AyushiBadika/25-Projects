// import Accordion from "./Accordion/Accordion";
// import ColorGenerator from "./ColorGenerator/ColorGenerator";
// import StarRating from "./StarRating/StarRating";

import "./App.css";
import ImageSlider from "./Image Sider/ImageSlider";

export default function App() {
  return (
    <>
      {/* <Accordion />
      <ColorGenerator /> */}
      {/* <StarRating noOfStars={8} /> */}
      <ImageSlider url="https://picsum.photos/v2/list?page=1" limit="10" />
    </>
  );
}
