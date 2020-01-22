import React, { useState, useEffect, useContext } from "react";
import { useTrail, animated } from "react-spring";
import { withRouter } from "react-router-dom";
// @ts-ignore
import { Button, Card, CardBody } from "shards-react";
import apiCall from "../../api";
import gql from "graphql-tag";
import { AuthContext } from "../../context/auth";
import { useMutation } from "@apollo/react-hooks";
import { FETCH_POSTS_QUERY } from "../../utils/graphql";
import { GeneratedPoemCardContainer } from "./GeneratedPoemCardStyles";
import { RouterProps } from "../../utils/Interfaces/Router";

const config = { mass: 1, tension: 700, friction: 500 };

const GeneratedPoemCard = (props: RouterProps) => {
  const { user } = useContext(AuthContext);
  const [poem, setPoem] = useState(null);
  const [poemPostedMessage, setPoemPostedMessage] = useState(null);
  const [toggle, set] = useState(true);
  // @ts-ignore
  const trail = useTrail(poem?.poem?.length, {
    config,
    opacity: toggle ? 1 : 0,
    // @ts-ignore
    from: { opacity: 0, x: 20 }
  });

  const [createPost, { error }] = useMutation(CREATE_POST_MUTATION, {
    variables: {
      // @ts-ignore
      title: poem.title[0],
      // @ts-ignore
      body: poem && poem.poem && poem.poem.length > 1 && poem.poem,
      type: "poem"
    },
    // @ts-ignore
    type: "poem",
    update(proxy, result) {
      const data = proxy.readQuery({
        query: FETCH_POSTS_QUERY
      });
      // data.getPosts = [result.data.createPost]
      proxy.writeQuery({ query: FETCH_POSTS_QUERY, data });
      // @ts-ignore
      setPoemPostedMessage("Congratulations, your poem has been posted!");
      console.log(data);
      // @ts-ignore
      poem = [];
    }
  });

  const postPoem = () => {
    // @ts-ignore
    createPost(poem.poem);
    // @ts-ignore
    setPoemPostedMessage("Your Poem Has Been Posted");
  };

  const generateNewPoem = () => {
    setPoemPostedMessage(null);
    setPoem(null);
    callPoem();
  };

  const callPoem = () => {
    const getPoem = async () => {
      const poem = await apiCall("poetry", 4);

      setPoem(poem);
    };

    getPoem();
    // props.setGeneratedPoem(poem);
    return () => {
      setPoem(null);
    };
  };
  useEffect(callPoem, []);
  return (
    <div>
      <GeneratedPoemCardContainer>
        <Card>
          <CardBody>
            {poemPostedMessage ? (
              <>
                <div>{poemPostedMessage}</div>{" "}
                <div className="button-container">
                  <Button outline onClick={generateNewPoem}>
                    Generate
                  </Button>
                </div>
              </>
            ) : (
              <>
                <div
                  className="trails-main-poem"
                  style={{ minHeight: 250 }}
                  onClick={() => set(state => state)}
                >
                  <div>
                    <h3>
                      {
                        // @ts-ignore
                      poem && poem.title && poem.title}
                    </h3>
                    {// @ts-ignore
                    trail.map(({ x, height, ...rest }: any, index: any) => (
                      <animated.div
                        // @ts-ignore
                        key={poem && poem.poem && poem.poem[index]}
                        className="trails-text"
                        style={{
                          ...rest,
                          transform: x.interpolate(
                            (x: string) => `translate3d(0,${x}px,0)`
                          )
                        }}
                      >
                        <animated.div style={{ height }}>
                          {
                            // @ts-ignore-next-line
                          poem && poem?.poem && poem?.poem?[index]}
                        </animated.div>
                      </animated.div>
                    ))}
                  </div>
                </div>
                <Button outline onClick={generateNewPoem}>
                  Generate
                </Button>
                {user && (
                  <Button outline onClick={() => postPoem()}>
                    Create Post
                  </Button>
                )}
              </>
            )}
          </CardBody>
        </Card>

        <div />
      </GeneratedPoemCardContainer>
    </div>
  );
};

const CREATE_POST_MUTATION = gql`
  mutation createPost($title: String, $body: [String]!) {
    createPost(title: $title, body: $body, type: "poem") {
      id
      body
      title
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
// @ts-ignore
export default withRouter(GeneratedPoemCard);
