import React from "react";
import { Color, GlobalProps } from "../types";
import Card from "../Card";
import DateInput from "./DateInput";

export type FileUploadProps = GlobalProps & {
  background: Color
  label?: string
  hint?: string
  legend?: string
  dateAttribute?: string
  dateValue?: string
}

const FileUpload: React.FC<FileUploadProps>
  = ({ background, label, dateAttribute, dateValue, hint, legend, children }) => {
    return (
      <>
        {legend && <legend className="form-label">{legend}</legend>}
        <Card background={background} >
          <div className="row row align-items-center g-2">
            <div id="" className="col col-sm-12 col-md-4 flex-fill">
              <span>{label}</span>
            </div>
            <div id="" role="" className="col col-sm-12 col-md-auto d-md-flex align-items-center ms-md-auto gap-1">
              {dateAttribute &&
                <DateInput attribute={dateAttribute} value={dateValue} />
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
