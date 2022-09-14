import { ThemeProvider } from "@emotion/react";
import { injectGlobal } from "@emotion/css";
import { ReactElement } from "react";
import normalize from "./css/normalize";
import { base } from "./css/base";
import { utilities } from "./css/utilities";
import { loading } from "./css/loading";
import { darkTheme, lightTheme } from "./theme";

interface Props {
  children: ReactElement;
  userTheme: string;
}

injectGlobal`
${normalize}
${base(lightTheme, darkTheme)}
${utilities(lightTheme)}
${loading}
`;

export const StylesProvider = ({ children, userTheme }: Props) => {
  const getTheme = () => {
    return userTheme === "light" ? lightTheme : darkTheme;
  }

  return <ThemeProvider theme={getTheme}>{children}</ThemeProvider>;
};
