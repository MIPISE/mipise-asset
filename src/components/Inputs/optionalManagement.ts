import React, {RefObject} from "react";

export default (inputRef: RefObject<any>, setIsRequired: (value: boolean) => void): React.EffectCallback => {
  return () => {
    if (inputRef.current) {
      const observer = new MutationObserver((mutations: MutationRecord[]) => {
        for (const mutation of mutations) {
          if (mutation.type === "attributes" && mutation.attributeName === "required") {
            const currentRequired = inputRef.current.hasAttribute("required");
            setIsRequired(currentRequired);
          }
        }
      });

      const observerConfig = {attributes: true, attributeFilter: ["required"]};
      observer.observe(inputRef.current, observerConfig);

      return () => {
        observer.disconnect();
      };
    }
  };
}
