import { css } from "@emotion/react";

export const loading = css`
  [aria-busy="true"] {
    cursor: progress;
  }

  [aria-busy="true"]:not(input):not(select):not(textarea)::before {
    display: inline-block;
    width: 1em;
    height: 1em;
    border: 0.1875em solid currentColor;
    border-radius: 1em;
    border-right-color: transparent;
    content: "";
    vertical-align: text-bottom;
    vertical-align: -0.125em;
    -webkit-animation: spinner 0.75s linear infinite;
    animation: spinner 0.75s linear infinite;
    opacity: .5;
  }
  [aria-busy="true"]:not(input):not(select):not(textarea):not(:empty)::before {
    margin-right: calc(1rem * 0.5);
    margin-left: 0;
    -webkit-margin-start: 0;
    margin-inline-start: 0;
    -webkit-margin-end: calc(1rem * 0.5);
    margin-inline-end: calc(1rem * 0.5);
  }
  [aria-busy="true"]:not(input):not(select):not(textarea):empty {
    text-align: center;
  }

  button[aria-busy="true"],
  input[type="submit"][aria-busy="true"],
  input[type="button"][aria-busy="true"],
  input[type="reset"][aria-busy="true"],
  a[aria-busy="true"] {
    pointer-events: none;
  }

  @-webkit-keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
`;
