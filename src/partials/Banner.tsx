import { useTheme } from "@emotion/react";
import { Flex } from "../components/layout";
const bannerLogoLight = new URL("../assets/banner-logo-light.png", import.meta.url).toString()
const bannerLogoDark = new URL("../assets/banner-logo-dark.png", import.meta.url).toString()

export const Banner = () => {
  const theme = useTheme()
  return (
    <Flex mt="5rem" justifyContent="center">
      <img src={theme.name === "light" ? bannerLogoLight : bannerLogoDark} width="120" />
    </Flex>
  );
};
