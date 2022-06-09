import { useEffect, useState } from "react";
import styled from "styled-components";
import useFetch from "../hooks/useFetch";

const Wrapper = styled.main`
  background-color: red;
`;

const Homepage = () => {
  const { response, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  return (
    <Wrapper>
      {console.log(response)}
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong...</p>}
      {response && <p>{response.title}</p>}
      {response && <p>{response.completed.toString()}</p>}
    </Wrapper>
  );
};
export default Homepage;
