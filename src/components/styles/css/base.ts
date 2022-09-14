import { css, Theme } from "@emotion/react";

export const base = (light: Theme, dark: Theme) => css`
:root {
--toastify-color-success: ${light.colors.primary["600"]};
}
  html[data-theme="light"] {
    --background: ${light.background};
    --foreground: ${light.foreground.body};
    --link-default: ${light.link.default};
    --link-active: ${light.link.active};
  }

  html[data-theme="dark"] {
    --background: ${dark.background};
    --foreground: ${dark.foreground.body};
    --link-default: ${dark.link.default};
    --link-active: ${dark.link.active};
  }

  body {
    background-color: var(--background);
    color: var(--foreground);
    font-family: ${light.font.family};
    font-weight: 500;
    line-height: 1.5;
    margin: 0;
    overflow-y: scroll;
  }

  a {
    color: var(--link-default);
    text-decoration: none;

    &:hover,
    &:active,
    &:focus {
      color: var(--link-active);
    }
  }
`;
