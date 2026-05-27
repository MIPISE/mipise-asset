import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { searchKeymap, highlightSelectionMatches } from "@codemirror/search";
import { EditorView, keymap } from "@codemirror/view";
import { css } from "@codemirror/lang-css";
import { html } from "@codemirror/lang-html";
import { markdown } from "@codemirror/lang-markdown";
import { tokyoNight } from "@uiw/codemirror-theme-tokyo-night";

type CodeEditorProps = {
  value: string;
  language?: "html" | "css" | "markdown";
  onChange?: (value: string) => void;
};

const CodeEditor: React.FC<CodeEditorProps> = ({ value, language = "html", onChange }) => {
  const [copied, setCopied] = useState(false);

  const languageExtensions = {
    html: html(),
    css: css(),
    markdown: markdown(),
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value || "");
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      console.warn("Clipboard copy failed", e);
    }
  };

  return (
    <div className="relative rounded-lg overflow-hidden">
      <div className="Custom_Editor px-2 py-1 d-flex justify-content-between align-items-center">
        <span className="Custom_Editor__label">{language.toUpperCase()}</span>
        <button
          type="button"
          onClick={handleCopy}
          className="Custom_Editor__copy"
          aria-label="Copier le contenu de l'éditeur"
          title={copied ? "Copié !" : "Copier"}
        >
          {copied ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          )}
        </button>
      </div>

      <CodeMirror
        value={value}
        height="350px"
        extensions={[
          languageExtensions[language] || html(),
          highlightSelectionMatches(),
          keymap.of(searchKeymap),
          EditorView.lineWrapping,
        ]}
        onChange={(val) => onChange?.(val)}
        theme={tokyoNight}
      />
    </div>
  );
};

export default CodeEditor;
