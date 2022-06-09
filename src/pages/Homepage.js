import { useEffect, useState } from "react";
import styled from "styled-components";
import useFetch from "../hooks/useFetch";
import RegisterForm from "./RegisterForm";

const Wrapper = styled.main``;

const Homepage = () => {
  const { response, loading, error } = useFetch();

  return (
    <Wrapper>
      <RegisterForm />
      {console.log(response)}
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong...</p>}
      {response && <p>{response.title}</p>}
      {response && <p>{response.completed.toString()}</p>}
    </Wrapper>
  );
};
export default Homepage;
