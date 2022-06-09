import styled from "styled-components";

const Wrapper = styled.article`
  border: 1px solid black;
  width: 50%;
  padding: 2rem;
  margin-top: 10px;
`;

const Article = ({ id, title, content, user, created_at, udated_at }) => {
  return (
    <Wrapper>
      <h2>{title}</h2>
      <p>{content}</p>
      <span>{created_at}</span>
    </Wrapper>
  );
};
export default Article;
