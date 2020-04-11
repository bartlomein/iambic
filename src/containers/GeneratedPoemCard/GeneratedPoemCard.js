import React, { useState, useEffect, useContext } from "react";
import { useTrail, animated } from "react-spring";
import { withRouter } from "react-router-dom";
import { Button, Card, CardBody } from "shards-react";
import apiCall from "../../api";
import gql from "graphql-tag";
import { AuthContext } from "../../context/auth";
import { useMutation } from "@apollo/react-hooks";
import { FETCH_POSTS_QUERY } from "../../utils/graphql";
import {
  GeneratedPoemCardContainer,
  GeneratedPoemLoaderContainer,
  GeneratedPoemCardLineContainer,
  GeneratedPoemCardTitleContainer,
  GeneratedPoemCardButtonContainer,
  GeneratedPoemCardPoemContainer,
  GeneratedPoemCardSingleButton,
} from "./GeneratedPoemCardStyles";
import { Loading } from "../../components/Loading/Loading";
const config = { mass: 1, tension: 700, friction: 500 };

const GeneratedPoemCard = (props) => {
  const { user } = useContext(AuthContext);
  const [poem, setPoem] = useState(null);
  const [hasData, setHasData] = useState(false);
  const [poemPostedMessage, setPoemPostedMessage] = useState(null);
  const [toggle, set] = useState(true);
  const trail = useTrail(poem && poem.poem && poem.poem.length, {
    config,
    opacity: toggle ? 1 : 0,

    from: { opacity: 0, x: 10 },
  });

  const [createPost, { error }] = useMutation(CREATE_POST_MUTATION, {
    variables: {
      title: poem && poem.title && poem.title[0],
      body: poem && poem.poem && poem.poem.length > 1 && poem.poem,
      type: "poem",
    },
    type: "poem",
    update(proxy, result) {
      const data = proxy.readQuery({
        query: FETCH_POSTS_QUERY,
      });
      // data.getPosts = [result.data.createPost]
      proxy.writeQuery({ query: FETCH_POSTS_QUERY, data });
      setPoemPostedMessage("Congratulations, your poem has been posted!");
      console.log(data);
      poem = [];
    },
  });

  const postPoem = (props) => {
    createPost(poem.poem);
    setPoemPostedMessage("Your Poem Has Been Posted");
  };

  const generateNewPoem = () => {
    setPoemPostedMessage(null);
    setPoem(null);
    callPoem();
  };

  const callPoem = () => {
    const getPoem = async () => {
      setHasData(false);
      const poem = await apiCall("poetry", 4);

      setHasData(true);

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
      <GeneratedPoemCardContainer className="generated-poem-card">
        <Card>
          <CardBody>
            {!hasData && (
              <GeneratedPoemLoaderContainer>
                <Loading />
              </GeneratedPoemLoaderContainer>
            )}

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
                  onClick={() => set((state) => state)}
                >
                  <div>
                    <GeneratedPoemCardTitleContainer>
                      {poem && poem.title ? poem.title : ""}
                    </GeneratedPoemCardTitleContainer>
                    {trail.map(({ x, height, ...rest }, index) => (
                      <animated.div
                        key={poem && poem.poem && poem.poem[index]}
                        className="trails-text"
                        style={{
                          ...rest,
                          transform: x.interpolate(
                            (x) => `translate3d(0,${x}px,0)`
                          ),
                        }}
                      >
                        <animated.div style={{ height }}>
                          <GeneratedPoemCardLineContainer>
                            {poem && poem.poem && poem.poem[index]}
                          </GeneratedPoemCardLineContainer>
                        </animated.div>
                      </animated.div>
                    ))}
                  </div>
                </div>
                <GeneratedPoemCardButtonContainer>
                  <GeneratedPoemCardSingleButton>
                    <Button outline onClick={generateNewPoem}>
                      Generate
                    </Button>
                  </GeneratedPoemCardSingleButton>
                  {user && (
                    <GeneratedPoemCardSingleButton>
                      <Button outline onClick={() => postPoem()}>
                        Create Post
                      </Button>
                    </GeneratedPoemCardSingleButton>
                  )}
                </GeneratedPoemCardButtonContainer>
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
      likesCount
      comments {
        id
        body
        username
        createdAt
      }
      commentsCount
    }
  }
`;
export default withRouter(GeneratedPoemCard);
