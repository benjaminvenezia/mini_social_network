import styled from "styled-components";
import moment from "moment";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  color: white;
  height: 70vh;
  width: 50%;
  padding: 20px;
  margin: 3rem auto;

  .edit-btn {
    color: white;
    background-color: transparent;
    cursor: pointer;
    font-size: larger;
    border: 1px solid white;
  }

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
  const deleteAccount = () => {
    const token = localStorage.getItem("token");
    const user_id = localStorage.getItem("user_id");
    axios
      .delete(
        `https://strapi-crea.jcloud-ver-jpc.ik-server.com/users/${user_id}`,
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
        <button className="edit-btn" onClick={deleteAccount}>
          Delete My account
        </button>
        <Link className="edit-btn" to="/edit">
          Edit
        </Link>
      </UserActions>
    </Wrapper>
  );
};
export default ProfilLoggedUser;
