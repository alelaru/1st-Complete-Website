import React from "react";
import { CustonButtonContainer } from "./custom-button.styles";

function CustomButton({ children, ...props }) {
  return <CustonButtonContainer {...props}>{children}</CustonButtonContainer>;
}

export default CustomButton;
