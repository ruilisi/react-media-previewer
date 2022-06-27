import Modal from "rc-dialog";
import React, { useState } from "react";
import File from "./File";
import CopyToClipboard from "react-copy-to-clipboard";

import styles from "../styles/styles.module.css";
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
      maskClosable={false}
      className={styles.modalContainer}
      wrapClassName={styles.modalWrap}
      transitionName=""
      maskTransitionName=""
    >
      <div className="flex w-full items-center justify-end fixed top-6 right-4">
        <div className="flex">
          <a
            href={`${url}?download/${name}`}
            className="my-auto mx-4 bg-black rounded-full p-2"
          >
            <AiOutlineDownload
              size="1.5rem"
              className="text-white hover:text-red-500 cursor-pointer"
            />
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
            <a className="my-auto mx-4 bg-black rounded-full p-2">
              {copyed ? (
                <AiOutlineCheck
                  size="1.5rem"
                  className="text-white hover:text-red-500 cursor-pointer"
                />
              ) : (
                <AiOutlineShareAlt
                  size="1.5rem"
                  className="text-white hover:text-red-500 cursor-pointer"
                />
              )}
            </a>
          </CopyToClipboard>
          <a className="my-auto mx-4 bg-black rounded-full p-2">
            <AiOutlineClose
              size="1.5rem"
              className="text-white hover:text-red-500 cursor-pointer"
              onClick={() => setVisible(false)}
            />
          </a>
        </div>
      </div>
      <File url={url} />
    </Modal>
  );
};

export default PreviewModal;
