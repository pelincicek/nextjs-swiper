import React from "react";
import CustomSlider from "./components/CustomSlider";

const SliderPage = () => {
  return (
    <div className="bg-white rounded-lg mx-4 p-4">
      <h1>Slider page</h1>
      <br />

      {/* Slider Component */}
      <CustomSlider />
    </div>
  );
};

export default SliderPage;
