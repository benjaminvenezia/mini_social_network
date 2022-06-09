import { useEffect, useState } from "react";
import styled from "styled-components";

import axios from "axios";

import { Article } from "../components";

const Wrapper = styled.main`
  margin: 0 auto;
`;

const Homepage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const token = localStorage.getItem("token");
      console.log(token);
      axios
        .get("https://strapi-crea.jcloud-ver-jpc.ik-server.com/posts", {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        })
        .then(function (response) {
          setArticles(response.data);
        })
        .catch(function (error) {
          console.log(error.data);
        });
    };
    fetchData();
  }, []);

  return (
    <Wrapper>
      <h1>Homepage</h1>

      {articles.map((article) => {
        return <Article {...article} />;
      })}

      {/* {response && <p>{response.title}</p>} */}
    </Wrapper>
  );
};

export default Homepage;
