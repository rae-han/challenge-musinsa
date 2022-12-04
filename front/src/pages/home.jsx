import React, { useCallback, useEffect, useReducer, useRef, useState } from 'react';
import DefaultLayout from '@layouts/DefaultLayout';
import Filter from '@components/Filter';
import Goods from '@components/Goods';
import Loading from '@components/Loading';
import { fetchGoodsAPI } from '../apis/menu';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

const _LAST_DATA_INDEX = 3;

function Home() {
  const [filters, setFilters] = useState([]);
  const { data: goodsList, isFetching } = useInfiniteScroll(fetchGoodsAPI, _LAST_DATA_INDEX, filters);

  return (
    <DefaultLayout>
      <Filter filters={filters} setFilters={setFilters} goodsList={goodsList}></Filter>
      <Goods goodsList={goodsList} filters={filters} ></Goods>
      {isFetching && <Loading />}
    </DefaultLayout>
  )
}

export default Home;