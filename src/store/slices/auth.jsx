import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getTokenFromLocalStorage } from "../../api";

const initialState = {
  email: "",
  surname: "",
  city: "",
  name: "",
  avatar: "",
  sells_from: "",
  phone: "",
  role: "",
  id: 0,
  token: "",
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: getTokenFromLocalStorage() ?? initialState,
  reducers: {
    setAuth(state, action) {
      const payload = action.payload ?? initialState;
      state.email = payload.email;
      state.surname = payload.surname;
      state.city = payload.city;
      state.name = payload.name;
      state.id = payload.id;
      state.sells_from = payload.sells_from;
      state.phone = payload.phone;
      state.token = payload.token;
      state.isAuth = true;

      localStorage.setItem("auth", JSON.stringify(state));
    },
  },
});
export const { setAuth } = authSlice.actions;
export default authSlice.reducer;

export const useLogout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return () => {
    dispatch(setAuth(null));
    navigate("/login");
  };
};

export const useAuthSelector = () => {
  const { email, id, city, name, surname, sells_from, phone, token, isAuth } =
    useSelector((store) => store.auth);
  return {
    isAuth,
    email,
    id,
    city,
    name,
    surname,
    sells_from,
    phone,
    token,
  };
};
