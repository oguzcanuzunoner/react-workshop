import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { useMovies } from "../../Context/MoviesContext";
import { Link } from "react-router-dom";

const Movies = () => {
  const { movies } = useMovies();

  return (
    <Container className="mt-2">
      <Row xs={1} md={2} xl={3} className="g-4">
        {movies.map((movie) => (
          <Col key={movie.id}>
            <Card className="text-center">
              <Card.Img
                variant="top"
                src={movie.image}
                style={{ width: "200px", height: "300px", margin: "0 auto" }}
                className="mt-2"
                alt={movie.title}
              />
              <Card.Body>
                <Card.Subtitle className="text-muted">
                  IMDB Rating : {movie.imDbRating}
                </Card.Subtitle>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.year}</Card.Text>
                <Card.Text>{movie.crew}</Card.Text>
                <Link to={`/${movie.id}`}>
                  <Button variant="outline-dark" className="mt-2">
                    Go to Single Page
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Movies;
