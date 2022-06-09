import { useEffect, useState } from "react";
import axios from "axios";
import { ProfilLoggedUser } from "../components";

const ProfilPage = () => {
  const [me, setMe] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const token = localStorage.getItem("token");

      axios
        .get("https://strapi-crea.jcloud-ver-jpc.ik-server.com/users/me", {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        })
        .then(function (response) {
          setMe(response.data);
        })
        .catch(function (error) {
          console.log(error.data);
        });
    };
    fetchData();
  }, []);

  return (
    <>
      <ProfilLoggedUser {...me} />
    </>
  );
};
export default ProfilPage;
