export const getFormattedAddress = (
  addr: string,
  front: number = 6,
  back: number = 4,
) => {
  const len = addr.length
  const first = addr.substr(0, front)
  const dots = "....."
  const last = addr.substr(len - back)
  return first + dots + last
}
