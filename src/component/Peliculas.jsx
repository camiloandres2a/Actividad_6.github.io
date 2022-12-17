import React from 'react'
import Container from "react-bootstrap/Container";
import MoviesJson from "../movies.json";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardMovie from "../component/CardMovie";

const Peliculas = () => {
  return (
    <div>
      <Container> 
                <h1 style={
                    {color: "white"}
                }>
                    Peliculas
                </h1>
                
                <Row> 
                    {
                    MoviesJson.map((movie) => {
                        if (movie.favorite === false) {
                            return (
                                <Col> 
                                    <CardMovie image={
                                            "https://image.tmdb.org/t/p/w300" + movie.poster_path
                                        }
                                        title={
                                            movie.title
                                        }/> </Col>
                            );
                        }
                    })
                }
                     </Row>
            </Container>
    </div>
  )
}

export default Peliculas
