
import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import Footer from '../../components/footer'
import { Container, Logo, Landingpage, Flexbox, Moviedetails } from './styles'
import { fonts } from "../../constants"
import Button from '../../components/button'
import Header from '../../components/header'
import Rating from '../../components/ratings'
import GameCard from '../../components/card'
import TabComponent from '../../components/tab-navs/TabComponent'

export default function Home() {

  const [state, setState] = useState({
    movies: [
      {
        "title": "The Wrath of Titans",
        "image": "https://images4.alphacoders.com/832/thumb-1920-832027.jpg",
        "infos": [
          "Fantasy",
          "Animation",
          "Family",
          "Duration: 1h 52m"
        ]
      },
      {
        "title": "The maze",
        "image": "https://images.alphacoders.com/616/thumb-1920-616519.jpg",
        "infos": [
          "Fantasy",
          "Animation",
          "Family",
          "Duration: 2h 10m"
        ]
      }
    ]
  })

const { movies } = state

const movie = movies[Math.floor(Math.random() * movies.length)]

  return (
      <Container>
        <Landingpage image={ movie.image }>
          <Header />
            <Moviedetails>
              <h1 className="movietitle">{ movie.title.toUpperCase() }</h1>
              <div className="movieinfo">
                { movie.infos.map( (info, id) => <li key={id}>{info}</li> ) }
              </div>
              <div>
                <Button colored>WATCH MOVIE</Button>
                <Button outline mrl>VIEW INFO</Button>
                <Button pdl>+ ADD TO WISHTLE</Button>
              </div>
            </Moviedetails>
        </Landingpage>
        <Rating />
        <br />
        <br />
        <TabComponent />
        <br />
        <br />
        <Footer />
      </Container>
  );
}


