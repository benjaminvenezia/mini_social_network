import styled from "styled-components";
import moment from "moment";

const Wrapper = styled.article`
  position: relative;
  border: 1px solid white;
  border-radius: 5px;
  width: 50%;
  padding: 6rem 2rem;

  margin: 20px auto;
  .user-profil {
    background-color: lightblue;
    position: absolute;
    top: 0;
    left: 0;
    padding: 5px;
    z-index: -1;
    border-bottom-right-radius: 20px;
  }
`;

const Article = ({ id, title, content, user, created_at, udated_at }) => {
  return (
    <Wrapper>
      <h2>{title}</h2>
      <p>{content}</p>
      {console.log("user :", user)}
      <div className="user-profil">
        <p>
          Posted by {user?.username} <span>{moment(created_at).fromNow()}</span>
        </p>
      </div>
    </Wrapper>
  );
};
export default Article;
