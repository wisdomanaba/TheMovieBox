import styled from "styled-components";
import { colors } from "../../constants";

export const Container = styled.button`
  padding: 12px 22px;
  background-color: ${props => (props.colored ? colors.BUTTON_COLOR : `rgba(255,255,255,0)`)} !important;
  ${props => (props.outline ? `border-style: solid` : `border-style: none`)};
  ${props => (props.outline ? `border-width: 2px` : `border-width: none`)};
  ${props => (props.outline ? `border-color: white` : `none`)};
  ${props => (props.mrl ? `margin-left: 20px` : null)};
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  @media (max-width: 425px) {
    ${props => (props.pdl ? `padding-left: 0` : `padding-left: 22px`)};
  }
`;