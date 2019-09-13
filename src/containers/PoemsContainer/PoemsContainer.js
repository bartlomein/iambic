import React from "react";
import SinglePoemCard from "../../components/SinglePoemCard";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const PoemsList = () => {
  const { loading, data } = useQuery(FETCH_POST_QUERY);
  if (data) {
    console.log(data);
  }
  return (
    <div>
      {" "}
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
    </div>
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
