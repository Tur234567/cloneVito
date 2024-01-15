import { Footer } from "../../components/Footer/footer";
import { HeaderAuth } from "../../components/Header/header";
import { MainMenu } from "../../components/Menu/menu";
import * as S from "../../style/App.style";
import * as T from "./profile.style";
import { ContentCard } from "../../components/Cards/cards";
import { useState } from "react";
import {
  getTokenFromLocalStorage,
  updateUser,
  uploadUserAvatar,
} from "../../api";
import { useRef } from "react";
import noPhoto from "../../img/myprofile.png";
import { EditPassword } from "../../modal/EditPassword/editPassword";

export const MyProfile = ({
  userProfile,
  setUserProfile,
  isLoading,
}) => {
  const [currentProfiled, setCurrentProfiled] = useState(userProfile);
  const [img, setImg] = useState(null);
  const profiledRef = useRef();
  const [openFormChangePassword, setOpenFormChangePassword] = useState(false);

  const handleName = (event) => {
    event.preventDefault();
    setCurrentProfiled({ ...currentProfiled, name: event.target.value });
  };
  const handleSurname = (event) => {
    event.preventDefault();
    setCurrentProfiled({ ...currentProfiled, surname: event.target.value });
  };
  const handleCity = (event) => {
    event.preventDefault();
    setCurrentProfiled({ ...currentProfiled, city: event.target.value });
  };
  const handlePhone = (event) => {
    event.preventDefault();
    setCurrentProfiled({ ...currentProfiled, phone: event.target.value });
  };

  const handleAvatarClick = (event) => {
    const fileUpload = document.getElementById("file-upload");
    fileUpload.click();
    setCurrentProfiled({ ...currentProfiled, avatar: event.target.value });
  };

  const handleAvatarUpload = (file) => {
    const formData = new FormData();
    if (file) {
      formData.append("file", file);
      uploadUserAvatar(formData, getTokenFromLocalStorage())
        .then((data) => {
          setUserProfile(data);
        })
        .catch((error) => {
          console.error("Error fetching workout data:", error);
        });
    } else {
      console.log("Файл не найден");
    }
  };

  const handleSaveChanges = (event) => {
    event.preventDefault();
    updateUser(currentProfiled, getTokenFromLocalStorage())
      .then((data) => {
        setUserProfile(data);
      })
      .catch((error) => {
        console.error("Error fetching workout data:", error);
      });
  };

  return (
    <>
      {openFormChangePassword && (
        <EditPassword setOpenFormChangePassword={setOpenFormChangePassword} />
      )}
      <HeaderAuth/>
      <S.Main>
        {isLoading ? (
          <T.MainContainer>
            <T.MainCenterBlock>
              <MainMenu />
              <T.MainH2>
                Здравствуйте,&nbsp;
                {userProfile.name ? userProfile.name : userProfile.email}!
              </T.MainH2>
              <T.MainProfile>
                <T.ProfileContent>
                  <T.ProfileTitle>Настройки профиля</T.ProfileTitle>
                  <T.ProfileSettings>
                    <T.SettingsLeft>
                      <T.SettingsImg>
                        {userProfile.avatar ? (
                          <T.Img
                            src={
                              img
                                ? URL.createObjectURL(img)
                                : `http://localhost:8090/${userProfile.avatar}`
                            }
                          />
                        ) : (
                          <T.Img src={noPhoto} />
                        )}
                      </T.SettingsImg>
                      <T.SettingsImgInput
                        id="file-upload"
                        type="file"
                        accept="image/*"
                        onChange={(event) => {
                          event.preventDefault();
                          const file = event.target.files?.[0];
                          if (file) {
                            setImg(file);
                            handleAvatarUpload(file);
                          }
                        }}
                      ></T.SettingsImgInput>
                      <T.SettingsChangePhoto onClick={handleAvatarClick}>
                        Заменить
                      </T.SettingsChangePhoto>
                    </T.SettingsLeft>
                    <T.SettingsRight>
                      <T.SettingsForm>
                        <T.SettingsDiv>
                          <T.SettingsFormLabel htmlFor="name">
                            Имя
                          </T.SettingsFormLabel>
                          <T.SettingsFormInput
                            id="settings-name"
                            name="name"
                            type="text"
                            placeholder={userProfile.name}
                            ref={profiledRef}
                            onChange={(event) => handleName(event)}
                          />
                        </T.SettingsDiv>

                        <T.SettingsDiv>
                          <T.SettingsFormLabel htmlFor="name">
                            Фамилия
                          </T.SettingsFormLabel>
                          <T.SettingsFormInput
                            id="settings-name"
                            name="surname"
                            type="text"
                            placeholder={userProfile.surname}
                            ref={profiledRef}
                            onChange={(event) => {
                              handleSurname(event);
                            }}
                          />
                        </T.SettingsDiv>

                        <T.SettingsDiv>
                          <T.SettingsFormLabel htmlFor="city">
                            Город
                          </T.SettingsFormLabel>
                          <T.SettingsFormInput
                            id="settings-city"
                            name="city"
                            type="text"
                            placeholder={userProfile.city}
                            ref={profiledRef}
                            onChange={(event) => {
                              handleCity(event);
                            }}
                          />
                        </T.SettingsDiv>

                        <T.SettingsDiv>
                          <T.SettingsFormLabel htmlFor="phone">
                            Телефон
                          </T.SettingsFormLabel>
                          <T.SettingsFormInput
                            id="settings-phone"
                            name="phone"
                            type="tel"
                            width={614}
                            placeholder={userProfile.phone}
                            ref={profiledRef}
                            onChange={(event) => {
                              handlePhone(event);
                            }}
                          />
                        </T.SettingsDiv>
                        <T.SettingsBtn
                          id="settings-btn"
                          onClick={(event) => handleSaveChanges(event)}
                        >
                          Сохранить
                        </T.SettingsBtn>
                        <T.SettingsBtn
                          onClick={(event) => {
                            event.preventDefault();
                            setOpenFormChangePassword(true);
                          }}
                        >
                          Изменить пароль
                        </T.SettingsBtn>
                      </T.SettingsForm>
                    </T.SettingsRight>
                  </T.ProfileSettings>
                </T.ProfileContent>
              </T.MainProfile>
              <T.MainTitle>Мои товары</T.MainTitle>
            </T.MainCenterBlock>
            <T.MainContent>
              <ContentCard userId={userProfile.id} />
            </T.MainContent>
          </T.MainContainer>
        ) : (
          <T.ProfileTitle>Профиль загружается...</T.ProfileTitle>
        )}
      </S.Main>
      <Footer />
    </>
  );
};
