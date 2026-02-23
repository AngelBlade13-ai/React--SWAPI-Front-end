import React from 'react';
import { Container, Button, Stack } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="text-center my-5">
      <h1>Welcome to the Star Wars API Explorer</h1>
      <p className="lead">Browse characters, planets, and starships from the Star Wars universe.</p>
      <Stack direction="horizontal" gap={3} className="justify-content-center mt-3 flex-wrap">
        <Button href="/Characters" variant="primary" size="lg">
          View Characters
        </Button>
        <Button href="/Planets" variant="success" size="lg">
          View Planets
        </Button>
        <Button href="/Starships" variant="warning" size="lg">
          View Starships
        </Button>
      </Stack>
    </Container>
  );
};

export default Home;
