import React from "react";

const PlayIcon = ({fill}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="43"
      height="43"
      viewBox="0 0 43 43"
      fill="none"
    >
      <path
        d="M4.31828 43C3.10048 43 2.11313 42.0126 2.11313 40.7948V2.20505C2.11313 0.987244 3.10048 0 4.31828 0L40.1516 19.846C40.1516 19.846 41.8055 21.4999 40.1516 23.1539C38.4978 24.8076 4.31828 43 4.31828 43Z"
        fill={fill ?? "white"}
      />
    </svg>
  );
};

export default PlayIcon;
