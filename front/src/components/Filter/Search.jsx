import React, { useCallback, useState } from 'react';
import { SearchContainer } from '@components/Filter/styles';

function Search ({ setFilters }) {
  const [value, setValue] = useState('')

  const onChange = useCallback(e => {
    setValue(e.target.value)
  }, [value]);

  const onSubmit = useCallback(e => {
    e.preventDefault();

    if (!value) {
      return;
    }

    const values = value.split(' ');

    values.forEach()

    setFilters(prev => prev.concat({
      key: value,
      title: value,
      type: 'keyword',
      cb: () => {}
    }))
    setValue('');
  }, [value])

  return (
    <SearchContainer>
      <form onSubmit={onSubmit}>
        <input
          className="search__input" type='text'
          placeholder="상품명 검색"
          value={value}
          onChange={onChange}
        />
        <button className="search__button"></button>
      </form>

    </SearchContainer>
  )
}

export default Search;