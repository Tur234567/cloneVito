import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: auto;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ContainerBg = styled.div`
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #f4f5f6;
`;

export const ModalBlock = styled.div`
  position: absolute;
  z-index: 5;
  left: calc(50% - (800px / 2));
  top: 60px;
  opacity: 1;
  @media screen and (max-width: 600px) {
    position: absolute;
    z-index: 5;
    left: 0px;
    top: 55px;
    opacity: 1;
  }
`;

export const ModalContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  width: 800px;
  height: auto;
  padding: 20px 92px 57px 50px;
  background-color: #ffffff;
  border-radius: 12px;
  position: relative;
  @media screen and (max-width: 600px) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    width: 100%;
    min-width: 320px;
    height: auto;
    padding: 30px 20px 30px;
  }
`;

export const ModalTitle = styled.h3`
  font-size: 32px;
  line-height: 46px;
  font-weight: 500;
  color: #000000;
  margin-bottom: 15px;
  @media screen and (max-width: 600px) {
    font-size: 24px;
    line-height: 29px;
    padding: 0 0 0 26px;
    position: relative;
    &::before {
      content: "";
      display: block;
      width: 12px;
      height: 12px;
      background-color: transparent;
      border-top: 2px solid #000000;
      border-left: 2px solid #000000;
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
      position: absolute;
      top: 9px;
      left: 0;
      cursor: pointer;
    }
  }
`;

export const ModalBtnClose = styled.div`
  width: 23px;
  height: 23px;
  position: absolute;
  top: 47px;
  right: 50px;
  z-index: 3;
  cursor: pointer;
`;

export const ModalBtnCloseLine = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  &:hover::after {
    background-color: #0080c1;
  }
  &:hover::before {
    background-color: #0080c1;
  }
  &::after {
    content: "";
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #d9d9d9;
    top: 47%;
    right: -4px;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  &::before {
    content: "";
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #d9d9d9;
    top: 47%;
    right: -4px;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const ModalScroll = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  width: 100%;
  overflow-y: auto;
  scrollbar-color: #ffffff #2e2e2e;
  scrollbar-width: thin;
  scrollbar-width: 0px;
  &::-webkit-scrollbar {
    width: 0px;
    background-color: #ffffff;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #d9d9d9;
    border-radius: 0px;
  }
`;

export const ModalFormNewArt = styled.form`
  margin-top: 5px;
  margin-bottom: 15px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  @media screen and (max-width: 600px) {
    margin-top: 22px;
  }
`;

export const FormNewArtBlock = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-bottom: 14px;
  @media screen and (max-width: 600px) {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-bottom: 16px;
  }
`;

export const FormNewArt = styled.label`
  margin-bottom: 14px;
  font-size: 16px;
  line-height: 32px;
  font-weight: 600;
  color: #000000;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const FormNewArtArea = styled.textarea`
  font-family: "Roboto", sans-serif;
  padding: 10px 19px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  font-size: 16px;
  line-height: 1;
  width: 100%;
  height: 100px;
  max-height: 100px;
  &::-webkit-input-placeholder {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }
  &:-ms-input-placeholder {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }
  &::-ms-input-placeholder {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }
  &::placeholder {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }
  @media screen and (max-width: 600px) {
    font-family: "Roboto", sans-serif;
    width: 100%;
    max-height: 107px;
    padding: 9px 17px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 30px;
    font-size: 16px;
    line-height: 1;
    &::-webkit-input-placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #c4c4c4;
    }
    &:-ms-input-placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #c4c4c4;
    }
    &::-ms-input-placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #c4c4c4;
    }
    &::placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #c4c4c4;
    }
  }
`;

export const FormNewArtBtnPub = styled.button`
  width: 181px;
  height: 50px;
  background: #d9d9d9;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  &:hover {
    background-color: #0080c1;
  }
  @media screen and (max-width: 600px) {
    margin-top: 0px;
    width: 100%;
    height: 46px;
    background-color: #009ee4;
  }
`;

export const ModalReviews = styled.div`
  width: 100%;
  height: 495px;
`;

export const ReviewsReview = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: stretch;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 15px 0;
  flex-direction: column;
`;

export const ReviewItem = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`;

export const ReviewLeft = styled.div`
  margin-right: 12px;
`;

export const ReviewImg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f0f0f0;
`;
export const ReviewImgImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const ReviewRight = styled.div`
  display: block;
`;

export const ReviewName = styled.p`
  margin-bottom: 12px;
  font-weight: 600;
  font-size: 16px;
  line-height: 32px;
  color: #000000;
  @media screen and (max-width: 600px) {
    font-size: 14px;
    line-height: 28px;
    color: #000000;
  }
`;

export const ReviewNameSpan = styled.span`
  margin-left: 10px;
  color: #5f5f5f;
`;

export const ReviewTitle = styled.h5`
  font-weight: 600;
  font-size: 16px;
  line-height: 32px;
  color: #000000;
  @media screen and (max-width: 600px) {
    font-size: 14px;
    line-height: 28px;
    color: #000000;
  }
`;
export const ReviewText = styled.p`
  font-size: 16px;
  line-height: 32px;
  color: #000000;
  @media screen and (max-width: 600px) {
    font-size: 14px;
    line-height: 28px;
    color: #000000;
  }
`;

export const Error = styled.div`
  color: coral;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  margin-top: 20px;
  text-align: left;
`;