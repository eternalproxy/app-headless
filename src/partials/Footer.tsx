import { Flex } from "../components/layout";
import { css, Theme, useTheme } from "@emotion/react";

export const Footer = () => {
  const theme = useTheme();
  const classes = useStyles(theme)

  return (
    <Flex as="footer" css={classes.root} mt={theme.spacing[5]}>
      <span>&copy; 2021</span>
      <a href="https://google.com" title="TERMS OF SERVICE">
        TERMS OF SERVICE
      </a>
      <a href="https://google.com" title="PRIVACY POLICY">
        PRIVACY POLICY
      </a>
    </Flex>
  );
};

const useStyles = (theme: Theme) => ({
  root: css`
    justify-content: center;
    gap: 2rem;
    margin-bottom: 2rem;

    a {
      color: ${theme.foreground.body};
    }

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  `,
});
