export interface ModalInnerType {
  email: string;
  category?: string | undefined;
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

export interface ModalFormType {
  category: string | undefined;
  email: string;
  phone?: string;
  contents: string;
  agreement: boolean;
}
