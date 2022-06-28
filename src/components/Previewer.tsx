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
  AiOutlineRight,
  AiOutlineLeft,
} from "react-icons/ai";

type PropType = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  urls: string[];
};

const PreviewModal: React.FC<PropType> = ({ visible, setVisible, urls }) => {
  const [copyed, setCopyed] = useState<boolean>(false);
  const [currentUrl, setCurrentUrl] = useState(urls[0]);
  const [index, setIndex] = useState(0);
  return (
    <Modal
      visible={visible}
      onClose={() => setVisible(false)}
      footer={null}
      zIndex={10000}
      destroyOnClose
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
            href={`${currentUrl}?download/${currentUrl.split("/").pop()}`}
            className="my-auto mx-4 bg-black rounded-full p-2"
          >
            <AiOutlineDownload
              size="1.5rem"
              className="text-white hover:text-red-500 cursor-pointer"
            />
          </a>
          <CopyToClipboard
            text={currentUrl}
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
      <File url={currentUrl} />
      <a
        className={`my-auto mx-4 bg-black rounded-full p-3 fixed md:top-1/2 md:bottom-auto left-2 sm:bottom-8 sm:top-auto ${
          index === 0 ? "hidden" : "block"
        }`}
        onClick={() => {
          setIndex(index - 1);
          setCurrentUrl(urls[index - 1]);
        }}
      >
        <AiOutlineLeft
          size="2rem"
          className="text-white hover:text-red-500 cursor-pointer"
        />
      </a>
      <a
        className={`my-auto mx-4 bg-black rounded-full p-3 fixed md:top-1/2 md:bottom-auto right-2 sm:bottom-8 sm:top-auto ${
          index + 1 === urls.length ? "hidden" : "block"
        }`}
        onClick={() => {
          setIndex(index + 1);
          setCurrentUrl(urls[index + 1]);
        }}
      >
        <AiOutlineRight
          size="2rem"
          className="text-white hover:text-red-500 cursor-pointer"
        />
      </a>
    </Modal>
  );
};

export default PreviewModal;
