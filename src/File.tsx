import React from "react";

import styles from "./styles.module.css";

type PropType = {
  url: string;
  type: string;
};

const PreviewModal: React.FC<PropType> = ({ url, type }) => {
  const mediaFile = () => {
    switch (type) {
      case "image":
        return <img alt="" src={url} className={styles.mediaContainer} />;
      case "audio":
      case "video":
        return (
          <video src={url} controls className={styles.mediaContainer}>
            <track kind="captions" />
          </video>
        );
      default:
        break;
    }
    return (
      <div className={styles.flexCenter}>
        Unable to preview this unknown file
      </div>
    );
  };

  return mediaFile();
};

export default PreviewModal;
