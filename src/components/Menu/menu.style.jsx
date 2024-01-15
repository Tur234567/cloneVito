import styled from "styled-components";

export const MainMenu = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 11px 0;
  padding: 43px 5px 77px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const MenuLogoLink = styled.div`
  width: 54;
  height: 50px;
`;
export const MenuLogoImg = styled.img`
  width: 54px;
  height: auto;
`;
export const MenuForm = styled.form`
  margin-left: 60px;
  max-width: 1044px;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
`;

export const MenuBtnSearch = styled.button`
  width: 241px;
  height: 50px;
  background-color: #009ee4;
  border: 1px solid #009ee4;
  border-radius: 6px;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  &:hover {
    background-color: #0080c1;
  }
`;
