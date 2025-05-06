import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
const SVGComponentLogo = (props) => (
  <Svg
    width={193}
    height={150}
    viewBox="0 0 193 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_2_244)">
      <Path
        d="M100.543 45.6529V33.6024H60.9671V116.398H100.543V104.347C92.4363 104.347 84.6608 101.255 78.9284 95.7513C73.1956 90.2478 69.9752 82.7834 69.9752 75C69.9752 67.2166 73.1956 59.752 78.9284 54.2485C84.6608 48.7448 92.4363 45.6529 100.543 45.6529Z"
        fill="#228B22"
      />
      <Path
        d="M100.546 45.6529V104.347C108.653 104.347 116.429 101.255 122.161 95.7513C127.894 90.2475 131.114 82.7831 131.114 75C131.114 67.2166 127.894 59.752 122.161 54.2485C116.429 48.7448 108.653 45.6529 100.546 45.6529Z"
        fill="#FFD700"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_2_244">
        <Rect width={192.081} height={150} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SVGComponentLogo;
