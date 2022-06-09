import { FormPost } from "../components";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
`;

const PostPage = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <h1>Post</h1>
      <FormPost />
    </Wrapper>
  );
};
export default PostPage;
