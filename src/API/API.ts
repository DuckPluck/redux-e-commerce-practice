import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const baseUrl = import.meta.env.VITE_APP_API_URL;

const providesList = (resultsWithIds: any, tagType: string) => {
  // ToDo: check providesList fn
  console.log(resultsWithIds, tagType);
  return resultsWithIds ?
    [{ id: 'LIST', type: tagType }, ...resultsWithIds.map(({ id }: {id: number}) => ({ id, type: tagType }))] :
    [{ id: 'LIST', type: tagType }];
};

export const API = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (build) => ({
    getProducts: build.query({
      providesTags: (result) => providesList(result, 'Products'),
      query: (body) => `/products?title=${body.search}&category=${body.category}&_start=0&_end=${body.limit}`,
    }),
  }),
  reducerPath: 'api',
  tagTypes: ['Products'],
});

export const {
  useGetProductsQuery,
} = API;
