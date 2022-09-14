import { ReactElement } from "react";

export interface DialogOptions {
  title?: string | ReactElement;
  onClose?: () => void;
  render: (props: Pick<DialogOptions, "onClose">) => ReactElement;
}
