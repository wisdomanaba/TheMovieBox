import styled from "styled-components";
import { colors, fonts } from "../../constants";


export const Container = styled.footer`
  padding: 10px 7% 10em 7%;
  background-color: ${colors.FONT_LIGHT_COLOR};
`;

export const Flexbox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  li a:hover {
    transition: all ease-in 0.4s;
    color: #ff0075 !important;
  }
  @media (max-width: 768px){

    .footer-social-links, .footer-links{
      margin-top: 15px !important;
      margin-bottom: 10px !important;
      flex-grow: 1 !important;
    }
    flex-direction: column;
    text-align: center;
    li a {
      padding: 0 20px !important;
    }
    li a:nth-child(1) {
      padding-left: 0 !important;
    }
  
  }
`;

export const Li = styled.li`
  list-style-type: none;
  font-size: 13px;
  font-weight: ${fonts.FONT_WEIGHT_HEAVY};
  @media (max-width: 991px){
    color: red !important;
  }
`;

export const Copyright = styled.div`
  margin-top: 10px;
`;

export const Title = styled.h1`
  font-size: 30px !important;
  color: #ff0075;
`;

export const SocialIcon = styled.li`
  display: inline;
  list-style-type: none;
  text-align: right;
`;
