import React from "react";
import type {JSX} from "react";
import { clx } from "../../../Utilities/clx";


type ButtonProps = {
    variant?: "contained" | "outlined" | "text";
    color?: "primary" | "secondary"
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const colors = {
  primary: "bg-primary-500",
  secondary: "bg-secondary-500",
};
 


export const Button :React.FC<ButtonProps> = ({
  variant = "contained",
  children,
  color = "primary",
  ...props
}): JSX.Element => {
  return (() => {
    switch (variant) {
      case "contained":
        return (
           <button 
           className= {clx("p-2 rounded-3xl " , colors[color])}
           {...props}
           >
      {children}
    </button>
        );
        case "outlined":
        return  <button {...props} >
      outlined
    </button>;
    default:
      return <button {...props}>
      outlined
    </button>;
    }
  }

  )();
};