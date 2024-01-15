import styled from "styled-components";

export const MainContainer = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0px 5px;
  @media screen and (max-width: 768px) {
    padding: 0 20px 0;
  }
`;
export const MainH2 = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 42px;
  color: #000000;
  margin-bottom: 30px;
  @media screen and (max-width: 620px) {
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    margin-bottom: 20px;
  }
`;
export const MainProfile = styled.div`
  width: 100%;
  padding: 0 0 70px;
  @media screen and (max-width: 620px) {
    width: 100%;
    padding: 0 0 40px;
  }
`;
export const ProfileContent = styled.div`
  max-width: 834px;
  @media screen and (max-width: 890px) {
    max-width: 834px;
    width: 100%;
  }
`;

export const ProfileTitle = styled.h3`
  margin-bottom: 20px;
  @media screen and (max-width: 620px) {
    font-size: 18px;
    line-height: 1;
  }
`;

export const ProfileSettings = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: top;
  -ms-flex-align: top;
  align-items: top;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  @media screen and (max-width: 890px) {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
`;

export const SettingsLeft = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-right: 43px;
  @media screen and (max-width: 620px) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-right: 0;
  }
`;

export const SettingsImg = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #f0f0f0;
  cursor: pointer;
  @media screen and (max-width: 620px) {
    width: 132px;
    height: 132px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const SettingsChangePhoto = styled.button`
  margin-top: 10px;
  margin-bottom: 30px;
  text-decoration: none;
  font-size: 16px;
  line-height: 24px;
  color: #009ee4;
  border: 0;
  background: none;
  cursor: pointer;
`;
export const MainCenterBlock = styled.div`
  @media screen and (max-width: 890px) {
    margin: 0 auto;
    padding: 0 20px;
  }
  @media screen and (max-width: 620px) {
    margin: 0 auto;
    padding: 0 20px;
  }
`;

export const SettingsRight = styled.div`
  width: 630px;
  @media screen and (max-width: 620px) {
    width: 100%;
  }
`;
export const SettingsForm = styled.form`
  width: 630px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  @media screen and (max-width: 620px) {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
`;

export const SettingsFormInput = styled.input`
  background-color: #ffffff;
  width: 300px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding: 13px 19px;
  &::-webkit-input-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  &:-ms-input-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  &::-ms-input-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  &::placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  @media screen and (max-width: 620px) {
    border-radius: 30px;
    padding: 9px 17px;
    width: 100%;
    &::-webkit-input-placeholder {
      font-size: 14px;
      line-height: 21px;
    }
    &:-ms-input-placeholder {
      font-size: 14px;
      line-height: 21px;
    }
    &::-ms-input-placeholder {
      font-size: 14px;
      line-height: 21px;
    }
    &::placeholder {
      font-size: 14px;
      line-height: 21px;
  }
`;

export const SettingsFormLabel = styled.label`
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: #c4c4c4;
  margin-bottom: 4px;
  display: block;
  @media screen and (max-width: 620px) {
    font-size: 14px;
    line-height: 21px;
    color: #c4c4c4;
    margin-bottom: 6px;
  }
`;

export const SettingsDiv = styled.div`
  display: inline-block;
  margin: 0 7px 20px;
  @media screen and (max-width: 620px) {
    display: inline-block;
    margin: 0 0px 18px;
  }
`;

export const SettingsBtn = styled.button`
  font-size: 16px;
  line-height: 1;
  color: #ffffff;
  width: 154px;
  height: 50px;
  margin: 10px 7px 0;
  background-color: #009ee4;
  border-radius: 6px;
  border: 1px solid #009ee4;
  &:hover {
    background-color: #0080c1;
  }
  @media screen and (max-width: 620px) {
    font-size: 16px;
    line-height: 1;
    width: 100%;
    height: 46px;
    margin: 8px 0px 0;
  }
`;

export const MainTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 32px;
  line-height: 70px;
  font-weight: 500;
  color: #000000;
  @media screen and (max-width: 620px) {
    margin-bottom: 30px;
    font-size: 18px;
    line-height: 1;
  }
`;

export const MainContent = styled.div`
  width: 100%;
  margin: 0 auto;
  @media screen and (max-width: 620px) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const SettingsImgInput = styled.input`
  display: none;
  cursor: pointer;
`;
