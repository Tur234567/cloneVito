import { Link } from "react-router-dom";

export const host = "http://127.0.0.1:8090";

export const saveTokenToLocalStorage = (token) => {
  localStorage.setItem("token", JSON.stringify(token));
};

export const getTokenFromLocalStorage = () => {
  const token = localStorage.getItem("token");
  return token ? JSON.parse(token) : null;
};

export const removeTokenFromLocalStorage = () => {
  localStorage.removeItem("token");
};

export const updateToken = async () => {
  try {
    const token = getTokenFromLocalStorage();
    const data = await getToken(token);
    saveTokenToLocalStorage(data);
  } catch (error) {
    throw new Error(`Ошибка при обновлении токена:`);
  }
};

export async function getUser(token) {
  const response = await fetch(`${host}/user`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `${token.token_type} ${token.access_token}`,
    },
  });
  if (response.status === 200) {
    return response.json();
  } else if (response.status === 401) {
    updateToken();
    <Link to="login" />;
    return getUser(getTokenFromLocalStorage());
  }
  throw new Error("Нет авторизации");
}

export async function loginUser(email, password) {
  const response = await fetch(`${host}/auth/login`, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      "content-type": "application/json",
    },
  });
  if (response.status === 401 || response.status === 422) {
    throw new Error("Пользователь не авторизован");
  }
  const data = response.json();
  return data;
}

export async function registerUser(
  email,
  password,
  repeatPassword,
  name,
  role,
  surname,
  phone,
  city,
  id
) {
  const response = await fetch(`${host}/auth/register`, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
      name: name,
      role: role,
      surname: surname,
      phone: phone,
      city: city,
      id: id,
    }),
    headers: {
      "content-type": "application/json",
    },
  });
  if (response.status === 400) {
    throw new Error("Такой пользователь уже существует");
  } else if (response.status === 500) {
    throw new Error("Сервер сломался");
  }
  const data = await response.json();
  return data;
}

export const getAllUsers = async () => {
  return fetch(`${host}/user/all`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  }).then((response) => {
    if (response.status === 200) {
      return response.json();
    }

    throw new Error("Ошибка, попробуйте позже");
  });
};

export const getToken = async (token) => {
  return fetch(`${host}/auth/login`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      access_token: token.access_token,
      refresh_token: token.refresh_token,
    }),
  }).then((response) => {
    if (response.status === 201) {
      return response.json();
    }
    if (response.status === 401) {
      throw new Error("Токен устарел");
    }

    throw new Error("Неизвестная ошибка, попробуйте позже");
  });
};

export const updateUser = async (user, token) => {
  return await fetch(`${host}/user`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      Authorization: `${token.token_type} ${token.access_token}`,
    },
    body: JSON.stringify({
      role: "user",
      email: user.email,
      name: user.name,
      surname: user.surname,
      phone: user.phone,
      city: user.city,
    }),
  }).then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    if (response.status === 401) {
      updateToken();
      return updateUser(user, getTokenFromLocalStorage());
    }
    throw new Error("Неизвестная ошибка, попробуйте позже");
  });
};

export const uploadUserAvatar = async (avatar, token) => {
  return fetch(`${host}/user/avatar`, {
    method: "POST",
    headers: {
      Authorization: `${token.token_type} ${token.access_token}`,
    },
    body: avatar,
  }).then((response) => {
    if (response.status === 201) {
      return response.json();
    }
    if (response.status === 401) {
      updateToken();
      return uploadUserAvatar(avatar, getTokenFromLocalStorage());
    }
    throw new Error("Неизвестная ошибка, попробуйте позже");
  });
};

export const updatePassword = async (oldPassword, newPassword, token) => {
  return await fetch(`${host}/user/password`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      Authorization: `${token.token_type} ${token.access_token}`,
    },
    body: JSON.stringify({
      password_1: oldPassword,
      password_2: newPassword,
    }),
  }).then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    if (response.status === 401) {
      updateToken();
      return updatePassword(newPassword, oldPassword, token);
    }
    throw new Error("Неизвестная ошибка, попробуйте позже");
  });
};
