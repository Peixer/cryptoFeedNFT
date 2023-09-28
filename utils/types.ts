/* eslint-disable no-unused-vars */
export interface ImageProps {
  id: string;
  media_type: string;
  media_url: string;
  username: string;
  timestamp?: string;
}

export interface SharedModalProps {
  index: number;
  images?: ImageProps[];
  currentPhoto?: ImageProps;
  changePhotoId: (newVal: number) => void;
  closeModal: () => void;
  navigation: boolean;
  direction?: number;
}
