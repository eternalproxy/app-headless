import { Container, Flex } from "../components/layout"
import { css, Theme, useTheme } from "@emotion/react"
import ReactTooltip from "react-tooltip"

const logo = new URL("../assets/logo.png", import.meta.url).toString()
const sunIcon = new URL("../assets/sun.png", import.meta.url).toString()
const moonIcon = new URL("../assets/moon.png", import.meta.url).toString()
const userDocsIcon = new URL(
  "../assets/userdocs.png",
  import.meta.url,
).toString()
const techDocsIcon = new URL(
  "../assets/techdocs.png",
  import.meta.url,
).toString()
const videoGuideIcon = new URL(
  "../assets/videoguide.png",
  import.meta.url,
).toString()
interface Props {
  onChangeTheme: () => void
}

export const Header = ({ onChangeTheme }: Props) => {
  const theme = useTheme()
  const classes = useStyles(theme)

  return (
    <header css={classes.root}>
      <Container>
        <Flex as="nav">
          <img src={logo} width="80" alt="Proxy" />
          <ul css={classes.menu}>
            <li css={classes.menuItem}>
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=RYSJL8Vm1AM"
                css={classes.menuLink}
                data-tip="Video guide"
              >
                <img src={videoGuideIcon} width="24" />
              </a>
            </li>
            <li css={classes.menuItem}>
              <a
                target="_blank"
                href="https://docs.epsproxy.com/v/user-documentation/"
                css={classes.menuLink}
                data-tip="User docs"
              >
                <img src={userDocsIcon} width="24" />
              </a>
            </li>
            <li css={classes.menuItem}>
              <a
                target="_blank"
                href="https://docs.epsproxy.com/"
                css={classes.menuLink}
                data-tip="Tech docs"
              >
                <img src={techDocsIcon} width="24" />
              </a>
            </li>
            <li css={classes.menuItem}>
              <button css={classes.menuLink} onClick={onChangeTheme}>
                <img
                  src={theme.name !== "light" ? sunIcon : moonIcon}
                  width="24"
                />
              </button>
            </li>
          </ul>
        </Flex>
      </Container>
    </header>
  )
}

const useStyles = (theme: Theme) => ({
  root: css`
    position: sticky;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    top: 0;
    background-color: ${theme.colors.primary["600"]};
    z-index: 99;
  `,
  menu: css`
    display: flex;
    align-items: center;
    gap: 2rem;
    margin: 0;
    padding: 0;
  `,
  menuItem: css`
    list-style: none;
  `,
  menuLink: css`
    border: none;
    background: none;
    cursor: pointer;
    filter: invert(100%);

    &:hover {
      opacity: 0.5;
    }
  `,
})
