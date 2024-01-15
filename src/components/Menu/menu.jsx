import { Link, useNavigate } from "react-router-dom";
import * as S from "./menu.style";
import img from "../../img/logo.png";
export const MainMenu = () => {
  const navigate = useNavigate();
  return (
    <S.MainMenu>
      <S.MenuLogoLink onClick={() => navigate("/")}>
        <Link to="/">
          <S.MenuLogoImg src={img} alt="logo" />
        </Link>
      </S.MenuLogoLink>
      <S.MenuForm>
        <S.MenuBtnSearch id="btnGoBack" onClick={() => navigate("/")}>
          Вернуться на главную
        </S.MenuBtnSearch>
      </S.MenuForm>
    </S.MainMenu>
  );
};
