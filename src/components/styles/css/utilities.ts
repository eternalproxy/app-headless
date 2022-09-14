import { css, Theme } from "@emotion/react";

export const utilities = (theme: Theme) => css`
  .text-red {
    color: ${theme.colors.danger["500"]};
  }

  .text-blue {
    color: ${theme.colors.primary["600"]};
  }
  .foot-note {
    font-size: 0.8rem;
  }
`;
