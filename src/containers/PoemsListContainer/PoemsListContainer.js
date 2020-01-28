import React, { useState } from "react";

import SinglePoemCard from "../../components/SinglePoemCard/SinglePoemCard";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { PoemsListStyleContainer } from "./PoemsListContainerStyles";
import { PoemsSortMenu } from "../PoemsSortMenu/PoemsSortMenu";
const PoemsList = () => {
  const [selectedQuery, setSelectedQuery] = useState(FETCH_POST_QUERY);

  const { loading, data } = useQuery(selectedQuery, {
    variables: {
      offset: 0,
      limit: 10
    },
    fetchPolicy: "network-only"
  });
  if (data) {
    console.log(data);
  }
  return (
    <PoemsListStyleContainer>
      {" "}
      <PoemsSortMenu handleSortBy={setSelectedQuery} />
      {/* All Posts Sorted by Likes*/}
      {data &&
        data.getPostsSorted &&
        data.getPostsSorted.map(elem => (
          <SinglePoemCard
            title={elem.title}
            body={elem.body}
            date={elem.createdAt}
            likes={elem.likes}
            likeCount={elem.likeCount}
            user={elem.username}
            id={elem.id}
            comments={elem.comments}
            username={elem.username}
          />
        ))}
      {/* All Posts Sorted by Date*/}
      {data &&
        data.getPosts &&
        data.getPosts.map(elem => (
          <SinglePoemCard
            title={elem.title}
            body={elem.body}
            date={elem.createdAt}
            likes={elem.likes}
            likeCount={elem.likeCount}
            user={elem.username}
            id={elem.id}
            comments={elem.comments}
            username={elem.username}
          />
        ))}
    </PoemsListStyleContainer>
  );
};
const FETCH_POST_QUERY = gql`
  {
    getPosts {
      id
      body
      title
      createdAt
      username
      type
      likeCount
      likes {
        username
      }
      commentCount
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
