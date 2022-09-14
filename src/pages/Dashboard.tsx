import { ReactElement, useEffect, useState } from "react"
import { css, Theme, useTheme } from "@emotion/react"
import { CopyableText } from "../components/copyable-text"
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Container,
  Flex,
} from "../components/layout"
import { Banner } from "../partials"
import * as ethers from "ethers"
import { abi } from "../abi"
import { useDialog } from "../components/dialog"
import { Toast } from "../components/toast"
import { isValidAddress } from "../utils"
import ReactTooltip from "react-tooltip"
import { usePrevious } from "../hooks"

interface Result {
  title: ReactElement | string
  status: ReactElement | string
  hotAddress: string
  coldAddress: string
  deliveryAddress: string
}

const defaultResult = {
  title: "No Proxy Record",
  status: "None",
  hotAddress: "0x0000000000000000000000000000000000000000",
  coldAddress: "0x0000000000000000000000000000000000000000",
  deliveryAddress: "0x0000000000000000000000000000000000000000",
}

const Dashboard = () => {
  const theme = useTheme()
  const classes = useStyles(theme)
  const [input, setInput] = useState("")
  const { popup } = useDialog()
  const [result, setResult] = useState<Result>(defaultResult)
  const [loading, setLoading] = useState(false)

  const isChanging = (a?: Result, b?: Result) => {
    if (!a || !b) {
      return true
    }
    console.log(a.title, b.title)
    console.log(
      a.title !== b.title ||
        a.status !== b.status ||
        a.hotAddress !== b.hotAddress ||
        a.coldAddress !== b.coldAddress ||
        a.deliveryAddress !== b.deliveryAddress,
    )
    return (
      a.title !== b.title ||
      a.status !== b.status ||
      a.hotAddress !== b.hotAddress ||
      a.coldAddress !== b.coldAddress ||
      a.deliveryAddress !== b.deliveryAddress
    )
  }

  useEffect(() => {
    let isCancelled = false
    let timeout: any
    let reload = false
    const handle = (prevResult?: Result) => {
      changeLoading(reload, true)
      if (!input) {
        return
      }
      lookup(input)
        .then((_result) => {
          if (!isCancelled) {
            if (isChanging(prevResult, _result as any)) {
              const notify = new Toast()
              notify.success("New EPS details found")
              notify.dismiss()

              if (reload) {
                setLoading(true)
                setTimeout(() => {
                  setLoading(false)
                }, 500)
              }
            }

            setResult(_result as any)
            changeLoading(reload, false)

            timeout = setTimeout(() => {
              reload = true
              handle(_result as any)
            }, 2000)
          }
        })
        .catch((e) => {
          if (!isCancelled) {
            const error = e as any
            changeLoading(reload, false)
            if (error.message !== "Invalid address") {
              popup(error.message)
            }
          }
        })
    }

    if (input) {
      handle()
    } else {
      setResult(defaultResult)
    }

    return () => {
      isCancelled = true
      changeLoading(reload, false)
      clearTimeout(timeout)
    }
  }, [input])

  const changeLoading = (reload: boolean, _loading: boolean) => {
    if (!reload) {
      setLoading(_loading)
    }
  }

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value)
  }

  return (
    <Container>
      <Banner />
      <Flex css={classes.content} mt="5rem" mb="5rem">
        <Box css={classes.lookupBox}>
          <Card mb="1rem" style={{ width: "100%" }}>
            <CardHeader>
              <CardTitle>
                Link your hot and cold wallets{" "}
                <a
                  href="https://eternalproxy.com/setting-up-a-proxy/#steps"
                  target="_blank"
                >
                  (click for instructions)
                </a>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol css={classes.instructions}>
                <li css={classes.stepItem}>
                  <ReactTooltip id="tooltip_step_1">
                    <span>
                      Add the EPSAPI token to your wallet as a custom token.
                    </span>
                  </ReactTooltip>
                  <Flex>
                    <span data-tip data-for="tooltip_step_1">
                      Add EPSAPI as a custom token
                    </span>
                    <CopyableText
                      text="0xb846e59af08e9695Fa7C4eD5743E81e623cAA218"
                      cut
                    />
                  </Flex>
                </li>

                <li css={classes.stepItem}>
                  <ReactTooltip id="tooltip_step_2">
                    <span>
                      Communicate with EPS through a standard token transfer
                      Open your hot wallet and send 1 EPSAPI to your cold
                      wallet.
                    </span>
                  </ReactTooltip>
                  <span data-tip data-for="tooltip_step_2">
                    Send <strong>1</strong> EPSAPI from <strong>HOT</strong> to{" "}
                    <strong>COLD</strong>
                  </span>
                </li>

                <li css={classes.stepItem} style={{ marginBottom: 0 }}>
                  <ReactTooltip id="tooltip_step_3">
                    <span>
                      To confirm the record, send 2 EPSAPI from your cold wallet
                      to your hot wallet.
                    </span>
                  </ReactTooltip>
                  <Flex>
                    <span data-tip data-for="tooltip_step_3">
                      Send <strong>2</strong> EPSAPI from <strong>COLD</strong>{" "}
                      to <strong>HOT</strong>
                    </span>
                  </Flex>
                </li>
              </ol>
            </CardContent>
          </Card>
          <Card style={{ width: "100%" }}>
            <CardHeader>
              <CardTitle>Maintain your registry entry</CardTitle>
            </CardHeader>
            <CardContent>
              <Box mt="1rem">
                Change <strong>DELIVERY</strong>: send <strong>3</strong> EPSAPI
                from <strong>HOT</strong> to new delivery address
              </Box>
              <Box mt="1rem">
                <strong>DELETE</strong> the record: send <strong>4</strong>{" "}
                EPSAPI <em>anywhere</em> from <strong>HOT</strong> or{" "}
                <strong>COLD</strong>
              </Box>
              <Box mt="2.9rem" style={{ textAlign: "center" }}>
                <strong>EPS does NOT need a connection to your wallet</strong>
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Box css={classes.lookupBox}>
          <Card mb="1rem" style={{ width: "100%" }}>
            <CardHeader>
              <CardTitle>Check Address</CardTitle>
            </CardHeader>
            <CardContent css={classes.formBox}>
              <Flex as="label" css={classes.form}>
                <input
                  type="text"
                  css={classes.input}
                  value={input}
                  placeholder="enter address to see EPS details..."
                  onChange={handleInputChange}
                />
              </Flex>
              <Flex ml="1" mt="1rem" css={classes.metaInfo}>
                <span>
                  <strong>Address Status:</strong>
                </span>
                {loading ? (
                  <span aria-busy="true"></span>
                ) : (
                  <span>{result.title}</span>
                )}
              </Flex>
            </CardContent>
          </Card>
          <Card style={{ width: "100%" }}>
            <CardHeader>
              <CardTitle>Proxy Record Details</CardTitle>
            </CardHeader>
            <CardContent css={classes.info}>
              <Flex css={classes.metaResultInfo} mt="0">
                <span>
                  <strong>Status:</strong>
                </span>
                {loading ? (
                  <span aria-busy="true"></span>
                ) : (
                  <span>{result.status}</span>
                )}
                <span>
                  <strong>Hot:</strong>
                </span>
                {loading ? (
                  <span aria-busy="true"></span>
                ) : (
                  <CopyableText text={result.hotAddress} />
                )}
                <span>
                  <strong>Cold:</strong>
                </span>

                {loading ? (
                  <span aria-busy="true"></span>
                ) : (
                  <CopyableText text={result.coldAddress} />
                )}
                <span>
                  <strong>Delivery:</strong>
                </span>

                {loading ? (
                  <span aria-busy="true"></span>
                ) : (
                  <CopyableText text={result.deliveryAddress} />
                )}
              </Flex>
            </CardContent>
          </Card>
        </Box>
      </Flex>
    </Container>
  )
}

