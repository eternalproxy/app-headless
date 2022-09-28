import { css, Theme, useTheme } from "@emotion/react"
import { Card, CardContent, Container, Flex } from "../components/layout"
const bannerLogoLight = new URL(
  "../assets/banner-logo-light.png",
  import.meta.url,
).toString()
const bannerLogoDark = new URL(
  "../assets/banner-logo-dark.png",
  import.meta.url,
).toString()

export const Banner = () => {
  const theme = useTheme()
  const classes = useStyles(theme)
  return (
    <Container>
      <Flex mt="2rem" justifyContent="center" flexDirection="column">
        <Card mb="1rem" style={{ width: "100%" }}>
          <CardContent css={classes.announcement}>
            <span css={classes.exclamation}>!!</span>
            <span>
              {" "}
              <strong>Proxtober: </strong> Every proxy created from 1 to 31
              October UST enters the draw. 1 winner will receive 1 ETH.{" "}
              <a
                href="https://www.proxtober.com/"
                target="_blank"
                css={classes.announcementLink}
              >
                More details.
              </a>{" "}
            </span>
            <span css={classes.exclamation}>!!</span>
          </CardContent>
        </Card>
        <img
          src={theme.name === "light" ? bannerLogoLight : bannerLogoDark}
          width="120"
        />
      </Flex>
    </Container>
  )
}

const useStyles = (theme: Theme) => ({
  exclamation: css`
    font-size: 18px;
    font-weight: bold;
  `,
  announcement: css`
    text-align: center;
  `,
  announcementLink: css`
      color: ${theme.link.header};
      &:hover {
        color: $theme.link.active}!important;
      }
`,
})
