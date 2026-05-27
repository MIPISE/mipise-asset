import React, { useState } from "react";
import CodeEditor from "./Editor";

type FormEditorProps = {
  value?: string;
  language?: "html" | "css" | "markdown";
  inputName: string;
  inputId?: string;
};

const FormEditor: React.FC<FormEditorProps> = ({
  value = "",
  language = "html",
  inputName,
  inputId,
}) => {
  const [current, setCurrent] = useState<string>(value || "");

  return (
    <>
      <input
        type="hidden"
        name={inputName}
        id={inputId}
        value={current}
        readOnly
      />
      <CodeEditor value={current} language={language} onChange={setCurrent} />
    </>
  );
};

export default FormEditor;
