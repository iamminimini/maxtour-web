export interface ModalInnerType {
  question_category?: undefined | string;
}

export type ModalType = {
  isOpen: boolean;
  innerData?: any;
};

export type DescriptionsProps = {
  key: string;
  label: string;
  span?: any;
};
