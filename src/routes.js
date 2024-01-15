import { Route, Routes } from "react-router-dom";
import { Article } from "./pages/Article/article";
import { Login, Registration } from "./pages/Login/login";
import { MainPage } from "./pages/Main/main";
import { NotFound } from "./pages/NotFound/notFound";
import { Profiled } from "./pages/Profile/profiled";
import { ProtectedRoute } from "./protector-router";

export const AppRoutes = ({ ads, isLoading, setAds }) => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route
        path="/"
        element={<MainPage ads={ads} isLoading={isLoading} setAds={setAds} />}
      />
      <Route path="/ads/:id" element={<Article ads={ads} setAds={setAds} />} />
      <Route
        path="/profile/:id"
        element={<Profiled ads={ads} setAds={setAds} isLoading={isLoading} />}
      />
      <Route
        element={
          <ProtectedRoute isAllowed={Boolean(localStorage.getItem("token"))} />
        }
      >
        <Route path="/ads/me" element={<Article ads={ads} setAds={setAds} />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
