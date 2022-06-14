import React from "react";
import mime from "mime-types";
import PDFViewer from "./PDFViewer";
import { isAudioFile, isImageFile, isPDFFile, isVideoFile } from "./utils";
import styles from "./styles.module.css";

type PropType = {
  url: string;
};

const PreviewModal: React.FC<PropType> = ({ url }) => {
  const type = mime.lookup(url) || "image";
  const mediaFile = () => {
    if (isImageFile(type))
      return <img alt="" src={url} className={styles.mediaContainer} />;
    if (isPDFFile(type))
      return (
        <div className={styles.mediaContainer}>
          <PDFViewer url={url} />
        </div>
      );
    if (isVideoFile(type) || isAudioFile(type))
      return (
        <video src={url} controls className={styles.mediaContainer}>
          <track kind="captions" />
        </video>
      );
    return (
      <div className={styles.flexCenter}>
        Unable to preview this unknown file
      </div>
    );
  };

  return mediaFile();
};

export default PreviewModal;
