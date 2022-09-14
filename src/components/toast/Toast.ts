import { ReactNode } from "react";
import { toast, TypeOptions } from "react-toastify";

export class Toast {
  // @ts-ignore
  id: React.ReactText;
  constructor(message?: string) {
    if (message) {
      this.id = toast.loading(message);
    }
  }

  success(message: string | ReactNode) {
    if (!this.id) {
      this.id = toast.success(message)
    } else {
      this.show("success", message);
    }
  }

  error(message: string) {
    this.show("error", message);
  }

  loading(message: string) {
    this.id = toast.loading(message);
  }

  show(type: TypeOptions, render: string | ReactNode) {
    toast.update(this.id, { render, type, isLoading: false });
  }

  dismiss() {
    setTimeout(() => {
      toast.dismiss(this.id);
    }, 5000);
  }
}
