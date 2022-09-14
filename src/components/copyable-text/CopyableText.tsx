import { css, Theme, useTheme } from "@emotion/react"
import { useEffect, useRef, useState } from "react"
import { Flex } from "../layout"
import copy from "copy-to-clipboard"
import { getFormattedAddress } from "../../utils"
const copyIcon = new URL("../../assets/copy.png", import.meta.url).toString()
const checkIcon = new URL("../../assets/check.svg", import.meta.url).toString()

interface Props {
  text: string
  cut?: boolean
}

export const CopyableText = (props: Props) => {
  const { text, cut } = props
  const theme = useTheme()
  const classes = useStyles(theme)
  const [icon, setIcon] = useState(copyIcon)
  const textRef = useRef() as React.MutableRefObject<HTMLAnchorElement>
  const [value, setValue] = useState(text)

  const handleCopy = () => {
    copy(text)
    setIcon(checkIcon)
    setTimeout(() => {
      setIcon(copyIcon)
    }, 1000)
  }

  const updateValue = () => {
    if (!textRef || !textRef.current) {
      return
    }
    const availableWidth = textRef.current.clientWidth
    if (availableWidth >= 380) {
      setValue(text)
      return
    }
    const addr = text
    const len = addr.length
    const availableChar = Math.floor(availableWidth / 9.8)

    if (availableChar < len) {
      const _value = getFormattedAddress(addr, availableChar - 4, 4)
      setValue(_value)
    } else {
      setValue(text)
    }
  }

  useEffect(() => {
    if (!cut) {
      window.addEventListener("resize", updateValue)
      updateValue()

      return () => {
        window.removeEventListener("resize", updateValue)
      }
    }
  }, [text])

  return (
    <Flex css={classes.root}>
      <a
        ref={textRef}
        href={`https://etherscan.io/address/${text}`}
        css={classes.text}
        target="_blank"
        rel="noopener noreferrer"
      >
        {cut ? getFormattedAddress(text) : value ? value : text}
      </a>
      <button css={classes.button} onClick={handleCopy}>
        <img src={icon} width="16" />
      </button>
    </Flex>
  )
}

const useStyles = (theme: Theme) => ({
  root: css`
    justify-content: flex-start;
    align-items: stretch;
    border-radius: 0.25rem;
    gap: 0.5rem;
    position: relative;
    overflow: hidden;
  `,
  text: css`
    width: 100%;

    line-height: 1;
    white-space: nowrap;
    overflow: hidden;
    color: ${theme.address.color};
    margin-left: auto;
  `,
  button: css`
    display: flex;
    gap: 0.25rem;
    align-items: center;
    cursor: pointer;
    background: none;
    border: none;

    img {
      ${theme.name === "dark" && `filter: contrast(0);`}
    }

    &:hover {
      img {
        filter: opacity(0.5);
        ${theme.name === "dark" && `filter: contrast(0) opacity(.5);`}
      }
    }
  `,
})
