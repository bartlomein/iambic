import React from "react";
import Enzyme, { render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SingleComment from "./SingleComment";
import { MockedProvider } from "@apollo/react-testing";
import gql from "graphql-tag";

Enzyme.configure({ adapter: new Adapter() });
const DELETE_COMMENT_MUTATION = gql`
  mutation($postId: ID!, $commentId: ID!) {
    deleteComment(postId: $postId, commentId: $commentId) {
      id
      comments {
        id
        body
        createdAt
        username
      }
      commentsCount
    }
  }
`;
describe("Single Comment", () => {
  it("should render with the right text", () => {
    const comment = {
      id: "5e30a3d212372d001725c1a0",
      username: "user2",
      createdAt: "2020-01-28T21:12:50.746Z",
      body: "Hey There",
      __typename: "Comment"
    };
    const mocks = [
      {
        request: {
          query: DELETE_COMMENT_MUTATION,
          variables: {
            name: "Buck"
          }
        },
        result: {
          data: {
            dog: { id: "1", name: "Buck", breed: "bulldog" }
          }
        }
      }
    ];

    const wrapper = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <SingleComment id={"TESTID1"} comment={comment} />
      </MockedProvider>
    );

    expect(wrapper.text()).toBe("user2:Hey ThereDELETE");
  });
});
