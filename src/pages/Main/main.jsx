import { useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer/footer";
import { Header, HeaderAuth } from "../../components/Header/header";
import img from "../../img/logo.png";
import imgMob from "../../img/logo-mob.png";
import * as S from "./main.style";
import noPhoto from "../../img/no-photo.avif";
import { useAuthSelector } from "../../store/slices/auth";

export const MainPage = ({ ads, setAds, isLoading }) => {
  const [searchType, setSearchType] = useState("");
  const auth = useAuthSelector();

  const filteredAds = () => {
    let filterAds = ads;
    if (searchType?.length > 0) {
      filterAds = filterAds.filter(({ title }) =>
        title.toLocaleLowerCase().includes(searchType.toLocaleLowerCase())
      );
    }
    return filterAds;
  };

  const filterAd = filteredAds();

  return (
    <>
      {auth.isAuth === true ? (
        <HeaderAuth ads={ads} setAds={setAds} />
      ) : (
        <Header />
      )}
      <S.MainSearch>
        <S.SearchLogoLink href="#" target="_blank">
          <Link to="/">
            <S.SearchLogoImg src={img} alt="logo" />
          </Link>
        </S.SearchLogoLink>
        <S.SearchLogoMobLink href="#" target="_blank">
          <Link to="/">
            <S.SearchLogoMobImg src={imgMob} alt="logo" />
          </Link>
        </S.SearchLogoMobLink>
        <S.SearchForm action="#">
          <S.SearchText
            type="search"
            placeholder="Поиск по объявлениям"
            name="search"
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
          />
          <S.SearchTextMob
            type="search"
            placeholder="Поиск"
            name="search-mob"
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
          />
          <S.SearchBtn onClick={() => filterAd}>Найти</S.SearchBtn>
        </S.SearchForm>
      </S.MainSearch>
      <S.MainContainer>
        <S.CardTitle>Объявления</S.CardTitle>
        <S.MainContent>
          <S.ContentCards>
            {isLoading ? (
              <S.MainH2>Объявления загружаются...</S.MainH2>
            ) : filterAd?.length > 0 ? (
              filterAd.map((ad, item) => (
                <S.CardsItem key={item}>
                  <S.CardsCard>
                    <S.CardImage key={ad.images}>
                      <Link to={`/ads/${ad.id}`}>
                        {ad.images.length !== 0 ? (
                          <S.Img
                            src={`http://localhost:8090/${ad.images[0]?.url}`}
                            alt="picture"
                          />
                        ) : (
                          <S.Img src={noPhoto} alt="noPhoto" />
                        )}
                      </Link>
                    </S.CardImage>
                    <S.CardContent>
                      <Link to={`/ads/${ad.id}`}>
                        <S.CardTitle>{ad.title}</S.CardTitle>
                      </Link>
                      <S.CardPrice>{ad.price}&nbsp;₽</S.CardPrice>
                      <S.CardPlace>{ad.user.city}</S.CardPlace>
                      <S.CardDate>
                        {new Date(ad.created_on).toLocaleString("ru", {
                          addSuffix: true,
                        })}
                      </S.CardDate>
                    </S.CardContent>
                  </S.CardsCard>
                </S.CardsItem>
              ))
            ) : (
              <S.CardTitle>Ничего не найдено</S.CardTitle>
            )}
          </S.ContentCards>
        </S.MainContent>
      </S.MainContainer>
      <Footer />
    </>
  );
};
