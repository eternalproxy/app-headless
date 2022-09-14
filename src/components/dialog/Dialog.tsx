import { css, Theme, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { ReactElement } from "react";

interface Props {
  open: boolean;
  onClose?: () => void;
  children?: ReactElement;
}

export const Dialog = ({ open, children, onClose }: Props) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <dialog css={classes.root} open={open}>
      <div css={classes.dialogBox}>
        <button css={classes.closeButton} onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        {children}
      </div>
    </dialog>
  );
};

const useStyles = (theme: Theme) => ({
  root: css`
    display: none;
    z-index: 1000;
    background-color: #343a6aeb;
    border: none;
    align-items: center;
    justify-content: center;
    flexdirection: column;
    transition: opacity 0.1s ease-in-out 50ms;
    opacity: 0;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    &[open] {
      display: flex;
      opacity: 1;
    }
  `,
  dialogBox: css`
    background-color: #5286fe;
    min-width: 270px;
    max-width: 700px;
    position: relative;
  `,
  closeButton: css`
    --button-size: 25px;
    border-radius: var(--button-size);
    width: var(--button-size);
    height: var(--button-size);
    background: #e91b2e;
    z-index: 2001;
    color: #fff;
    border: none;
    justify-content: center;
    align-items: center;
    padding: 0;
    display: flex;
    position: absolute;
    top: -10px;
    right: -10px;
    box-shadow: 1px 1px 4px 2px #00000047;
    cursor: pointer;

    i {
      text-shadow: 0 4px #0003;
    }
  `,
});

export const DialogContent = styled("article")`
  color: white;
  padding: 2em 2.5em;
  text-align: center;
`;

export const DialogFooter = styled("footer")`
  display: flex;
  gap: 0;

  button {
    padding: 1em 0;
  }
`;
