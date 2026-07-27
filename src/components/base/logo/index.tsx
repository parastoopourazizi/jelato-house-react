import type { JSX } from "react/jsx-runtime";
import type React from "react";

type LogoProps = {
    size?: "small" | "medium" | "large";
};

const Logo: React.FC<LogoProps> = ():JSX.Element => {
  return <img src="/assets/images/logo.png"/>
}


export default Logo