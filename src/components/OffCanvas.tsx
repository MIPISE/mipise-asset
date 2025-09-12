import React from "react";
import {Color, Direction, GlobalProps} from "./types";
import CloseButton from "./Buttons/CloseButton";
import AbstractButton from "./Buttons/AbstractButton";
import LinkButton from "./Buttons/LinkButton";

export type OffCanvasProps = GlobalProps & {
  id: string
  title: string
  action?: string
  cancelText?: string
  direction?: Direction
  form?: boolean
  method?: "get" | "post"
  validationText?: string
}

const OffCanvas: React.FC<OffCanvasProps> = ({
  children,
  id,
  title,
  classes = "",
  action,
  cancelText,
  direction = Direction.END,
  form,
  method,
  validationText
}) => {
  const label = `${id}Label`;

  const body = () => {
    return (
      <div className="offcanvas-body overflow-auto">
        {children}
      </div>
    );
  };

  return (
    <>
      <div className={`offcanvas offcanvas-${direction} ${classes}`} tabIndex={-1} id={id} aria-labelledby={label}>
        <div className="offcanvas-header">
          <h2 className="h3 offcanvas-title" id={label}>
            {title}
          </h2>
          <CloseButton dismiss={"offcanvas"}></CloseButton>
        </div>
        {form
          ?
            <form className="d-flex flex-column h-100" action={action} method={method}>
              {body()}
              <div className="offcanvas-footer bg-white d-flex justify-content-end p-3 gap-1 border-top">
                <LinkButton color={Color.PRIMARY} data-bs-dismiss="offcanvas" type="button">{cancelText}</LinkButton>
                <AbstractButton color={Color.PRIMARY}>{validationText}</AbstractButton>
              </div>
            </form>
          : body()}
      </div>
    </>
  )
}

export default OffCanvas;
