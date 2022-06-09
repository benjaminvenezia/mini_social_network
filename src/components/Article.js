import styled from "styled-components";
import moment from "moment";

const Wrapper = styled.article`
  border: 1px solid white;
  border-radius: 5px;
  width: 50%;
  padding: 2rem;

  margin: 20px auto;
`;

const Article = ({ id, title, content, user, created_at, udated_at }) => {
  return (
    <Wrapper>
      <h2>{title}</h2>
      <p>{content}</p>
      <span>{moment(created_at).fromNow()}</span>
      <span>{user?.name}</span>
    </Wrapper>
  );
};
export default Article;
