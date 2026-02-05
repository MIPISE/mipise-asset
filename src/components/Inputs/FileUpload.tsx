import React, { useEffect, useState } from "react";
import { Color } from "../types";
import Card from "../Card";
import DateInput, { DateInputProps } from "./DateInput";

export type FileUploadProps = Omit<DateInputProps, "noLabel"> & {
  background: Color;
  dateAttribute?: string;
  dateValue?: string;
  image?: boolean;
  legend?: string;
};

const FileUpload: React.FC<FileUploadProps> = ({
  background,
  label: initialLabel,
  attribute,
  dateAttribute,
  dateValue,
  hint,
  legend,
  image,
  children,
}) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const handleChangeCapture: React.ChangeEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLInputElement;
    if (target && target.type === "file" && target.files && target.files[0]) {
      const file = target.files[0];
      const next = URL.createObjectURL(file);

      if (previewUrl) URL.revokeObjectURL(previewUrl);

      setPreviewUrl(next);
      setFileName(file.name);
      setIsRemoved(false);

      const removeCheckbox = target.form?.querySelector(
        `input[name*="[remove_${attribute}]"]`,
      ) as HTMLInputElement;
      if (removeCheckbox) removeCheckbox.checked = false;
    }
  };

  const handleClickCapture: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLElement;
    const removeBtn = target.closest('[data-remove="true"]');

    if (removeBtn) {
      e.preventDefault();

      setPreviewUrl(null);
      setFileName(null);
      setIsRemoved(true);
      const fileInput = e.currentTarget.querySelector(
        'input[type="file"]',
      ) as HTMLInputElement;
      if (fileInput) fileInput.value = "";

      const form = removeBtn.closest("form");
      if (form && attribute) {
        const removeCheckbox = form.querySelector(
          `input[name*="[remove_${attribute}]"]`,
        ) as HTMLInputElement;
        if (removeCheckbox) {
          removeCheckbox.checked = true;
          console.log("Remove checkbox checked for", attribute);
        }
      }
    }
  };

  const currentLabel = isRemoved
    ? "Aucun fichier chargé"
    : fileName || initialLabel;
  const showImage =
    image &&
    !isRemoved &&
    (previewUrl ||
      (typeof initialLabel === "string" &&
        initialLabel.match(/\.(jpg|jpeg|png|gif)$/i)));
  const imageSrc =
    previewUrl || (typeof initialLabel === "string" ? initialLabel : undefined);

  return (
    <>
      {legend && <legend className="form-label">{legend}</legend>}
      <Card background={background} classes="border-0">
        <div
          className="d-flex align-items-center justify-content-between flex-wrap gap-2"
          onChangeCapture={handleChangeCapture}
          onClickCapture={handleClickCapture}
        >
          <div className="col col-sm-12 col-md-4 flex-fill d-flex align-items-center">
            {showImage ? (
              <img
                src={imageSrc}
                width="15%"
                alt={attribute}
                style={{ maxHeight: "64px", objectFit: "contain" }}
              />
            ) : (
              <span className="text-truncate" style={{ maxWidth: "250px" }}>
                {currentLabel}
              </span>
            )}
          </div>
          <div className="col col-sm-12 col-md-auto d-md-flex align-items-center ms-md-auto gap-1">
            {children}
          </div>
        </div>
      </Card>
      {hint && <span className="form-text text-muted">{hint}</span>}
    </>
  );
};

export default FileUpload;
