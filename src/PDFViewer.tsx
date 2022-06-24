import React from "react";
import { Document, pdfjs, Page } from "react-pdf";

type PropType = {
  url: string;
};

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFViewer: React.FC<PropType> = ({ url }) => {
  return (
    <Document file={url}>
      <Page pageNumber={1} />
    </Document>
  );
};

export default PDFViewer;
