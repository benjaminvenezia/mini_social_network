import network from "../assets/network.svg";
import styled from "styled-components";

const Wrapper = styled.main`
  text-align: center;

  img {
    margin-top: 4rem;
    width: 40%;
  }
`;

const LandingPage = () => {
  return (
    <Wrapper>
      <h1>Landing</h1>
      <p>Bienvenue sur le réseau social minimaliste!</p>
      <img src={network} />
    </Wrapper>
  );
};
export default LandingPage;
