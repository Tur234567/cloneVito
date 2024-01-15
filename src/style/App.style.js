import { createGlobalStyle, styled } from "styled-components";
export const StyLeGlobal = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
  }
  
  *:before,
  *:after {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
  }
  
  a,
  a:visited {
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
  }
  
  button,
  ._btn {
    cursor: pointer;
  }
  
  ul li {
    list-style: none;
  }
  
  html,
  body {
    width: 100%;
    height: 100%;
    font-family: 'Roboto', sans-serif;
    color: #000000;
  }
  
  div,
  button,
  a {
    font-family: 'Roboto', sans-serif;
  }

@font-face {
  font-family: 'Roboto';
  src:
    local('Roboto'),
    url('../../fonts/Roboto/Roboto-Regular.ttf') format('truetype'),
  font-weight: 400;
  font-style: normal;
}
`;

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #f1f1f1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;
export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
  @media screen and (max-width: 590px) {
    width: 100%;
    min-width: 320px;
    min-height: 100vh;
    background-color: #ffffff;
  }
`;
export const Main = styled.main`
  margin: 0 auto;
`;
