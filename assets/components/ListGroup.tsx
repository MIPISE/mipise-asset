import React, { ReactElement } from "react";
import { Colors } from "./types";
import Card, { CardProps } from "./Cards/Card";

export type DocumentDownloadProps = {
  label: ReactElement[] | string,
  CardProps: CardProps
}

const DocumentDownload: React.FC<DocumentDownloadProps>
  = ({ label, CardProps }) => {
    return (
      <>
        <Card {...CardProps} />
      </>
    );
  };

export default DocumentDownload;