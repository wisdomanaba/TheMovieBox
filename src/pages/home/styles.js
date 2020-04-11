import styled from "styled-components"
import { colors, fonts } from "../../constants"

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.BACKGROUND_LIGHT_COLOR};
  .rating{
    margin-top: -10em;
  }
`;

export const Logo = styled.img`
  width: 10%;
  height: 10%;
`;

export const Landingpage = styled.div`
  background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)) ,url(${ props => props.image });
  padding: 30px 7% 30px 7%;
  height: 75vh;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  color: #fff;
  @media (max-width: 768px){
    height: 70vh;
  }
  @media (max-width: 425px){
    height: 60vh;
  }
  @media (max-width: 375px){
    height: 60vh;
  }
  @media (max-width: 320px){
    height: 70vh;
  }
`;

export const Flexbox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const Moviedetails = styled.div`
  padding-top: 200px;
  .movietitle{
    font-size: 45px;
    font-weight: ${fonts.FONT_WEIGHT_LIGHT}; 
    letter-spacing: 4px;
  }
  .movieinfo{
    display: flex;
    width: 400px;
    list-style-type: none;
    justify-content: space-between;
    margin-top: 0.6em;
    margin-bottom: 2em;
  }
  .movieinfo li{
    color: #9c9c9c;
    font-size: 0.8em;
  }
  @media (max-width: 768px){
    padding-top: 250px;
    .movietitle{
      font-size: 35px !important;
      font-weight: 600;
    }
    .movieinfo{
      width: 70%;
      line-height: 20px;
      font-size: 25px;
    }
  }
  @media (max-width: 425px){
    padding-top: 200px;
    height: 20vh;
    .movietitle{
    font-size: 20px !important;
    letter-spacing: 3px;
    }
    .movieinfo{
      width: 80%;
      font-size: 15px;
    }
  }
  @media (max-width: 411px){
    padding-top: 250px;
  }
  @media (max-width: 375px){
    padding-top: 200px;
    .movietitle{
    font-size: 20px !important;
    letter-spacing: 3px;
    }
  }
  @media (max-width: 320px){
    padding-top: 200px;
    button{
      padding: 15px !important;
    }
    .movietitle{
    font-size: 18px !important;
    letter-spacing: 3px;
    }
    .movieinfo{
      width: 100%;
      font-size: 15px;
    }
  }
`;