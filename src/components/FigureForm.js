import React from 'react';
import { TextField, Container, Box } from '@mui/material';

const FigureForm = ({ figure, setFigureData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFigureData((prevData) => ({ ...prevData, [name]: parseFloat(value) }));
  };

  return (
    <Container maxWidth="sm">
      <Box mt={4}>
        {figure === 'triangle' && (
          <>
            <TextField label="Lado 1" name="side1" onChange={handleChange} fullWidth margin="normal" />
            <TextField label="Lado 2" name="side2" onChange={handleChange} fullWidth margin="normal" />
            <TextField label="Lado 3" name="side3" onChange={handleChange} fullWidth margin="normal" />
          </>
        )}
        {figure === 'rectangle' && (
          <>
            <TextField label="Largo" name="length" onChange={handleChange} fullWidth margin="normal" />
            <TextField label="Alto" name="height" onChange={handleChange} fullWidth margin="normal" />
          </>
        )}
        {figure === 'square' && (
          <TextField label="Tamaño del lado" name="side" onChange={handleChange} fullWidth margin="normal" />
        )}
        {figure === 'circle' && (
          <TextField label="Radio" name="radius" onChange={handleChange} fullWidth margin="normal" />
        )}
      </Box>
    </Container>
  );
};

export default FigureForm;
