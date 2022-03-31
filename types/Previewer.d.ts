import React from "react";
declare type PropType = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  url: string;
  type: string;
  name: string;
};
declare const PreviewModal: React.FC<PropType>;
export default PreviewModal;
