import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
  --titles: white;
  --p: white;
  --a: white;
}

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
 
background: rgb(2,0,36) !important;
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,85,1) 40%, rgba(0,212,255,1) 100%) !important;
  line-height: 1.5;
  font-size: 0.875rem;
}

form {
  width: 500px;
}

input {
  width: 100%;
  padding: 10px 20px;
  border-radius: 2rem;
  border: none;
}

input:focus, textarea:focus, select:focus{
  outline: 4px solid lightblue;
  backdrop-filter: blur(10px);
}

.page-btn {
  cursor: pointer;
  margin-right: 10px;
  width: 30px;
  height: 40px;
  background-color: black;
  color: white;
  border: none;
}

.next-btn, .prev-btn {
  background-color: black;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 1rem;
  cursor: pointer;

}

.next-btn {
  margin-left: 5px;
}

.prev-btn {
  margin-right: 5px;
}

.active-btn {
  background-color: aliceblue;
  color: black;
}

.btn-form {
  padding: 20px 60px;
  width: 100%;
  background-color: lightblue;
  color: white;
  font-weight: 900;
  font-size: 1.4rem;
  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 10px black;
  cursor: pointer;
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
}
h1,
h2,
h3,
h4 {
  color: var(--titles);
  letter-spacing: var(--spacing);
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
}
h1 {
  font-size: 3rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.25rem;
}
h4 {
  font-size: 0.875rem;
}
p {
  margin-bottom: 1.25rem;
  color: var(--p);
}
@media screen and (min-width: 800px) {
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1rem;
  }
  body {
    font-size: 1rem;
  }
  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
  }
}

.section {
  width: 90vw;
  margin: 0 auto;
  max-width: var(--max-width);
}

@media screen and (min-width: 992px) {
  .section {
    width: 95vw;
  }
}
`;

export default GlobalStyle;
