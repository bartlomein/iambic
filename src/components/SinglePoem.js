import React, { useContext } from 'react';
import { Button, Card, CardBody } from 'shards-react';
import Like from './Like';
import { AuthContext } from '../context/auth';

function SinglePoem({ body, date, likes, likeCount, id }) {
  const { user } = useContext(AuthContext);
  return (
    <div style={{ marginTop: 20 }}>
      <Card>
        <CardBody>
          {body.map(line => (
            <div>{line}</div>
          ))}
          <div style={{ textAlign: 'right' }}>{user.username}</div>
          <Like user={user} id={id} likeCount={likeCount} likes={likes} />
        </CardBody>
      </Card>
    </div>
  );
}
export default SinglePoem;
