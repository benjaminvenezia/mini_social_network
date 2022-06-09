import { FormPost } from "../components";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
`;

const PostPage = () => {
  return (
    <Wrapper>
      <h1>Post</h1>
      <FormPost />
    </Wrapper>
  );
};
export default PostPage;
