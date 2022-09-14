import styled from "@emotion/styled";

export const Grid = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0%, 1fr));
  grid-column-gap: .5rem;
  grid-row-gap: .5rem;
`;
