import styled from "styled-components"
import { colors, fonts } from "../../constants"

export const Flexbox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  .nav-mobile{
    display: none;
  }

  @media (max-width: 768px){
    .nav-desktop{
      display: none;
    }
    .nav-mobile{
      display: block;
    }
    h1{
      font-size: 50px !important;
    }
    #sidebarMenu {
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      transform: translateX(-1000px);
      transition: transform 250ms ease-in-out;
      background: rgba(0,0,0,0.7);
    }
    .sidebarMenuMain{
      height: 100%;
      position: fixed;
      left: 0;
      width: 250px;
      background: #ff0075;
    }

    .sidebarMenuInner {
      margin: 0;
      padding-top: 70px;
      border-top: 1px solid rgba(255, 255, 255, 0.10);
    }

    .sidebarMenuInner li {
      list-style: none;
      color: #fff;
      text-align: center;
      text-transform: uppercase;
      font-weight: bold;
      padding: 20px;
      cursor: pointer;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    }

    .sidebarMenuInner li span {
      display: block;
      font-size: 14px;
      color: rgba(255, 255, 255, 0.50);
    }

    .sidebarMenuInner li a {
      color: #fff;
      text-transform: uppercase;
      font-weight: bold;
      cursor: pointer;
      text-decoration: none;
    }

    input[type="checkbox"]:checked ~ #sidebarMenu { transform: translateX(0); }

    input[type=checkbox] {
      transition: all 0.3s;
      box-sizing: border-box;
      display: none;
    }

    .sidebarIconToggle {
      transition: all 0.3s;
      box-sizing: border-box;
      cursor: pointer;
      position: absolute;
      z-index: 99;
      height: 100%;
      width: 100%;
      top: 37px;
      right: 30px;
      height: 22px;
      width: 22px;
    }

    .spinner {
      transition: all 0.3s;
      box-sizing: border-box;
      position: absolute;
      height: 3px;
      width: 100%;
      background-color: #fff;
    }

    .horizontal {
      transition: all 0.3s;
      box-sizing: border-box;
      position: relative;
      float: left;
      margin-top: 5px;
    }

    .diagonal.part-1 {
      position: relative;
      transition: all 0.3s;
      box-sizing: border-box;
      float: left;
    }

    .diagonal.part-2 {
      transition: all 0.3s;
      box-sizing: border-box;
      position: relative;
      float: left;
      margin-top: 5px;
    }

    input[type=checkbox]:checked ~ .sidebarIconToggle > .horizontal {
      transition: all 0.3s;
      box-sizing: border-box;
      opacity: 0;
    }

    input[type=checkbox]:checked ~ .sidebarIconToggle > .diagonal.part-1 {
      transition: all 0.3s;
      box-sizing: border-box;
      transform: rotate(135deg);
      margin-top: 7px;
    }

    input[type=checkbox]:checked ~ .sidebarIconToggle > .diagonal.part-2 {
      transition: all 0.3s;
      box-sizing: border-box;
      transform: rotate(-135deg);
      margin-top: -11px;
    }
  }
  @media (max-width: 425px){
    h1{
    font-size: 25px !important;
    letter-spacing: 3px;
    }
  }
  /* @media (max-width: 375px){
    h1{
    font-size: 20px !important;
    letter-spacing: 3px;
    }
  } */
  @media (max-width: 320px){
    h1{
    font-size: 18px !important;
    }
  }
`;