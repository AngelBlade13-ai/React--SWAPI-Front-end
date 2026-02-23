import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { GetPlanetById } from '../API/PlanetAPI';
import { Card, Col, Container, ListGroup, Row, Spinner } from 'react-bootstrap';
import { sentenceCase } from 'change-case';

const PlanetViewer = () => {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    GetPlanetById(id).then((res) => {
      setPlanet(res?.data?.result ?? null);
    });
  }, [id]);

  return planet ? (
    <Container className="my-5">
      <Row>
        <Col md={6} className="mb-4">
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title className="display-5 mb-3">{planet.properties.name}</Card.Title>
              <Card.Subtitle className="mb-3 text-muted">
                {sentenceCase(planet.description || 'No description available')}
              </Card.Subtitle>
              <Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <strong>Climate:</strong> {planet.properties.climate}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Terrain:</strong> {planet.properties.terrain}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Population:</strong> {planet.properties.population}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Diameter:</strong> {planet.properties.diameter}
                  </ListGroup.Item>
                </ListGroup>
              </Card.Text>
              <Card.Footer className="bg-white">
                <Link to="/Planets" className="btn btn-outline-secondary btn-sm">
                  Back to Planets
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
                    <strong>Gravity:</strong> {planet.properties.gravity}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Rotation Period:</strong> {planet.properties.rotation_period}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Orbital Period:</strong> {planet.properties.orbital_period}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Surface Water:</strong> {planet.properties.surface_water}
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

export default PlanetViewer;
