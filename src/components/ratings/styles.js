import styled from "styled-components";
import {colors} from '../../constants/index'

export const Container = styled.div`
    width: 18% !important;
    height: 80px;
    border-radius: 2px;
    position: absolute;
    top: 380px;
    right: 20px;

    input[type = "radio"] {
            display: none;
        }
    div > h3 {
        color: white;
        font-size: 18px;
        font-weight: lighter;
        margin-top: 8px;
        margin-left: 10px;
    }

    div > h3 > span {
        font-size: 15px;
        color: #ff0075;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px){
        width: 35% !important;
        height: 100px;

        div {
            margin-left: 10px;
        }

        div > h3 {
            font-size: 25px;
        }

        div h3 span {
            font-size: 20px;
        }
    }

    @media screen and (max-width: 768px){
        width: 45% !important;
        top: 400px;
        right: 15px;
    }

    @media only screen and (max-width: 500px) {
        width: 50% !important;
        height: 60px;
        top: 200px;
        right: 15px;

        div > h3 {
            font-size: 13px;
            margin-top: 4px;
        }
        div > h3 > span {
            font-size: 11px;
        }

    }

    @media screen and (max-width: 320px) {
        width: 58% !important;
        top: 170px;
        right: 5px;
    }

    @media screen and (max-width: 768px) and (min-width: 411px) {
        width: 45%;
        top: 200px;
        right: 5px;
    }


`

export const MainStar = styled.div`
    margin-left: 10px;
    margin-top: 15px;
    display: inline-block;

    .star {
        font-size: 25px;
        padding-left: 0 !important;
        padding-right: 12px;
    }

    div {
        float: right;
        color: white;
        padding: 0 3px 0 3px; 
        margin-left: 8px;
        margin-top: 2px;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        .star {
            padding-right: 15px;
            font-size: 25px; 
            margin-left: 10px;
            margin-top: 5px;
        }

        div {
            font-size: 30px;
            margin-top: -5px;
        }
    }

    @media only screen and (max-width: 500px) {
        .star {
            font-size: 15px;
            padding-right: 10px;
        }

        div {
            margin-top: -5px;
        }
    }

    
`