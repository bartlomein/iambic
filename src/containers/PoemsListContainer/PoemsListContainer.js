import React, { useState } from "react";
import "antd/dist/antd.css";
import SinglePoemCard from "../../components/SinglePoemCard/SinglePoemCard";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import {
  PoemsListStyleContainer,
  PoemsListGetMoreContainer,
  PoemsListNewPoemButtonContainer,
} from "./PoemsListContainerStyles";
import { FiFilePlus } from "react-icons/fi";

import { PoemsSortMenu } from "../PoemsSortMenu/PoemsSortMenu";
import { Modal, Button } from "antd";
import GeneratedPoemCard from "../GeneratedPoemCard/GeneratedPoemCard";
import { Loading } from "../../components/Loading/Loading";
import { useWindowSize } from "../../utils/hooks/useWindowSize";
const PoemsList = () => {
  const [selectedQuery, setSelectedQuery] = useState(FETCH_POST_QUERY);
  const [selectedQueryName, setSelectedQueryName] = useState("Most Recent");
  const [currentOffset, setCurrentOffset] = useState(10);
  const windowWidth = useWindowSize();
  const [isNewPoemModalOpen, setOpenNewPoemModal] = useState(false);

  const { data, loading, fetchMore } = useQuery(selectedQuery, {
    variables: {
      offset: 0,
      limit: 10,
    },
    fetchPolicy: "network-only",
  });
  if (data) {
    console.log(data);
  }

  const onFetchMore = () => {
    fetchMore({
      variables: {
        offset: currentOffset,
        limit: 10,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        if (prev.getPosts) {
          return {
            ...prev,
            // Add the new matches data to the end of the old matches data.
            getPosts: [...prev.getPosts, ...fetchMoreResult.getPosts],
          };
        } else if (prev.getPostsSortedByLikes) {
          return {
            ...prev,

            getPostsSortedByLikes: [
              ...prev.getPostsSortedByLikes,
              ...fetchMoreResult.getPostsSortedByLikes,
            ],
          };
        } else if (prev.getPostsSortedByComments) {
          return {
            ...prev,

            getPostsSortedByComments: [
              ...prev.getPostsSortedByComments,
              ...fetchMoreResult.getPostsSortedByComments,
            ],
          };
        }
      },
    });
    setCurrentOffset(currentOffset + 10);
  };

  return (
    <PoemsListStyleContainer>
      {" "}
      <Modal
        style={{ width: 1000 }}
        visible={isNewPoemModalOpen}
        onCancel={() => setOpenNewPoemModal(false)}
      >
        <GeneratedPoemCard />
      </Modal>
      {windowWidth.width < 600 ? (
        <PoemsListNewPoemButtonContainer>
          <FiFilePlus
            onClick={() => setOpenNewPoemModal(true)}
            size="2em"
            color="black"
          >
            Generate New Poem
          </FiFilePlus>
        </PoemsListNewPoemButtonContainer>
      ) : null}
      <PoemsSortMenu
        handleSortBy={setSelectedQuery}
        setSelectedQueryName={setSelectedQueryName}
        selectedQueryName={selectedQueryName}
        setCurrentOffset={setCurrentOffset}
        setOpenNewPoemModal={setOpenNewPoemModal}
      />
      {/* All Posts Sorted by Likes*/}
      {data &&
        data.getPostsSortedByLikes &&
        data.getPostsSortedByLikes.map((elem) => (
          <SinglePoemCard
            title={elem.title}
            body={elem.body}
            date={elem.createdAt}
            likes={elem.likes}
            likesCount={elem.likesCount}
            user={elem.username}
            id={elem.id}
            comments={elem.comments}
            username={elem.username}
          />
        ))}
      {/* All Posts Sorted by Date*/}
      {data &&
        data.getPosts &&
        data.getPosts.map((elem) => (
          <SinglePoemCard
            title={elem.title}
            body={elem.body}
            date={elem.createdAt}
            likes={elem.likes}
            likesCount={elem.likesCount}
            user={elem.username}
            id={elem.id}
            comments={elem.comments}
            username={elem.username}
          />
        ))}
      {!data && (
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loading />
        </div>
      )}
      {/*All posts sorted by amount of comments*/}
      {data &&
        data.getPostsSortedByComments &&
        data.getPostsSortedByComments.map((elem) => (
          <SinglePoemCard
            title={elem.title}
            body={elem.body}
            date={elem.createdAt}
            likes={elem.likes}
            likesCount={elem.likesCount}
            user={elem.username}
            id={elem.id}
            comments={elem.comments}
            username={elem.username}
          />
        ))}
      <PoemsListGetMoreContainer>
        {data && <Button onClick={onFetchMore}>Get More</Button>}
      </PoemsListGetMoreContainer>
    </PoemsListStyleContainer>
  );
};
const FETCH_POST_QUERY = gql`
  query getPosts($offset: Int, $limit: Int) {
    getPosts(offset: $offset, limit: $limit) {
      id
      body
      createdAt
      username
      likesCount
      title
      likes {
        username
      }
      commentsCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;

export default PoemsList;
