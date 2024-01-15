import * as T from "../AddAds/addAds.styled";
import { getTokenFromLocalStorage, updatePassword } from "../../api";
import { useState } from "react";

export const EditPassword = ({ setOpenFormChangePassword }) => {
  const [error, setError] = useState(null);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [saveButton, setSaveButton] = useState(true);

  const closeForm = () => {
    setOpenFormChangePassword(false);
  };

  const handleOldPasswordChange = (event) => {
    setOldPassword(event.target.value);
    setSaveButton(true);
  };
  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
    setSaveButton(true);
  };
  const handleRepeatPasswordChange = (event) => {
    setRepeatPassword(event.target.value);
    setSaveButton(true);
  };

  const handleSaveChange = (event) => {
    event.preventDefault();
    if (newPassword !== repeatPassword) {
      setError("Пароли не совпадают");
    }
    const token = getTokenFromLocalStorage();
    updatePassword(oldPassword, newPassword, token)
      .then(() => {
        setOpenFormChangePassword(false);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <T.Wrapper>
      <T.ContainerBg>
        <T.ModalBlock>
          <T.ModalContent>
            <T.ModalTitle>Редактировать пароль</T.ModalTitle>
            <T.ModalBtnClose>
              <T.ModalBtnCloseLine onClick={closeForm}></T.ModalBtnCloseLine>
            </T.ModalBtnClose>
            <T.ModalFormNewArt>
              <T.FormNewArtBlock>
                <T.FormNewArtLabel>Старый пароль</T.FormNewArtLabel>
                <T.FormNewArtInput
                  type="password"
                  name="oldPassword"
                  placeholder="Введите старый пароль"
                  onChange={(event) => handleOldPasswordChange(event)}
                />
              </T.FormNewArtBlock>
              <T.FormNewArtBlock>
                <T.FormNewArtLabel>Новый пароль</T.FormNewArtLabel>
                <T.FormNewArtInput
                  type="password"
                  name="newPassword"
                  placeholder="Введите новый пароль"
                  onChange={(event) => handleNewPasswordChange(event)}
                />
              </T.FormNewArtBlock>
              <T.FormNewArtBlock>
                <T.FormNewArtLabel>Повторите новый пароль</T.FormNewArtLabel>
                <T.FormNewArtInput
                  type="password"
                  name="repeatPassword"
                  placeholder="Повторите новый пароль"
                  onChange={(event) => handleRepeatPasswordChange(event)}
                />
              </T.FormNewArtBlock>
              <T.FormNewArtBtnPub onClick={(event) => handleSaveChange(event)}>
                Сохранить
              </T.FormNewArtBtnPub>
              {error && <T.Error>{error}</T.Error>}
            </T.ModalFormNewArt>
          </T.ModalContent>
        </T.ModalBlock>
      </T.ContainerBg>
    </T.Wrapper>
  );
};
