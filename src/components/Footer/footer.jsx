import { Link } from "react-router-dom";
import * as S from "./footer.styled";
import img01 from "../../img/icon_01.png";
import img02 from "../../img/icon_02.png";
import img03 from "../../img/icon_03.png";
import { AddAds } from "../../modal/AddAds/addAds";
import { useState } from "react";
export const Footer = () => {
  const [openFormAddAds, setOpenFormAddAds] = useState(false);
  return (
    <>
      {openFormAddAds && (
        <AddAds setOpenFormAddAds={setOpenFormAddAds}/>
      )}
      <S.Footer>
        <S.FooterContainer>
          <S.FooterImg>
            <Link to={"/"}>
              <S.Img src={img01} alt="home" />
            </Link>
          </S.FooterImg>
          <S.FooterImg>
            <S.Img
              src={img02}
              alt="add"
              onClick={() => setOpenFormAddAds(true)}
            />
          </S.FooterImg>
          <S.FooterImg>
            <Link to={"/login"}>
              <S.Img src={img03} alt="login" />
            </Link>
          </S.FooterImg>
        </S.FooterContainer>
      </S.Footer>
    </>
  );
};
