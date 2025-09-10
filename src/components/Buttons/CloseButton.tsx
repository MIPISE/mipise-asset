import React from "react";
import {GlobalProps} from "../types";

type CloseButtonProps = GlobalProps & {
  dismiss: "alert" | "modal" | "offcanvas"
}

const CloseButton: React.FC<CloseButtonProps> = ({
  dismiss,
  classes = "",
  ...props
}) => {
  return (
    <button className={`btn btn-close ${classes}`} data-bs-dismiss={dismiss} aria-label="Close" {...props}></button>
  );
};

export default CloseButton;
