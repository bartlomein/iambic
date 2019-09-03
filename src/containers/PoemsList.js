import React from "react";
import SinglePoem from "../components/SinglePoem";
function PoemsList({ data }) {
  console.log(data);

  return (
    <div>
      {" "}
      {data &&
        data.map(elem => (
          <SinglePoem
            body={elem.body}
            date={elem.createdAt}
            likes={elem.likes}
            likeCount={elem.likeCount}
            user={elem.username}
            id={elem.id}
          />
        ))}
    </div>
  );
}

export default PoemsList;
