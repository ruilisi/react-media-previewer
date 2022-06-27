const isExtInclude = (filename: string, extList: string[]) => {
  const dotPos = filename.lastIndexOf(".");
  if (dotPos >= 0) {
    const ext = filename.substr(dotPos);
    return extList.includes(ext.toLowerCase());
  }
  return false;
};

const wordExts = [".docx", ".doc", ".rtf", ".html", ".odt"];
const excelExts = [
  ".xlsx",
  ".xls",
  ".csv",
  ".xlsb",
  ".xlsm",
  ".xlt",
  ".xltm",
  ".xltx",
];
const pptExts = [".ppt", ".pptx"];

export const isImageFile = (contentType: string) => {
  return contentType.startsWith("image");
};

export const isAudioFile = (contentType: string) => {
  return contentType.startsWith("audio");
};

export const isVideoFile = (contentType: string) => {
  return contentType.startsWith("video");
};

export const isPDFFile = (contentType: string) => {
  return contentType.startsWith("application/pdf");
};

export const isOfficeWordFile = (filename: string) => {
  return isExtInclude(filename, wordExts);
};

export const isOfficeExcelFile = (filename: string) => {
  return isExtInclude(filename, excelExts);
};

export const isOfficePPTFile = (filename: string) => {
  return isExtInclude(filename, pptExts);
};
