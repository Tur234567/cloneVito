import { Footer } from "../../components/Footer/footer";
import { Link, useParams } from "react-router-dom";
import { HeaderAuth, Header } from "../../components/Header/header";
import { MainMenu } from "../../components/Menu/menu";
import * as S from "../../style/App.style";
import * as T from "./article.styled";
import { useEffect, useState } from "react";
import noPhoto from "../../img/no-photo.avif";
import noAvatar from "../../img/myprofile.png";
import {
  useGetAdsByIdQuery,
  useDeleteAdsMutation,
  useGetAllCommentsQuery,
} from "../../store/services/auth";
import { useAuthSelector } from "../../store/slices/auth";
import { EditAds } from "../../modal/AddAds/editAds";
import { Comments } from "../../modal/comments/comments";
import { getTokenFromLocalStorage } from "../../api";

export const Article = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetAdsByIdQuery(id);
  const [showPhone, setShowPhone] = useState(false);
  const auth = useAuthSelector();
  const [openFormEditAds, setOpenFormEditAds] = useState(false);
  const [openFormComments, setOpenFormComments] = useState(false);
  const [deleteAds, { isError }] = useDeleteAdsMutation(id);
  const [comments, setAdsComments] = useState([]);
  const { data: adsComments } = useGetAllCommentsQuery(id);
  const [saveButton, setSaveButton] = useState(true);
  const [currAds, setCurrAds] = useState(null);

  const clickShowPhone = () => {
    setShowPhone(true);
  };

  const handleDeleteAds = async () => {
    deleteAds({
      token: getTokenFromLocalStorage(),
      id: id,
    });
    setSaveButton(false);
  };

  useEffect(() => {
    if (isError.status === 401) {
      deleteAds({
        token: getTokenFromLocalStorage(),
        id: id,
      });
      setSaveButton(false);
    }
  }, [isError]); // eslint-disable-line

  useEffect(() => {
    if (adsComments) {
      setAdsComments(adsComments);
    }
  }, [adsComments]);

  const [selectedCard, setSelectedCard] = useState(null);
  const [ind, setInd] = useState(null);

  const handleCardClick = (card, i) => {
    setSelectedCard(card);
    setInd(i);
  };

  return (
    <>
      {openFormEditAds && (
        <EditAds
          setOpenFormEditAds={setOpenFormEditAds}
          currAds={data}
          setCurrAds={setCurrAds}
        />
      )}
      {openFormComments && (
        <Comments
          setOpenFormComments={setOpenFormComments}
          comments={comments}
          setAdsComments={setAdsComments}
        />
      )}
      {auth.isAuth === true ? (
        <HeaderAuth ads={data} setAds={currAds} />
      ) : (
        <Header />
      )}
      <S.Main>
        <T.MainContainer>
          {isLoading ? (
            <T.ArticleTitle>Объявление загружается...</T.ArticleTitle>
          ) : (
            <T.MainCenterBlock>
              <MainMenu />
              <T.MainArtic>
                <T.ArticContent>
                  <T.ArticleLeft>
                    <T.ArticleFillImg>
                      <T.ArticleImg>
                        {data?.images.length !== 0 ? (
                          !selectedCard ? (
                            <T.ArticleImgImg
                              src={`http://localhost:8090/${data.images[0].url}`}
                            />
                          ) : (
                            <T.ArticleImgImg
                              id={ind}
                              src={`http://localhost:8090/${selectedCard.url}`}
                            />
                          )
                        ) : (
                          <T.ArticleImgImg src={noPhoto} alt="noPhoto" />
                        )}
                      </T.ArticleImg>
                      <T.ArticleImgBar>
                        {data.images.map((imag, index) => (
                          <T.ArticleImgBarDiv
                            key={index}
                            onClick={() => handleCardClick(imag, index)}
                          >
                            <T.ArticleImgBarDivImg
                              src={`http://localhost:8090/${imag.url}`}
                              alt=""
                            />
                          </T.ArticleImgBarDiv>
                        ))}
                      </T.ArticleImgBar>
                      <T.ArticleImgBarMob>
                        <T.ImgBarMobCircleActive></T.ImgBarMobCircleActive>
                        <T.ImgBarMobCircle></T.ImgBarMobCircle>
                      </T.ArticleImgBarMob>
                    </T.ArticleFillImg>
                  </T.ArticleLeft>
                  <T.ArticleRight>
                    <T.ArticleBlock>
                      <T.ArticleTitle>{data.title}</T.ArticleTitle>
                      <T.ArticleInfo>
                        <T.ArticleDate>
                          {new Date(data.created_on).toLocaleString("ru", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </T.ArticleDate>
                        <T.ArticleCity>{data.user.city}</T.ArticleCity>
                        <T.ArticleLink
                          onClick={() => setOpenFormComments(true)}
                        >
                          {adsComments ? adsComments.length : "..."} отзыв
                        </T.ArticleLink>
                      </T.ArticleInfo>
                      <T.ArticlePrice>{data.price}.₽</T.ArticlePrice>
                      {auth.email === data.user.email ? (
                        <T.ArticleBtnBlock>
                          <T.ArticleBtnReduct
                            onClick={() => setOpenFormEditAds(true)}
                          >
                            Редактировать
                          </T.ArticleBtnReduct>
                          <T.ArticleBtnRemove onClick={handleDeleteAds}>
                            Снять с публикации
                          </T.ArticleBtnRemove>
                          {!saveButton ? (
                            <T.MainText>Объявление удалено</T.MainText>
                          ) : (
                            ""
                          )}
                        </T.ArticleBtnBlock>
                      ) : (
                        <T.ArticleBtn onClick={clickShowPhone}>
                          Показать&nbsp;телефон
                          <T.ArticleBtnSpan>
                            {!showPhone ? `+7 XXX XXX XX XX` : data.user.phone}
                          </T.ArticleBtnSpan>
                        </T.ArticleBtn>
                      )}
                      <T.ArticleAuthor>
                        <T.AuthorImg>
                          {data.user.avatar ? (
                            <T.AuthorImgImg
                              src={`http://localhost:8090/${data.user.avatar}`}
                              alt=""
                            />
                          ) : (
                            <T.AuthorImgImg src={noAvatar} alt="" />
                          )}
                        </T.AuthorImg>
                        <T.AuthorCont key={data.user.id}>
                          <Link to={`/profile/${data.user.id}`}>
                            <T.AuthorName>{data.user.name}</T.AuthorName>
                            <T.AuthorAbout>
                              Продает товары с&nbsp;
                              {new Date(data.user.sells_from).toLocaleString(
                                "ru",
                                {
                                  month: "long",
                                  year: "numeric",
                                }
                              )}
                            </T.AuthorAbout>
                          </Link>
                        </T.AuthorCont>
                      </T.ArticleAuthor>
                    </T.ArticleBlock>
                  </T.ArticleRight>
                </T.ArticContent>
              </T.MainArtic>
              <T.MainTitle>Описание товара</T.MainTitle>
              <T.MainContent>
                <T.MainText>{data.description}</T.MainText>
              </T.MainContent>
            </T.MainCenterBlock>
          )}
        </T.MainContainer>
      </S.Main>
      <Footer />
    </>
  );
};
