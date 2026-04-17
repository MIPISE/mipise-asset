import React, { useEffect, useState } from "react";
import { Color } from "../types";
import Card from "../Card";
import DateInput, { DateInputProps } from "./DateInput";

export type FileUploadProps = Omit<DateInputProps, "noLabel"> & {
  background: Color
  dateAttribute?: string
  dateValue?: string
  image?: boolean
  legend?: string
}

const FileUpload: React.FC<FileUploadProps> = ({
  background,
  label,
  attribute,
  dateAttribute,
  dateValue,
  hint,
  legend,
  image,
  children
}) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const handleChangeCapture: React.ChangeEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLInputElement;
    if (target && target.type === "file" && target.files && target.files[0]) {
      const next = URL.createObjectURL(target.files[0]);
      if (previewUrl) URL.revokeObjectURL(previewUrl);
      setPreviewUrl(next);
    }
  };

  return (
    <>
      {legend && <legend className="form-label">{legend}</legend>}
      <Card background={background} classes="border-0">
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2" onChangeCapture={handleChangeCapture}>
          <div className="col col-sm-12 col-md-4 flex-fill d-flex align-items-center">
            {image ? (
              <img
                src={previewUrl ?? (label as string)}
                width="15%"
                alt={attribute}
                style={{ maxHeight: "64px", objectFit: "contain" }}
              />
            ) : (
              <span>{label}</span>
            )}
          </div>
          <div className="col col-sm-12 col-md-auto d-md-flex align-items-center ms-md-auto gap-1">
            {dateAttribute && (
              <DateInput
                attribute={dateAttribute}
                noLabel={true}
                value={dateValue}
                classes="align-items-strech"
              />
            )}
            {children}
          </div>
        </div>
      </Card>
      {hint && <small className="form-text text-muted">{hint}</small>}
    </>
  );
};

export default FileUpload;
