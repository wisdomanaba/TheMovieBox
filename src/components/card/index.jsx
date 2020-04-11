import React from "react";
import { Container, Card, Title } from "./styles";

export default function GameCard({ year, title, genres, rating, image }) {
  return (
    <Container>
      <Card>
        <img src={image} alt="" />
        <h5>{year}</h5>
        <Title>
          <div className="flex-item">
            <h4>{`${title.substring(0, 18)}...`}</h4>
            <h6>{genres}</h6>
          </div>
          <p className="flex-item">{rating}</p>
        </Title>
      </Card>

      <Card>
        <img src={image} alt="" />
        <h5>{year}</h5>
        <Title>
          <div className="flex-item">
            <h4>{`${title.substring(0, 18)}...`}</h4>
            <h6>{genres}</h6>
          </div>
          <p className="flex-item">{rating}</p>
        </Title>
      </Card>

      <Card>
        <img src={image} alt="" />
        <h5>{year}</h5>
        <Title>
          <div className="flex-item">
            <h4>{`${title.substring(0, 18)}...`}</h4>
            <h6>{genres}</h6>
          </div>
          <p className="flex-item">{rating}</p>
        </Title>
      </Card>

      <Card>
        <img src={image} alt="" />
        <h5>{year}</h5>
        <Title>
          <div className="flex-item">
            <h4>{`${title.substring(0, 18)}...`}</h4>
            <h6>{genres}</h6>
          </div>
          <p className="flex-item">{rating}</p>
        </Title>
      </Card>
    </Container>
  );
}

GameCard.defaultProps = {
  image:
    "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2Fa7c0a756d6b04801bd97d880c40e4113%2F960x0.jpg%3Ffit%3Dscale",
  year: 2017,
  title: "John Wick: Chapter 2",
  genres: "action, triller",
  rating: 4.5
};
