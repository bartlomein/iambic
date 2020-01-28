import React, { useContext } from "react";
import { Button, Card, CardBody } from "shards-react";
import { Link } from "react-router-dom";
import Like from "../Like";
import { AuthContext } from "../../context/auth";
import CommentPost from "../CommentPost";
import CommentList from "../../containers/CommentsList";
import { SinglePoemContainer } from "./SinglePoemCardStyles";

function SinglePoemCard({
  body,
  date,
  likes,
  likesCount,
  id,
  comments,
  username,
  title
}) {
  const { user } = useContext(AuthContext);
  const singlePoemContainerProps = {
    backgroundImage:
      "radial-gradient( circle 274px at 7.4% 17.9%,  rgba(82,107,248,1) 0.3%, rgba(167,139,252,1) 90.5%"
  };

  return (
    <SinglePoemContainer>
      <div style={{ marginTop: 20 }}>
        <Card>
          <CardBody>
            <Link to={`/poems/${id}`}>
              <h3>{title && title}</h3>
            </Link>
            {body.map(line => (
              <div style={{ fontSize: 22 }}>{line}</div>
            ))}
            <div
              style={{
                textAlign: "right",
                fontSize: 16,
                fontStyle: "italic",
                marginRight: 30
              }}
            >
              {" - "} {username}
            </div>
            <Like user={user} id={id} likesCount={likesCount} likes={likes} />
            <CommentList comments={comments} />

            <CommentPost id={id} />
          </CardBody>
        </Card>
      </div>
    </SinglePoemContainer>
  );
}
export default SinglePoemCard;
