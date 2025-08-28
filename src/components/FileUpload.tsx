import React from "react";
import {Color, GlobalProps} from "./types";
import Card from "./Card";
import DateInput from "./Inputs/DateInput";

export type FileUploadProps = GlobalProps & {
  background: Color
  label: string
  dateAttribute?: string
  dateValue?: string
}

const FileUpload: React.FC<FileUploadProps>
  = ({ background, label, dateAttribute, dateValue, children }) => {
    return (
      <>
        <Card background={background} >
          <div className="row row align-items-center g-2">
            <div id="" className="col col-sm-12 col-md-4 flex-fill">
              <span>{label}</span>
            </div>
            <div id="" role="" className="col col-sm-12 col-md-auto d-md-flex align-items-center ms-md-auto gap-1">
              {dateAttribute &&
                  <DateInput attribute={dateAttribute} value={dateValue}/>
              }
              {children}
            </div>
          </div>
        </Card>
      </>
    );
  };

export default FileUpload;
