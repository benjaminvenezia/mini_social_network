import { useEffect, useState } from "react";
import styled from "styled-components";

import axios from "axios";

import { Article } from "../components";
import paginate from "../utils/paginate";

const Wrapper = styled.main`
  margin: 0 auto;
  text-align: center;
`;

const Homepage = () => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(2);
  const [paginatedArticles, setPaginatedArticles] = useState([]);

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
          setArticles(paginate(response.data));
          setLoading(false);
        })
        .catch(function (error) {
          console.log(error.data);
        });
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (loading) return;
    setPaginatedArticles(articles[page]);
  }, [loading, page]);

  const handlePage = (index) => {
    setPage(index);
  };

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > articles.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };

  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = articles.length - 1;
      }
      return prevPage;
    });
  };

  return (
    <Wrapper>
      <h1>Homepage</h1>
      {loading && <h1>Chargement...</h1>}
      {paginatedArticles.map((article) => {
        return <Article key={article.id} {...article} />;
      })}

      {!loading && (
        <div className="btn-container">
          <button onClick={prevPage} className="prev-btn">
            prev
          </button>
          {articles.map((item, index) => {
            return (
              <button
                className={`page-btn ${index === page ? "active-btn" : null}`}
                onClick={() => handlePage(index)}
                key={index}
              >
                {index + 1}
              </button>
            );
          })}
          <button onClick={nextPage} className="next-btn">
            next
          </button>
        </div>
      )}
    </Wrapper>
  );
};

export default Homepage;
