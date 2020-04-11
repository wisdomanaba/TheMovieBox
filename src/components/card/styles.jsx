import styled from 'styled-components';

export const Container = styled.div`
    margin: auto;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;

    @media only screen and (max-width: 500px) {
        display: inline-block;
        width: 100%;
    }

`;

export const Card = styled.div`
         background: white;
         color: black;
         width: 22%;
         margin: 5px;
         height: 450px;
         
         img {
           width: 100%;
           height: 350px;
         }

         h5 {
           margin-top: -15%;
           color: white;
           font-family: Arial, Helvetica, sans-serif;
           padding-left:20px;
         }


         @media only screen and (max-width: 500px) {
           width: 80%;
           margin: auto;
           margin-top: 50px;
           height: 450px;
         }

         img {
           height: 350px;
         }

         .card h5 {
           padding: 0 0 0 30px;
         }

         
       `;

export const Title = styled.div`
          display: flex;
          justify-content: space-between;
          width: 100%;
          height: auto;
          align-items: center;
          margin: auto;
          margin-top: 50px;

          .flex-item:nth-child(1) {
            margin-left: 20px;
            margin-top: -10px;
          }

          .flex-item:nth-child(2) {
            margin-right: 20px;
            border: rgb(233, 24, 136) solid 1px;
            border-radius: 3px;
            padding: 5px;
          }

          .flex-item h4 {
            opacity: 0.7;
            text-transform: capitalize;
            font-size: 20px;
          }

          .flex-item h6 {
            text-transform: capitalize;
            color: grey;
            font-size: smaller;
            opacity: 0.7;
          }


         @media only screen and (max-width: 500px) {
           margin-top: 60px;
         }
         @media only screen and (max-width: 360px) {
           margin-top: 55px;

           img {
           height: 70px;
         }
         }

         @media only screen and (max-width: 320px) {
            .flex-item h4 {
              font-size: 18px;
          }
          img {
            height: 50px;
          }
         }
       `;