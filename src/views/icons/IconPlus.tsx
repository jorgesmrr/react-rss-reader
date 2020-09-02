import React from "react";
import IconProps from "./IconProps";

const IconPlus: React.FC<IconProps> = ({ testId, width, height, onClick }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    style={{ width, height }}
    data-test={testId}
    className="cursor-pointer"
    onClick={onClick}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
    />
  </svg>
);

export default IconPlus;
