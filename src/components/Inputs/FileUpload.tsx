import React from "react";
import { Color } from "../types";
import Card, { CardProps } from "../Card";
import DateInput, { DateInputProps } from "./DateInput";

export type FileUploadProps = Omit<DateInputProps, "noLabel"> & {
  background: Color
  dateAttribute?: string
  dateValue?: string
  image?: boolean
  legend?: string
}

const FileUpload: React.FC<FileUploadProps>
  = ({ background, label, attribute, dateAttribute, dateValue, hint, legend, image, children }) => {
    return (
      <>
        {legend && <legend className="form-label">{legend}</legend>}
        <Card background={background} classes={"border-0"}>
          <div className="align-items-center">
            <div className="col col-sm-12 col-md-4 flex-fill">
              {image
                ? <img src={label} width="15%" alt={attribute} />
                : <span>{label}</span>
              }
            </div>
            <div className="col col-sm-12 col-md-auto d-md-flex align-items-center ms-md-auto gap-1">
              {dateAttribute &&
                <DateInput attribute={dateAttribute} noLabel={true} value={dateValue} classes={"align-items-strech"} />
              }
              {children}
            </div>
          </div>
        </Card>
        {hint && <small className="form-text text-muted">{hint}</small>}
      </>
    );
  };

export default FileUpload;
