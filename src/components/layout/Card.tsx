import styled from "@emotion/styled";
import { space, SpaceProps } from "styled-system";

export const Card = styled("div")<SpaceProps>`
  width: min(570px, 98%);
  color: ${props => props.theme.foreground.body};
  background-color: ${(props) => props.theme.card.background};
  flex-direction: column;
  display: flex;
  box-shadow: 0 0.5rem 1.2rem ${(props) => props.theme.card.shadow};
  border-radius: 0.25rem;
  border: 1px solid ${(props) => props.theme.card.border};
  ${space}
`;

export const CardHeader = styled("div")`
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.card.border};
`;

export const CardTitle = styled("h3")`
  text-align: left;
  font-weight: 600;
  margin: 0;
  font-size: 1rem;
  color: ${(props) => props.theme.card.title};

  a {
    color: ${props => props.theme.link.header};

  &:hover {

    color: ${props => props.theme.link.active};
    }
  }
`;

export const CardContent = styled("div")<SpaceProps>`
  height: 100%;
  padding:.5rem 1.5rem 1rem;
  position: relative;
  ${space}
`;
