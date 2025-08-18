import React from "react";
import {Color, Direction, GlobalProps} from "./types";
import CloseButton from "./Buttons/CloseButton";
import AbstractButton from "./Buttons/AbstractButton";
import LinkButton from "./Buttons/LinkButton";

export type OffCanvasProps = GlobalProps & {
  action: string
  cancelText: string
  id: string
  method: "get" | "post"
  title: string
  validationText: string
  direction?: Direction
}

const OffCanvas: React.FC<OffCanvasProps> = ({
  action,
  cancelText,
  children,
  id,
  method,
  title,
  validationText,
  classes = "",
  direction = Direction.END
}) => {
  const label = `${id}Label`;

  return (
    <>
      <div className={`offcanvas offcanvas-${direction} ${classes}`} tabIndex={-1} id={id} aria-labelledby={label}>
        <div className="offcanvas-header">
          <h2 className="h3 offcanvas-title" id={label}>
            {title}
          </h2>
          <CloseButton dismiss={"offcanvas"}></CloseButton>
        </div>
        <form className="d-flex flex-column h-100" action={action} method={method}>
          <div className="offcanvas-body overflow-auto">
            {children}
          </div>
          <div className="offcanvas-footer bg-white d-flex justify-content-end p-3 gap-1 border-top">
            <LinkButton color={Color.PRIMARY} data-bs-dismiss="offcanvas" type="button">{cancelText}</LinkButton>
            <AbstractButton color={Color.PRIMARY}>{validationText}</AbstractButton>
          </div>
        </form>
      </div>
    </>
  )
}

export default OffCanvas;
