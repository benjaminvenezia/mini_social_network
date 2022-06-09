import styled from "styled-components";
import moment from "moment";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  color: white;
  width: 50%;
  padding: 20px;
  margin: 3rem auto;

  span {
    font-size: 1.4rem;
  }
`;

const MyProfil = styled.div``;

const UserActions = styled.div``;

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
  const deleteAccount = (id) => {
    const token = localStorage.getItem("token");
    axios
      .delete(
        `https://strapi-crea.jcloud-ver-jpc.ik-server.com/users/${id.toString()}`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then(function (response) {})
      .catch(function (error) {
        console.log(error.data);
      });
  };

  return (
    <Wrapper>
      <h1>{username}</h1>
      <MyProfil>
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
      </MyProfil>
      <UserActions>
        <button onClick={() => deleteAccount(id)}>Delete My account</button>
      </UserActions>
    </Wrapper>
  );
};
export default ProfilLoggedUser;
