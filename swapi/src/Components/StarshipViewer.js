import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { GetStarshipById } from '../API/StarshipAPI';
import { Card, Col, Container, ListGroup, Row, Spinner } from 'react-bootstrap';
import { sentenceCase } from 'change-case';

const StarshipViewer = () => {
  const { id } = useParams();
  const [starship, setStarship] = useState(null);

  useEffect(() => {
    GetStarshipById(id).then((res) => {
      setStarship(res?.data?.result ?? null);
    });
  }, [id]);

  return starship ? (
    <Container className="my-5">
      <Row>
        <Col md={6} className="mb-4">
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title className="display-5 mb-3">{starship.properties.name}</Card.Title>
              <Card.Subtitle className="mb-3 text-muted">
                {sentenceCase(starship.properties.starship_class)}
              </Card.Subtitle>
              <Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <strong>Model:</strong> {starship.properties.model}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Manufacturer:</strong> {starship.properties.manufacturer}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Crew:</strong> {starship.properties.crew}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Passengers:</strong> {starship.properties.passengers}
                  </ListGroup.Item>
                </ListGroup>
              </Card.Text>
              <Card.Footer className="bg-white">
                <Link to="/Starships" className="btn btn-outline-secondary btn-sm">
                  Back to Starships
                </Link>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <strong>Cost in Credits:</strong> {starship.properties.cost_in_credits}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Cargo Capacity:</strong> {starship.properties.cargo_capacity}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Hyperdrive Rating:</strong> {starship.properties.hyperdrive_rating}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>MGLT:</strong> {starship.properties.MGLT}
                  </ListGroup.Item>
                </ListGroup>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  ) : (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: '100vh' }}
    >
      <Spinner animation="grow" />
    </Container>
  );
};

export default StarshipViewer;
