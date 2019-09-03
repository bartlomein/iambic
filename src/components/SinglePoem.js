import React from "react";
import { Button, Card, CardBody } from "shards-react";

function SinglePoem({ body, date, likes, likeCount, user, id }) {
  return (
    <div style={{ marginTop: 20 }}>
      <Card>
        <CardBody>
          {body.map(line => (
            <div>{line}</div>
          ))}
          <div style={{ textAlign: "right" }}>{user}</div>
        </CardBody>
      </Card>
    </div>
  );
}
export default SinglePoem;
