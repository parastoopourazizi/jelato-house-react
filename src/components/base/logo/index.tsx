import type { JSX } from "react/jsx-runtime";
import type React from "react";

type LogoProps = {
    size?: "small" | "medium" | "large";
};
const sizes = {
  small: { width: 100, height: 50},
  medium: { width: 150, height: 75},
  large: { width: 200, height: 100},

}

const Logo: React.FC<LogoProps> = ({size = "small"}):JSX.Element => {
  return <img src="/assets/images/logo.png"
  width={sizes[size].width}
  height={sizes[size].height}/>
}


export default Logo