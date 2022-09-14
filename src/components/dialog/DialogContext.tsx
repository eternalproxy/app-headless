import { createContext, ReactElement, useContext, useState } from "react";
import { Button } from "../button";
import { Dialog, DialogContent, DialogFooter } from "./Dialog";
import { DialogOptions } from "./types";

interface DialogContextInterface {
  showDialog: (options: DialogOptions) => void;
  closeDialog: () => void;
}

const DialogContext = createContext<DialogContextInterface>(
  {} as DialogContextInterface
);

export const DialogProvider = (props: { children: ReactElement }) => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<DialogOptions | undefined>(
    {} as DialogOptions
  );

  const showDialog = (options: DialogOptions) => {
    setOpen(true);
    setOptions(options);
  };

  const closeDialog = () => {
    setOpen(false);
    setOptions(undefined);
  };

  return (
    <DialogContext.Provider
      value={{
        showDialog,
        closeDialog,
      }}
    >
      <Dialog open={open} onClose={closeDialog}>
        {options?.render ? options.render({ onClose: closeDialog }) : undefined}
      </Dialog>
      {props.children}
    </DialogContext.Provider>
  );
};

export const useDialog = () => {
  const { showDialog, closeDialog } = useContext(DialogContext);

  const popup = (message: string) => {
    showDialog({
      render: ({ onClose }) => (
        <>
          <DialogContent>
            <div>{message}</div>
          </DialogContent>
          <DialogFooter>
            <Button onClick={onClose}>OK</Button>
          </DialogFooter>
        </>
      ),
    });
  };

  return { showDialog, closeDialog, popup };
};
