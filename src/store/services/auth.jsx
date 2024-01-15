import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getTokenFromLocalStorage, host } from "../../api";

export const setUserId = (userId) => {
  return {
    type: "USER_TAG",
    payload: userId,
  };
};

const DATA_TAG = {
  type: "ADS",
  id: "LIST",
};

export const userApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: host,
    prepareHeaders: (headers) => {
      const token = getTokenFromLocalStorage();
      console.debug("Токен из стора", { token });
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllAds: builder.query({
      query: () => "/ads?sorting=new",
      providesTags: [DATA_TAG],
    }),
    getAllUserAds: builder.query({
      query: (userId) => `/ads?user_id=${userId}&sorting=new`,
      providesTags: [DATA_TAG],
    }),
    getCurrentUserAds: builder.query({
      query: () => `/ads/me`,
      providesTags: [DATA_TAG],
    }),
    getAdsById: builder.query({
      query: (id) => `/ads/${id}`,
      providesTags: [DATA_TAG],
    }),
    getAddAds: builder.mutation({
      query: ({ token, ads }) => ({
        url: "/adstext",
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: `${token.token_type} ${token.access_token}`,
        },
        body: JSON.stringify({
          title: ads.title,
          description: ads.description,
          price: ads.price,
        }),
      }),
      invalidatesTags: [DATA_TAG],
    }),
    getEditAds: builder.mutation({
      query: ({ id, token, ads }) => ({
        url: `/ads/${id}`,
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          Authorization: `${token.token_type} ${token.access_token}`,
        },
        body: JSON.stringify({
          title: ads.title,
          description: ads.description,
          price: ads.price,
        }),
      }),
      invalidatesTags: [DATA_TAG],
    }),
    postAdsImage: builder.mutation({
      query: ({ token, image, id }) => ({
        url: `/ads/${id}/image`,
        method: "POST",
        headers: {
          Authorization: `${token.token_type} ${token.access_token}`,
        },
        body: image,
      }),
      invalidatesTags: [DATA_TAG],
    }),
    deleteAds: builder.mutation({
      query: ({ id, token }) => {
        return {
          url: `/ads/${id}`,
          method: "DELETE",
          headers: {
            "content-type": "application/json",
            Authorization: `${token.token_type} ${token.access_token}`,
          },
        };
      },
      invalidatesTags: [DATA_TAG],
    }),
    deleteAdsImages: builder.mutation({
      query: ({ image, token, id }) => {
        const url = image?.url;
        return {
          url: `/ads/${id}/image?file_url=${url}`,
          method: "DELETE",
          headers: {
            "content-type": "application/json",
            Authorization: `${token.token_type} ${token.access_token}`,
          },
        };
      },
      invalidatesTags: [DATA_TAG],
    }),
    getAllComments: builder.query({
      query: (id) => `/ads/${id}/comments`,
      invalidatesTags: ["CMT"],
    }),
    addComment: builder.mutation({
      query: ({ token, text, id }) => ({
        url: `/ads/${id}/comments`,
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: `${token.token_type} ${token.access_token}`,
        },
        body: JSON.stringify({ text }),
      }),
      invalidatesTags: [{ type: "CMT", id: "LIST" }],
    }),
  }),
});

export const {
  useGetCurrentUserAdsQuery,
  useGetAdsByIdQuery,
  useGetAddAdsMutation,
  usePostAdsImageMutation,
  useGetAllAdsQuery,
  useGetAllUserAdsQuery,
  useGetEditAdsMutation,
  useDeleteAdsMutation,
  useDeleteAdsImagesMutation,
  useGetAllCommentsQuery,
  useAddCommentMutation,
} = userApi;
