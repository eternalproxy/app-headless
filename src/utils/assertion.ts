import { ethers } from "ethers";

export const isValidAddress = (address: string): boolean => {
  return ethers.utils.isAddress(address) && address !== "" && address !== "0x0000000000000000000000000000000000000000"
};
