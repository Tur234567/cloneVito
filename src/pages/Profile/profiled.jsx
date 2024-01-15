import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllUsers, getTokenFromLocalStorage, getUser } from "../../api";
import { useAuthSelector } from "../../store/slices/auth";
import { NotFound } from "../NotFound/notFound";
import { MyProfile } from "./myprofile";
import { SellerProfile } from "./sellerProfile";

export const Profiled = (isLoading) => {
  const useAuth = useAuthSelector();
  const [userProfile, setUserProfile] = useState(null);
  const userID = useParams().id;
  const [pageMode, setPageMode] = useState("guest");

  useEffect(() => {
    const fetchData = () => {
      if (userID === "me" || parseInt(userID) === useAuth) {
        if (useAuth) {
          getUser(getTokenFromLocalStorage())
            .then((data) => {
              setUserProfile(data);
              setPageMode("my-profile");
            })
            .catch(() => {
              setPageMode("error");
            });
        } else {
          setPageMode("error");
        }
      } else {
        getAllUsers()
          .then((data) => {
            if (data) {
              const findUser = (arrUsers) => {
                for (let i = 0; i < arrUsers?.length; i++) {
                  if (arrUsers[i].id === parseInt(userID)) {
                    setPageMode("guest");
                    return arrUsers[i];
                  }
                }
                setPageMode("error");
                return null;
              };

              setUserProfile(findUser(data));
            }
          })
          .catch(() => {
            setPageMode("error");
          });
      }
    };

    fetchData();
  }, [userID, useAuth]);
  return (
    <>
      {pageMode === "my-profile" && userProfile && (
        <MyProfile
          userProfile={userProfile}
          setUserProfile={setUserProfile}
          isLoading={isLoading}
        />
      )}
      {pageMode === "guest" && userProfile && (
        <SellerProfile
          userProfile={userProfile}
          isLoading={isLoading}
        />
      )}
      {pageMode === "error" && userProfile && <NotFound />}
    </>
  );
};
