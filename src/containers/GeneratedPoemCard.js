import React, { useState, useEffect } from 'react';
import apiCall from '../api';

const GeneratedPoemCard = () => {
  const [poem, setPoem] = useState(null);

  const callPoem = () => {
    const getPoem = async () => {
      const poem = await apiCall('poetry', 4);

      setPoem(poem);
    };

    getPoem();

    return () => {
      setPoem(null);
    };
  };
  useEffect(callPoem, []);
  return (
    <div>{poem && poem.poem && poem.poem.map(line => <div>{line}</div>)}</div>
  );
};

export default GeneratedPoemCard;
