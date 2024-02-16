import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';


const baseUrl = import.meta.env.VITE_APP_API_URL;

const providesList = (resultsWithIds: any, tagType: string) => {
  // ToDo: check providesList fn
  console.log(resultsWithIds, tagType);
  return resultsWithIds ?
    [{ id: 'LIST', type: tagType },
      ...resultsWithIds.map(({ id }: {id: number}) => ({ id, type: tagType }))] :

    [{ id: 'LIST', type: tagType }];
};

export const API = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (build) => ({
    getProducts: build.query({
      providesTags: (result) => providesList(result, 'Products'),
      query: (body) => body.search ?
        `/products?title=${body.search}` :
        `/products?category=${body.category}&start=0&end=${body.limit}`,
    }),
  }),
  reducerPath: 'api',
  tagTypes: ['Products'],
});

export const {
  // FixMe: handle useGetProductsQuery export
  useGetProductsQuery,
} = API;
