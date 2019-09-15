import React, { useContext, useState, useRef } from 'react';
import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { AuthContext } from '../../context/auth';
import { Button, Card, CardBody } from 'shards-react';
import SinglePoemCard from '../../components/SinglePoemCard';
// import Like from './Like';

const SinglePoemPage = props => {
  const postId = props.match.params.poemId;
  const { user } = useContext(AuthContext);
  const commentInputRef = useRef(null);

  const [comment, setComment] = useState('');

  const { loading, data } = useQuery(FETCH_POST_QUERY, {
    variables: {
      postId
    }
  });

  // postMarkup = <div>{getPost.id}</div>;
  if (loading) return <p>Loading ...</p>;
  return (
    <SinglePoemCard
      body={data.getPost.body}
      date={data.getPost.date}
      likes={data.getPost.likes}
      likeCount={data.getPost.likeCount}
      id={data.getPost.id}
      comments={data.getPost.comments}
      username={data.getPost.username}
      title={data.getPost.title}
    />
  );
};

export default SinglePoemPage;
const SUBMIT_COMMENT_MUTATION = gql`
  mutation($postId: String!, $body: String!) {
    createComment(postId: $postId, body: $body) {
      id
      comments {
        id
        body
        createdAt
        username
      }
      commentCount
    }
  }
`;

const FETCH_POST_QUERY = gql`
  query($postId: ID!) {
    getPost(postId: $postId) {
      id
      body
      createdAt
      username
      likeCount
      title
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
