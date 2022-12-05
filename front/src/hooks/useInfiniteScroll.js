import { useCallback, useEffect, useState } from 'react';

const throttle = (handler, timeout = 500) => {
  let invokedTime;
  let timer;
  return (...args) => {
    if (!invokedTime) {
      handler.apply(this, args)
      invokedTime = Date.now()
    } else {
      clearTimeout(timer)
      timer = window.setTimeout(() => {
        if (Date.now() - invokedTime >= timeout) {
          handler.apply(this, args)
          invokedTime = Date.now()
        }
      }, Math.max(timeout - (Date.now() - invokedTime), 0))
    }
  }
}

export const useInfiniteScroll = (fetcher, limit = 3, filters) => {
  const [page, setPage] = useState(0)
  const [data, setData] = useState([])
  const [isFetching, setIsFetching] = useState(false)
  const [hasNextPage, setHasNextPage] = useState(true)

  const executeFetch = useCallback(async () => {
    try {
      if (!hasNextPage) {
        setIsFetching(false)
        return { data, isFetching };
      }

      const { data: { list } } = await fetcher(page);

      setData(prev => prev.concat(list));
      setPage(prev => prev + 1);
      setHasNextPage(page < limit)
      setIsFetching(false)
    } catch (err) {
      console.error(err)
    }
  }, [page]);

  useEffect(() => {
    setIsFetching(true);
  }, [])

  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollY = window.scrollY;
      const { clientHeight, scrollHeight } = document.documentElement;

      console.log(scrollY, clientHeight, scrollHeight, scrollY + clientHeight + 380 >= scrollHeight)
      if (scrollY + clientHeight + 380 >= scrollHeight) {
        setIsFetching(true)
      }
    })

    const scrollY = window.scrollY;
    const { clientHeight, scrollHeight } = document.documentElement;

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /**
   * @description 필터링 했을 경우, 목록 아이템이 부족하다면 자동으로 데이터를 더 불러오게 해주는 코드.
   */
  useEffect(() => {
    const scrollY = window.scrollY;
    const { clientHeight, scrollHeight } = document.documentElement;

    if (scrollY + clientHeight + 380 >= scrollHeight) {
      setIsFetching(true)
    }
  }, [filters])

  useEffect(() => {
    console.log('here')
    if (isFetching && hasNextPage) executeFetch()
    else if (!hasNextPage) setIsFetching(false)
  }, [isFetching])

  return { data, isFetching, hasNextPage }
}