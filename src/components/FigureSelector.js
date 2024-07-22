import React from 'react';
import { Button, ButtonGroup, Container, Box, Typography } from '@mui/material';

const FigureSelector = ({ setFigure }) => {
  return (
    <Container maxWidth="sm">
      <Box mt={4} textAlign="center">
        <Typography variant="h5">Selecciona una Figura Geométrica</Typography>
        <Box mt={2}>
          <ButtonGroup variant="contained" color="primary">
            <Button onClick={() => setFigure('triangle')}>Triángulo</Button>
            <Button onClick={() => setFigure('rectangle')}>Rectángulo</Button>
            <Button onClick={() => setFigure('square')}>Cuadrado</Button>
            <Button onClick={() => setFigure('circle')}>Círculo</Button>
          </ButtonGroup>
        </Box>
      </Box>
    </Container>
  );
};

export default FigureSelector;
