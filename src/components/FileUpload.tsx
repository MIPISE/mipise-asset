import React from "react";
import { GlobalProps } from "./types";
import Card, { CardProps } from "./Card";
import IconButton, { IconButtonProps } from "./Buttons/IconButton";
import DateInput, { DateInputProps } from "./Inputs/DateInput";

export type FileUploadProps = GlobalProps & {
  CardProps: CardProps
  IconButtons?: IconButtonProps[]
  DateInputProps: DateInputProps
  label?: string
}

const FileUpload: React.FC<FileUploadProps>
  = ({ CardProps, IconButtons = [], DateInputProps, label, ...props }) => {
    return (
      <>
        <Card {...CardProps} >
          <div className="row row align-items-center g-2">
            <div id="" className="col col-sm-12 col-md-4 flex-fill">
              <span>{label}</span>
            </div>
            <div id="" role="" className="col col-sm-12 col-md-auto d-md-flex align-items-center ms-md-auto gap-1">
              <DateInput {...DateInputProps} />
              {IconButtons.slice(0, 2).map((btn, i) => (
                <IconButton key={i} {...btn} />
              ))}
            </div>
          </div>
        </Card>
      </>
    );
  };

export default FileUpload;
