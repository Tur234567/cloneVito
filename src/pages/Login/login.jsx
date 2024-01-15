import * as S from "./login.style";
import img from "../../img/logo_modal.png";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser, registerUser, saveTokenToLocalStorage } from "../../api";
import { setAuth } from "../../store/slices/auth";
import { Link, useNavigate } from "react-router-dom";
import { saveUserIdToState } from "../../App";

export const Login = ({ isLoginMode = true }) => {
  const [login, setLogin] = useState(false);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (email, password) => {
    if (!email) {
      setError("Не заполнена почта");
      return;
    } else if (!password) {
      setError("Не введён пароль");
      return;
    }
    setLogin(true);
    try {
      await loginUser(email, password).then((dat) => {
        dispatch(
          setAuth({
            email: email,
            password: password,
            user: JSON.parse(localStorage.getItem("user")),
          })
        );
        navigate("/");
        saveTokenToLocalStorage(dat);
        saveUserIdToState(dat);
      });
    } catch (erro) {
      setError(erro.message);
    } finally {
      setLogin(false);
    }
  };
  useEffect(() => {
    setError(null);
  }, [isLoginMode, email, password]);

  return (
    <S.ContainerEnter>
      <S.ModalBlock>
        <S.ModalFormLogin id="formLogIn" action="#">
          <S.ModalLogo>
            <S.ModalLogoImg src={img} alt="logo" />
          </S.ModalLogo>
          <S.ModalInputLogin
            type="text"
            name="login"
            id="formlogin"
            placeholder="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <S.ModalInputPassword
            type="password"
            name="password"
            id="formpassword"
            placeholder="Пароль"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          {error && <S.Error>{error}</S.Error>}
          <S.ModalBtnEnter id="btnEnter">
            <S.ModalBtnEnterLink onClick={() => handleLogin(email, password)}>
              Войти
            </S.ModalBtnEnterLink>
          </S.ModalBtnEnter>
          <S.ModalBtnSignup id="btnSignUp">
            <S.ModalBtnSignupLink to={"/registration"}>
              Зарегистрироваться
            </S.ModalBtnSignupLink>
          </S.ModalBtnSignup>
        </S.ModalFormLogin>
      </S.ModalBlock>
    </S.ContainerEnter>
  );
};

export const Registration = ({ isLoginMode = false }) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [register, setRegister] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState("");
  const handleRegister = async (
    email,
    password,
    repeatPassword,
    name,
    city,
    lastName
  ) => {
    if (!email) {
      setError("Не заполнена почта");
      return;
    } else if (!password) {
      setError("Не введён пароль");
      return;
    } else if (!repeatPassword) {
      setError("Не введён пароль повторно");
      return;
    } else if (password !== repeatPassword) {
      setError("Пароли не совпадают");
      return;
    }
    setRegister(true);
    try {
      await registerUser(
        email,
        password,
        repeatPassword,
        name,
        city,
        lastName
      ).then((dat) => {
        dispatch(
          setAuth({
            email: dat.email,
            id: 0,
            name: dat.name,
            surname: "",
            password: dat.password,
            city: dat.city,
            role: "user",
          })
        );
        saveTokenToLocalStorage(dat);
        saveUserIdToState(false);
        navigate("/login");
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setRegister(false);
    }
  };

  useEffect(() => {
    setError(null);
  }, [isLoginMode, email, password, repeatPassword, name, city, lastName]);
  return (
    <S.ContainerEnter>
      <S.ModalBlockRegister>
        <S.ModalFormReg id="formLogUp" action="#">
          <S.ModalLogo>
            <S.ModalLogoImg src={img} alt="logo" />
          </S.ModalLogo>
          <S.ModalInputRegister
            type="text"
            name="login"
            id="loginReg"
            placeholder="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <S.ModalInputRegister
            type="password"
            name="password"
            id="passwordFirst"
            placeholder="Пароль"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <S.ModalInputRegister
            type="password"
            name="new-password"
            id="passwordSecond"
            placeholder="Повторите пароль"
            value={repeatPassword}
            onChange={(event) => {
              setRepeatPassword(event.target.value);
            }}
          />
          <S.ModalInputRegister
            type="text"
            name="first-name"
            id="first-name"
            placeholder="Имя (необязательно)"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <S.ModalInputRegister
            type="text"
            name="first-last"
            id="first-last"
            placeholder="Фамилия (необязательно)"
            value={lastName}
            onChange={(event) => {
              setLastName(event.target.value);
            }}
          />
          <S.ModalInputRegister
            type="text"
            name="city"
            id="city"
            placeholder="Город (необязательно)"
            value={city}
            onChange={(event) => {
              setCity(event.target.value);
            }}
          />
          {error && <S.Error>{error}</S.Error>}
          <S.ModalBtnReg id="SignUpEnter">
            <S.ModalBtnRegLink
              onClick={() =>
                handleRegister(
                  email,
                  password,
                  repeatPassword,
                  name,
                  city,
                  lastName
                )
              }
            >
              Зарегистрироваться
            </S.ModalBtnRegLink>
          </S.ModalBtnReg>
          <S.ModalBlockText>
            Уже есть аккаунт, <Link to={"/login"}>войдите</Link>
          </S.ModalBlockText>
        </S.ModalFormReg>
      </S.ModalBlockRegister>
    </S.ContainerEnter>
  );
};
