import styled from "@emotion/styled";
import { ButtonDanger, ButtonDefault, ButtonPrimary } from "./styles";

interface Props {
  variant?: "primary" | "danger";
}

export const Button = styled("button")<Props>`
  width: 100%;
  padding: 0.5rem 0.8rem;
  border: none;
  cursor: pointer;

  ${ButtonDefault}
  ${props => props.variant === "primary" && ButtonPrimary}
  ${props => props.variant === "danger" && ButtonDanger}

  &:disabled {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;

    &:hover,
    &:active,
    &:focus {
      color: #fff;
      background-color: #6c757d;
      border-color: #6c757d;
      cursor: default;
    }
  }
`;
