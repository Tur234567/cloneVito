import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as T from "./card.styled";
import noPhoto from "../../img/no-photo.avif";
import { useGetAllUserAdsQuery } from "../../store/services/auth";
export const ContentCard = ({ userId }) => {
  const [dataAds, setDataAds] = useState(null);
  const { data } = useGetAllUserAdsQuery(userId);
  
  useEffect(() => {
    setDataAds(data);
  }, [data]);

  return (
    <>
      {data?.length !== 0 ? (
        <T.ContentCards>
          {dataAds &&
            dataAds.map((item) => (
              <T.CardsItem key={item.id}>
                <T.CardsCard>
                  <T.CardImage>
                    <Link to={`/ads/${item.id}`}>
                      {item.images.length !== 0 ? (
                        <T.CardImageImg
                          src={`http://localhost:8090/${item.images[0].url}`}
                          alt="picture"
                        />
                      ) : (
                        <T.CardImageImg src={noPhoto} alt="noPhoto" />
                      )}
                    </Link>
                  </T.CardImage>
                  <T.CardContent>
                    <Link to={`/ads/${item.id}`}>
                      <T.CardTitle>{item.title}</T.CardTitle>
                    </Link>
                    <T.CardPrice>{item.price}&nbsp;₽</T.CardPrice>
                    <T.CardPlace>{item.city}</T.CardPlace>
                    <T.CardDate>
                      {new Date(item.created_on).toLocaleString("ru", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </T.CardDate>
                  </T.CardContent>
                </T.CardsCard>
              </T.CardsItem>
            ))}
        </T.ContentCards>
      ) : (
        <T.CardTitle>Объявлений пока нет</T.CardTitle>
      )}
    </>
  );
};
