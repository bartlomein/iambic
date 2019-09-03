import React, { useState, useEffect } from 'react';
import { useTrail, animated } from 'react-spring';

import { Button, Card, CardBody } from 'shards-react';
import apiCall from '../api';
import gql from 'graphql-tag';

const config = { mass: 1, tension: 700, friction: 500 };

const GeneratedPoemCard = () => {
  const [poem, setPoem] = useState(null);
  const [toggle, set] = useState(true);
  const trail = useTrail(poem && poem.poem && poem.poem.length, {
    config,
    opacity: toggle ? 1 : 0,
    // x: toggle ? 0 : 40,
    // height: toggle ? 40 : 0,
    from: { opacity: 0, x: 20 }
  });

  const generateNewPoem = () => {
    setPoem(null);
    callPoem();
  };

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
    <div>
      <Card>
        {/* <CardHeader>Generated Poem</CardHeader> */}

        <CardBody>
          <div className='trails-main-poem' onClick={() => set(state => state)}>
            <div>
              {trail.map(({ x, height, ...rest }, index) => (
                <animated.div
                  key={poem && poem.poem && poem.poem[index]}
                  className='trails-text'
                  style={{
                    ...rest,
                    transform: x.interpolate(x => `translate3d(0,${x}px,0)`)
                  }}
                >
                  <animated.div style={{ height }}>
                    {poem && poem.poem && poem.poem[index]}
                  </animated.div>
                </animated.div>
              ))}
            </div>
          </div>
          <Button outline onClick={generateNewPoem}>
            Generate
          </Button>
        </CardBody>
      </Card>

      <div></div>
    </div>
  );
};

const CREATE_POST_MUTATION = gql`
  mutation createPost($body: String!) {
    createPost(body: $body) {
      id
      body
      createdAt
      username
      likes {
        id
        username
        createdAt
      }
      likeCount
      comments {
        id
        body
        username
        createdAt
      }
      commentCount
    }
  }
`;
export default GeneratedPoemCard;
