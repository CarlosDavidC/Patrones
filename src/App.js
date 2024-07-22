import React, { useState, useEffect } from 'react';
import { auth } from './firebaseConfig';
import Auth from './components/Auth';
import FigureSelector from './components/FigureSelector';
import FigureForm from './components/FigureForm';
import Canvas from './components/Canvas';
import { CssBaseline, Container, Box } from '@mui/material';

const App = () => {
  const [user, setUser] = useState(null);
  const [figure, setFigure] = useState(null);
  const [figureData, setFigureData] = useState({});

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <Container>
      <CssBaseline />
      <Box mt={4}>
        {!user ? (
          <Auth setUser={setUser} />
        ) : (
          <>
            <FigureSelector setFigure={setFigure} />
            {figure && <FigureForm figure={figure} setFigureData={setFigureData} />}
            {figure && <Canvas figure={figure} figureData={figureData} />}
          </>
        )}
      </Box>
    </Container>
  );
};

export default App;
