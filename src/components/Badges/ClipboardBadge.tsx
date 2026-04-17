import React, { useState } from "react";
import { Color, Size } from "../types";
import { AbstractBadgeProps } from "./AbstractBadge";

export type ClipboardBadgeProps = AbstractBadgeProps & {
  sizeClipboard?: Size;
  colorClipboard?: Color;
  valueToCopy?: string; // Nouvelle prop pour forcer le texte à copier
};

const ClipboardBadge: React.FC<ClipboardBadgeProps> = ({
  color,
  size,
  variant,
  children,
  rounded,
  sizeClipboard = Size.EXTRASMALL,
  colorClipboard,
  valueToCopy, // On récupère la prop
  classes = "",
  ...props
}) => {
  const [isCopied, setIsCopied] = useState(false);

  // Si valueToCopy existe, on l'utilise. Sinon, on essaie de prendre le children textuel.
  const textToCopy = valueToCopy || (typeof children === "string" ? children : "");

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!textToCopy) return;

    try {
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);
      
      // Remet l'icône normale après 2 secondes
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <div
      className={`badge badge-${color}${size ? ` badge-${size}` : ""}${variant ? ` badge-${variant}` : ""}${rounded ? ` badge-${rounded}` : ""} ${classes}`}
      {...props}
    >
      <span className={`textToCopy me-1`}>
        {children}
      </span>
      <button
        type="button"
        className={`copyButton btn btn-${colorClipboard || "link"} btn-${sizeClipboard} btn-square p-0 border-0`}
        onClick={handleCopy}
        title="Copier"
        style={{ lineHeight: 1, verticalAlign: 'middle', opacity: 0.7 }}
      >
        {/* Change l'icône si copié */}
        <i className={isCopied ? "fi fi-rs-check text-success" : "fi fi-rs-copy"}></i>
      </button>
    </div>
  );
};

export default ClipboardBadge;
