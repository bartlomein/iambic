import React, { useContext } from 'react';
import { Button, Card, CardBody } from 'shards-react';
import Like from './Like';
import { AuthContext } from '../context/auth';
import CommentPost from './CommentPost';
import CommentList from '../containers/CommentsList';

function SinglePoem({
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
    <div style={{ marginTop: 20 }}>
      <Card>
        <CardBody>
          <h4>{title && title}</h4>
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
  );
}
export default SinglePoem;
