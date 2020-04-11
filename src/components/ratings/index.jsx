import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Container, MainStar } from "./styles";

function Rating() {


  const [state, setState] = useState({
    rating: null,
    value: 0
  });

  return (
    <Container>
      <div>
        <h3>
          Rating <span>based on 3.546 reviews</span>
        </h3>
      </div>
      <MainStar>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;

          return (
            <label>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() =>
                  setState({
                    ...state,
                    rating: ratingValue,
                    value: ratingValue
                  })
                }
              />

              <FaStar
                className="star"
                color={
                  ratingValue <= (state.rating)
                    ? "#ff0075"
                    : "#494f65"
                }
              />
            </label>
          );
        })}
        <div>{state.value}.0</div>
      </MainStar>
    </Container>
  );
}

export default Rating;
