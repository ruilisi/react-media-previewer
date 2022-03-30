import Modal from "rc-dialog";
import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

import styles from "./styles.module.css";
import {
  AiOutlineCheck,
  AiOutlineDownload,
  AiOutlineShareAlt,
  AiOutlineClose,
} from "react-icons/ai";

type PropType = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  url: string;
  type: string;
  name: string;
};

const PreviewModal: React.FC<PropType> = ({
  visible,
  setVisible,
  url,
  type,
  name,
}) => {
  const [copyed, setCopyed] = useState<boolean>(false);
  return (
    <Modal
      visible={visible}
      onClose={() => setVisible(false)}
      footer={null}
      zIndex={10000}
      closable={false}
      className={styles.modalContainer}
      wrapClassName={styles.modalWrap}
      transitionName=""
      maskTransitionName=""
    >
      <div className={styles.previewContainer}>
        <div className={styles.previewName}>{name}</div>
        <div className={styles.previewIcons}>
          <a href={`${url}?download/${name}`}>
            <AiOutlineDownload size="2rem" className={styles.previewIcon} />
          </a>
          <CopyToClipboard
            text={url}
            onCopy={() => {
              setCopyed(true);
              setTimeout(() => {
                setCopyed(false);
              }, 2000);
            }}
          >
            <span>
              {copyed ? (
                <AiOutlineCheck size="2rem" className={styles.previewIcon} />
              ) : (
                <AiOutlineShareAlt size="2rem" className={styles.previewIcon} />
              )}
            </span>
          </CopyToClipboard>
          <AiOutlineClose
            size="2rem"
            className={styles.previewIcon}
            onClick={() => setVisible(false)}
          />
        </div>
      </div>
      {type === "image" ? (
        <img alt="" src={url} className={styles.meidaContainer} />
      ) : (
        <video src={url} controls className={styles.mediaContainer}>
          <track kind="captions" />
        </video>
      )}
    </Modal>
  );
};

export default PreviewModal;
