import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { getTokenFromLocalStorage, updateToken } from "../../api";
import {
  useDeleteAdsImagesMutation,
  useGetAdsByIdQuery,
  useGetEditAdsMutation,
  usePostAdsImageMutation,
} from "../../store/services/auth";
import * as T from "./addAds.styled";

export const EditAds = ({ setOpenFormEditAds, setCurrAds, currAds }) => {
  const closeForm = () => {
    setOpenFormEditAds(false);
  };

  const { id } = useParams();
  const { data } = useGetAdsByIdQuery(id);
  const [editAdsRequest, { isError }] = useGetEditAdsMutation(id);
  const [deleteImages] = useDeleteAdsImagesMutation(id);
  const [postAdsImage] = usePostAdsImageMutation(id);
  const [images, setImages] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [saveButtonActive, setSaveButtonActive] = useState(true);

  const ads = useMemo(() => data || [], [data]);

  const handleAdTitleChange = (event) => {
    setTitle(event.target.value);
    setSaveButtonActive(true);
  };

  const handleAdDescriptionChange = (event) => {
    setDescription(event.target.value);
    setSaveButtonActive(true);
  };

  const handleAdPriceChange = (event) => {
    setPrice(event.target.value);
    setSaveButtonActive(true);
  };

  useEffect(() => {
    setTitle(ads.title);
    setDescription(ads.description);
    setPrice(ads.price);
  }, [data]); // eslint-disable-line

  const handleSaveChanges = async (event) => {
    event.preventDefault();
    editAdsRequest({
      token: getTokenFromLocalStorage(),
      id: id,
      ads: { title: title, description: description, price: price },
    });
    setSaveButtonActive(false);
    setOpenFormEditAds(false);
  };

  useEffect(() => {
    if (isError.status === 401) {
      updateToken();
      editAdsRequest({
        token: getTokenFromLocalStorage(),
        id: id,
        ads: { title: title, description: description, price: price },
      });
    }
    setSaveButtonActive(true);
  }, [isError]); // eslint-disable-line

  const handleImgUpload = async (file) => {
    const formData = new FormData();
    if (file) {
      formData.append("file", file);
      postAdsImage({
        token: getTokenFromLocalStorage(),
        image: formData,
        id: ads.id,
      });
      setSaveButtonActive(true);
      setImages(images);
    } else {
      console.log("Файл не найден");
    }
  };

  const handleDeleteImage = async (image) => {
    deleteImages({
      token: getTokenFromLocalStorage(),
      image: image,
      id: ads.id,
    });
    setSaveButtonActive(true);
    setImages(images);
  };

  useEffect(() => {
    if (data) {
      setImages(data.images);
    }
  }, [data]);

  return (
    <T.Wrapper>
      <T.ContainerBg>
        <T.ModalBlock>
          <T.ModalContent>
            <T.ModalTitle>Редактировать объявление</T.ModalTitle>
            <T.ModalBtnClose>
              <T.ModalBtnCloseLine onClick={closeForm}></T.ModalBtnCloseLine>
            </T.ModalBtnClose>
            <T.ModalFormNewArt id="formNewArt" action="#">
              <T.FormNewArtBlock>
                <T.FormNewArtLabel htmlFor="name">Название</T.FormNewArtLabel>
                <T.FormNewArtInput
                  type="text"
                  name="name"
                  id="formName"
                  placeholder={ads.title}
                  onChange={handleAdTitleChange}
                />
              </T.FormNewArtBlock>
              <T.FormNewArtBlock>
                <T.FormNewArtLabel htmlFor="text">Описание</T.FormNewArtLabel>
                <T.FormNewArtArea
                  name="text"
                  id="formArea"
                  cols="auto"
                  rows="10"
                  placeholder={ads.description}
                  onChange={handleAdDescriptionChange}
                ></T.FormNewArtArea>
              </T.FormNewArtBlock>
              <T.FormNewArtBlock>
                <T.FormNewArtP>
                  Фотографии товара
                  <T.FormNewArtPSpan>не более 5 фотографий</T.FormNewArtPSpan>
                </T.FormNewArtP>
                <T.FormNewArtBarImg>
                  {data &&
                    data.images.map((image, index) => (
                      <T.FormNewArtImg key={index}>
                        <T.DeleteImageBtn
                          onClick={() => handleDeleteImage(image)}
                        >
                          x
                        </T.DeleteImageBtn>
                        <T.FormNewArtImgImg
                          src={
                            !image.url
                              ? ""
                              : `http://localhost:8090/${image.url}`
                          }
                          alt=""
                        />
                      </T.FormNewArtImg>
                    ))}
                  <T.FormNewArtImg>
                    <T.FormNewArtImgCover
                      type="file"
                      id="upload-photo"
                      accept="image/*"
                      onChange={(event) => {
                        const file = event.target.files?.[0];
                        if (file) {
                          setImages(file);
                          handleImgUpload(file);
                        }
                      }}
                    ></T.FormNewArtImgCover>
                  </T.FormNewArtImg>
                  <T.FormNewArtImg>
                    <T.FormNewArtImgCover
                      type="file"
                      id="upload-photo"
                      accept="image/*"
                      onChange={(event) => {
                        const file = event.target.files?.[0];
                        if (file) {
                          setImages(file);
                          handleImgUpload(file);
                        }
                      }}
                    ></T.FormNewArtImgCover>
                  </T.FormNewArtImg>
                  <T.FormNewArtImg>
                    <T.FormNewArtImgCover
                      type="file"
                      id="upload-photo"
                      accept="image/*"
                      onChange={(event) => {
                        const file = event.target.files?.[0];
                        if (file) {
                          setImages(file);
                          handleImgUpload(file);
                        }
                      }}
                    ></T.FormNewArtImgCover>
                  </T.FormNewArtImg>
                  <T.FormNewArtImg>
                    <T.FormNewArtImgCover
                      type="file"
                      id="upload-photo"
                      accept="image/*"
                      onChange={(event) => {
                        const file = event.target.files?.[0];
                        if (file) {
                          setImages(file);
                          handleImgUpload(file);
                        }
                      }}
                    ></T.FormNewArtImgCover>
                  </T.FormNewArtImg>
                  <T.FormNewArtImg>
                    <T.FormNewArtImgCover
                      type="file"
                      id="upload-photo"
                      accept="image/*"
                      onChange={(event) => {
                        const file = event.target.files?.[0];
                        if (file) {
                          setImages(file);
                          handleImgUpload(file);
                        }
                      }}
                    ></T.FormNewArtImgCover>
                  </T.FormNewArtImg>
                </T.FormNewArtBarImg>
              </T.FormNewArtBlock>
              <T.FormNewArtBlockPrice>
                <T.FormNewArtLabel htmlFor="price">Цена</T.FormNewArtLabel>
                <T.FormNewArtInputPrice
                  type="text"
                  name="price"
                  id="formName"
                  accept="image/*"
                  placeholder={data?.price}
                  onChange={handleAdPriceChange}
                />
                <T.FormNewArtInputPriceCover></T.FormNewArtInputPriceCover>
              </T.FormNewArtBlockPrice>

              <T.FormNewArtBtnPub
                id="btnPublish"
                disabled={!saveButtonActive}
                onClick={(event) => handleSaveChanges(event)}
              >
                Сохранить
              </T.FormNewArtBtnPub>
            </T.ModalFormNewArt>
          </T.ModalContent>
        </T.ModalBlock>
      </T.ContainerBg>
    </T.Wrapper>
  );
};
