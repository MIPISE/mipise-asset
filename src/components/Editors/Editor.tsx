// src/components/CodeEditor.tsx
import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { searchKeymap, highlightSelectionMatches } from "@codemirror/search";
import { keymap } from "@codemirror/view";
import { css } from "@codemirror/lang-css";
import { html } from "@codemirror/lang-html";
import { markdown } from "@codemirror/lang-markdown";

type CodeEditorProps = {
  value: string;
  language?: "html" | "css" | "markdown";
  onChange?: (value: string) => void;
};

const CodeEditor: React.FC<CodeEditorProps> = ({ value, language = "html", onChange }) => {
  const languageExtensions = {
    html: html(),
    css: css(),
    markdown: markdown(),
  };

  return (
    <div className="relative border rounded-lg overflow-hidden">
      <div className="headerEditor text-white px-2 py-1 d-flex justify-content-end">
        {language.toUpperCase()}
      </div>

      <CodeMirror
        value={value}
        height="250px"
        extensions={[
          languageExtensions[language] || html(),
          highlightSelectionMatches(),
          keymap.of(searchKeymap),
        ]}
        onChange={(val) => onChange?.(val)}
        theme="dark"
      />
    </div>
  );
};

export default CodeEditor;