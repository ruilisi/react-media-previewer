import Modal from "rc-dialog";
import React, { useState } from "react";
import File from "./File";
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
  name: string;
};

const PreviewModal: React.FC<PropType> = ({
  visible,
  setVisible,
  url,
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
            <AiOutlineDownload size="1.5rem" className={styles.previewIcon} />
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
                <AiOutlineCheck size="1.5rem" className={styles.previewIcon} />
              ) : (
                <AiOutlineShareAlt
                  size="1.5rem"
                  className={styles.previewIcon}
                />
              )}
            </span>
          </CopyToClipboard>
          <AiOutlineClose
            size="1.5rem"
            className={styles.previewIcon}
            onClick={() => setVisible(false)}
          />
        </div>
      </div>
      <File url={url} />
    </Modal>
  );
};

export default PreviewModal;
