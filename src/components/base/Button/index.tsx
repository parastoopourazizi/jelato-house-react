import React from "react";


type ButtonProps = {
    variant?: "contained" | "outlined" | "text";
} & React.PropsWithChildren & React.ButtonHTMLAttributes<HTMLButtonElement>;
 
const ButtonFactory = {
  contained: (props) => (
    <button className="p-2 bg-red-100 rounded-4xl " {...props}>
      contained
    </button>
  ),
  outlined: (props) => (
    <button {...props} >
      outlined
    </button>
  ),
   text: (props) => (
    <button {...props}>
      outlined
    </button>
   )
}

export const Button :React.FC<ButtonProps> = ({
  variant = "contained",
  ...props
}) => {
  return ButtonFactory[variant](props);
};