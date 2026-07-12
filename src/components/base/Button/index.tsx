import React from "react";


type ButtonProps = {
    variant?: "contained" | "outlined" | "text";
} & React.PropsWithChildren;
 
const ButtonFactory = {
  contained: () => (
    <button style={{backgroundColor: "blue", color: "white"}}>
      contained
    </button>
  ),
  outlined: () => (
    <button style={{ border:"2px solid blue",
     color: "blue",
     backgroundColor: "transparent"}}>
      outlined
    </button>
  ),
   text: () => (
    <button style={{
     backgroundColor: "transparent",
     color: "blue"}}>
      outlined
    </button>
   )
}

export const Button :React.FC<ButtonProps> = ({variant = "contained"}) => {
  return ButtonFactory[variant]();
};