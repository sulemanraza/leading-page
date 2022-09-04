import React from "react";

const Mobile = ({ height }: any) => {
  return (
    <svg
      height={height}
      viewBox="0 0 559 865"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g filter="url(#filter0_d_1_97)">
        <rect x="93" y="53" width="373" height="679" fill="url(#pattern0)" />
      </g>
      <defs>
        <filter
          id="filter0_d_1_97"
          x="0"
          y="0"
          width="559"
          height="865"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="9"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_1_97"
          />
          <feOffset dy="40" />
          <feGaussianBlur stdDeviation="42" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_97"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_97"
            result="shape"
          />
        </filter>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_1_97"
            transform="translate(0 -0.00119946) scale(0.000572738 0.000314626)"
          />
        </pattern>
        <image
          id="image0_1_97"
          width="1746"
          height="3186"
        />
      </defs>
    </svg>
  );
};

export default Mobile;