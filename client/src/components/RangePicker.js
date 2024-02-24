import React from "react";
import { Typography } from "@mui/material";
import Slider from "@mui/material/Slider";

const RangePicker = ({ question, value, onChange }) => {
  const handleSliderChange = (event, newValue) => {
    onChange(newValue); // Call onChange prop with the new value
  };

  return (
    <div style={{ marginBottom: "5px" }}>
      <Typography variant="h6" gutterBottom style={{ color: "white" }}>
        {question}
      </Typography>

      <div style={{ display: "flex", alignItems: "center" }}>
        <Slider
          value={value}
          onChange={handleSliderChange}
          min={1}
          max={5}
          step={1}
          marks={[
            { value: 1, label: "1" },
            { value: 2, label: "2" },
            { value: 3, label: "3" },
            { value: 4, label: "4" },
            { value: 5, label: "5" },
          ]}
          aria-labelledby="slider-range"
        />
      </div>
    </div>
  );
};

export default RangePicker;
