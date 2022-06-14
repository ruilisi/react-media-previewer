export const isImageFile = (contentType: string) => {
  return contentType.startsWith("image/");
};

export const isAudioFile = (contentType: string) => {
  return contentType.startsWith("audio/");
};

export const isVideoFile = (contentType: string) => {
  return contentType.startsWith("video/");
};

export const isPDFFile = (contentType: string) => {
  return contentType.startsWith("application/pdf");
};
