import React, { useState, useEffect } from 'react';
import { useTrail, animated } from 'react-spring';

import { Button, Card, CardBody } from 'shards-react';
import apiCall from '../api';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { FETCH_POSTS_QUERY } from '../utils/graphql';

const config = { mass: 1, tension: 700, friction: 500 };

const GeneratedPoemCard = () => {
  const [poem, setPoem] = useState(null);
  const [poemPostedMessage, setPoemPostedMessage] = useState(null);
  const [toggle, set] = useState(true);
  const trail = useTrail(poem && poem.poem && poem.poem.length, {
    config,
    opacity: toggle ? 1 : 0,
    // x: toggle ? 0 : 40,
    // height: toggle ? 40 : 0,
    from: { opacity: 0, x: 20 }
  });

  const [createPost, { error }] = useMutation(CREATE_POST_MUTATION, {
    variables: {
      title: poem && poem.title && poem.title,
      body: poem && poem.poem && poem.poem.length > 1 && poem.poem,
      type: 'poem'
    },
    type: 'poem',
    update(proxy, result) {
      const data = proxy.readQuery({
        query: FETCH_POSTS_QUERY
      });
      data.getPosts = [result.data.createPost, ...data.getPosts];
      proxy.writeQuery({ query: FETCH_POSTS_QUERY, data });
      setPoemPostedMessage('Congratulations, your poem has been posted!');
      poem = [];
    }
  });

  const generateNewPoem = () => {
    setPoemPostedMessage(null);
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
        <CardBody>
          {poemPostedMessage ? (
            <>
              <div>{poemPostedMessage}</div>{' '}
              <Button outline onClick={generateNewPoem}>
                Generate
              </Button>
            </>
          ) : (
            <>
              <div
                className='trails-main-poem'
                onClick={() => set(state => state)}
              >
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
              <Button outline onClick={() => createPost(poem.poem)}>
                Create Post
              </Button>
            </>
          )}
        </CardBody>
      </Card>

      <div />
    </div>
  );
};

const CREATE_POST_MUTATION = gql`
  mutation createPost($body: [String]!) {
    createPost(body: $body, type: "poem") {
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
