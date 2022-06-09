import notfound from "../assets/notfound.svg";
import styled from "styled-components";

const Wrapper = styled.main`
  text-align: center;
`;

const NotFound = () => {
  return (
    <Wrapper>
      <img src={notfound} alt="" />
    </Wrapper>
  );
};
export default NotFound;
