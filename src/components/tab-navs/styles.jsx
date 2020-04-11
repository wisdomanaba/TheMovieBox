import styled from "styled-components";
import { colors } from "../../constants/index";

export const Container = styled.div`
  background: white;

  .tabs {
    padding-top: 2rem;
  }

  .tab-flex {
    display: flex;
    flex-direction: row;
    width: 90%;
    margin: auto;
    border-bottom: 0.3px solid ${colors.FONT_DARK_COLOR};
  }

  .tab-flex div:nth-of-type(1) {
    flex-grow: 1;
  }

  .tab-flex div:nth-of-type(2) {
    flex-grow: 0;
  }

  .tab-nav-contain {
    display: flex;
    justify-content: flex-start;
    list-style-type: none;
    color: ${colors.FONT_DARK_COLOR};
  }

  .item {
    padding: 0 20px 20px;
    font-size: 15px !important;
  }

  .dropdown .drop-item {
    display: none;
  }

  .dropdown:hover .drop-item {
    display: block;
  }

  .icon {
    font-size: 10px;
  }

  ul li {
    cursor: pointer;
  }

  /* Nav Hover */
  ul li:hover:not(.active) {
    color: black;
  }

  /* The active nav */

  .active {
    border-bottom: 2px solid ${colors.BUTTON_COLOR};
    color: ${colors.BUTTON_COLOR};
    animation-name: fadeIn;
    animation-duration: 1000ms;
    animation-timing-function: linear;
  }

  .active-icon {
    font-size: 5px;
    text-align: end;
    color: ${colors.FONT_DARK_COLOR};
    cursor: pointer;
  }

  .grid-display {
    margin-right: 10px;
  }

  .grid-option {
    stroke: yellow !important;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .animate {
    width: 90%;
    margin: auto;
    animation-name: float-in;
    animation-duration: 1500ms;
  }

  @keyframes float-in {
    from {
      margin-left: 0;
      display: none;
    }
    to {
      margin-left: 70px;
      display: block;
    }
  }

  @media screen and (max-width: 500px) {
    body {
      width: 100%;
    }

    .active-icon {
      float: right;
    }

    .tab-nav-contain {
      justify-content: space-evenly;
    }

    .tab-flex {
      flex-direction: column-reverse;
      width: 90%;
    }


    @keyframes float-in {
      from {
        margin-left: -5px;
      }
      to {
        margin-left: 18px;
      }
    }

    .item {
      font-size: 12px !important;
      padding: 12px !important;
    }

    .tab-nav-contain {
      width: 100%;
    }
  }

  @media screen and (max-width: 414px) {
    .tab-nav-contain {
      width: 100%;
    }

    .item {
      font-size: 15px !important;
      padding: 11.5px !important;
    }
  }

  @media screen and (max-width: 411px) {
    .item {
      padding: 11px !important;
    }
  }

  @media screen and (max-width: 375px) {
    .item {
      padding: 7px !important;
    }
  }
  @media screen and (max-width: 360px) {
    .item {
      font-size: 13px !important;
      padding: 10px !important;
    }
  }

  @media screen and (max-width: 320px) {
    .item {
      font-size: 13px !important;
      padding: 5.5px !important;
    }
  }
`;
