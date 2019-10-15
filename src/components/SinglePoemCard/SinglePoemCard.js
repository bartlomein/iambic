import React, { useContext } from 'react';
import { Button, Card, CardBody } from 'shards-react';
import { Link } from 'react-router-dom';
import Like from '../Like';
import { AuthContext } from '../../context/auth';
import CommentPost from '../CommentPost';
import CommentList from '../../containers/CommentsList';
import { SinglePoemContainer } from './SinglePoemCardStyles';

function SinglePoemCard({
  body,
  date,
  likes,
  likeCount,
  id,
  comments,
  username,
  title
}) {
  const { user } = useContext(AuthContext);
  console.log(title);
  return (
    <SinglePoemContainer>
      <div style={{ marginTop: 20 }}>
        <Card>
          <CardBody>
            <Link to={`/poems/${id}`}>
              <h4>{title && title}</h4>
            </Link>
            {body.map(line => (
              <div>{line}</div>
            ))}
            <div style={{ textAlign: 'right' }}>{username}</div>
            <Like user={user} id={id} likeCount={likeCount} likes={likes} />
            <CommentList comments={comments} />

            <CommentPost id={id} />
          </CardBody>
        </Card>
      </div>
    </SinglePoemContainer>
  );
}
export default SinglePoemCard;
