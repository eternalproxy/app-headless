import styled from "@emotion/styled";
import { SpaceProps, space,  flexbox, FlexboxProps } from "styled-system";

export const Flex = styled("div")<SpaceProps & FlexboxProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  ${space}
  ${flexbox}
`;
