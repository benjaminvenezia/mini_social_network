import styled from "styled-components";
import moment from "moment";

const Wrapper = styled.div`
  color: white;
  width: 50%;
  padding: 20px;
  margin: 3rem auto;

  span {
    font-size: 1.4rem;
  }
`;

const ProfilLoggedUser = ({
  id,
  username,
  email,
  confirmed,
  firstname,
  lastname,
  created_at,
  updated_at,
  bio,
}) => {
  return (
    <Wrapper>
      <h1>{username}</h1>
      <div>
        <p>
          <span>Email :</span> {email}
        </p>
        <p>
          <span>firstname :</span> {firstname}
        </p>
        <p>
          <span>Lastname :</span> {lastname}
        </p>
        <p>
          <span>Bio :</span> {bio ? bio : "Pas de biographie précisée."}
        </p>
        <p>
          <span>Inscrit le :</span> {moment(created_at, "YYYYMMDD").fromNow()}
        </p>
      </div>
    </Wrapper>
  );
};
export default ProfilLoggedUser;
