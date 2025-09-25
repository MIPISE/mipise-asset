import React from "react";
import { Color } from "../types";
import Card from "../Card";
import DateInput, {DateInputProps} from "./DateInput";

export type FileUploadProps = Omit<DateInputProps, "noLabel"> & {
  background: Color
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
            <div className="col col-sm-12 col-md-4 flex-fill">
              <span>{label}</span>
            </div>
            <div className="col col-sm-12 col-md-auto d-md-flex align-items-center ms-md-auto gap-1">
              {dateAttribute &&
                <DateInput attribute={dateAttribute} noLabel={true} value={dateValue} />
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