const useStyles = (theme: Theme) => ({
  content: css`
    gap: 2rem;
    justify-content: center;
    align-items: stretch;

    @media screen and (max-width: 768px) {
      flex-direction: column-reverse;
      align-items: center;
    }
  `,
  formBox: css`
    padding-top: 1rem;
  `,
  form: css`
    gap: 0.5rem;
    align-items: stretch;
  `,
  input: css`
    ::placeholder {
      color: ${theme.input.color};
      opacity: 0.5;
    }
    background: 0 0;
    border: 1px solid ${theme.input.color};
    padding: 0.5em;
    display: block;
    outline: none;
    color: ${theme.foreground.body};
    border-radius: 0.25rem;
    flex-grow: 1;
  `,
  info: css`
    > div {
      margin-bottom: 1rem;
      font-size: 1rem;
    }
  `,
  instructions: css`
    padding-left: 1rem;
    margin-top: 0;
    margin-bottom: 0;
  `,
  stepItem: css`
    margin-bottom: 1rem;
    line-height: 1.5;
  `,
  lookupBox: css`
    width: min(580px, 98%);
  `,
  imageButton: css`
    border-radius: 0.25rem;
    cursor: pointer;
    border: 1px solid ${theme.card.border};
    padding: 0.5rem;
    background-color: ${theme.card.background};
    cursor: pointer;

    &:hover {
      background-color: ${theme.card.border};
    }

    img {
      ${theme.name === "dark" && `filter: contrast(0);`}
    }
  `,
  metaInfo: css`
    justify-content: flex-start;
    > span:first-of-type {
      width: 150px;
    }
  `,
  metaResultInfo: css`
    display: grid;
    grid-template-columns: 1fr 6fr;
    justify-content: flex-start;
    border-bottom: 1px solid ${theme.card.border};
    margin-bottom: 0.5rem;
    padding-bottom: 0.5rem;
  `,
})

const lookup = async (input: string) => {
  if (!isValidAddress(input)) {
    throw new Error("Invalid address")
  }

  var url = "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
  var customHttpProvider = new ethers.providers.JsonRpcProvider(url)

  const contract = new ethers.Contract(
    "0xb846e59af08e9695Fa7C4eD5743E81e623cAA218",
    abi,
    customHttpProvider,
  )

  try {
    var transaction: any[] = await contract.getProxyRecordForAddress(input)
    console.log({ transaction })

    let result = {} as Result

    if (input === transaction[1]) {
      result.title = "HOT Address"
    } else if (input === transaction[2]) {
      result.title = "COLD Address"
    } else {
      result.title = "No Proxy Record"
    }

    if (transaction[0] === 0) result.status = "None"
    else if (transaction[0] === 1) result.status = "Pending acceptance"
    else if (transaction[0] === 2) result.status = "Pending payment"
    else if (transaction[0] === 3) result.status = "Live"

    result.hotAddress = transaction[1]
    result.coldAddress = transaction[2]
    result.deliveryAddress = transaction[3]
    return result
  } catch (e) {
    throw new Error(e as any)
  }
}

export default Dashboard
