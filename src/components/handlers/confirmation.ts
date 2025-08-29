import {MouseEvent} from "react";

export default (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>, confirmText: string) => {
  const result = window.confirm(confirmText);
  if (!result)
    event.preventDefault();
}
