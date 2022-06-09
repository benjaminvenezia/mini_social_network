import { FormLogin } from "../components";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 80%;
  height: 80vh;
  margin: 0 auto;
  text-align: center;
`;

const LoginPage = () => {
  return (
    <Wrapper>
      <h1>Login</h1>
      <FormLogin />
    </Wrapper>
  );
};
export default LoginPage;
