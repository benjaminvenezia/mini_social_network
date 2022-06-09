import { useEffect, useState } from "react";
import { FormEdit } from "../components";
import axios from "axios";
import styled from "styled-components";

const Wrapper = styled.main`
  text-align: center;
  margin-top: 5%;

  form {
    margin-top: 5%;
  }
`;

const EditPage = () => {
  const [myInformations, setMyInformations] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      const token = localStorage.getItem("token");
      const user_id = localStorage.getItem("user_id");

      axios
        .get(
          `https://strapi-crea.jcloud-ver-jpc.ik-server.com/users/${user_id}`,
          {
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${token}`,
            },
          }
        )
        .then(function (response) {
          setMyInformations(response.data);
          setLoading(false);
        })
        .catch(function (error) {
          console.log(error.data);
        });
    };
    fetchData();
  }, []);

  return (
    <Wrapper>
      <h1>Edit</h1>
      <FormEdit {...myInformations} />
    </Wrapper>
  );
};
export default EditPage;
