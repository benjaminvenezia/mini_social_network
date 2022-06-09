import { FormRegister } from "../components";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 80%;
  height: 80vh;
  margin: 0 auto;
  text-align: center;
`;

const RegisterPage = () => {
  return (
    <Wrapper>
      <h1>Register</h1>
      <FormRegister />
    </Wrapper>
  );
};
export default RegisterPage;
