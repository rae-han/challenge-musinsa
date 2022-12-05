import React, { useCallback, useState } from 'react';
import { SearchContainer } from '@components/Filter/styles';
import AutoComplete from '@components/Filter/AutoComplete';
import useDebounce from '../../hooks/useDebounce';

function Search ({ setFilters, goodsList }) {
  const [value, setValue] = useState('')
  const debounceValue = useDebounce(value, 250);

  const onChange = useCallback(e => {
    setValue(e.target.value)
  }, [value]);

  const onSubmit = useCallback(e => {
    e.preventDefault();

    if (!value || value === '') {
      return;
    }

    const words = value.split(' ');

    words.forEach(word => setFilters(prev => prev.concat({
      key: word,
      title: word,
      type: 'keyword',
      cb: (value) => value.filter(item => {

        const specialRegExp = /([\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"])/gi;
        word = word.replaceAll(specialRegExp, '');

        const regExp = new RegExp(word, 'gi');
        return (regExp.test(item.goodsName) || regExp.test(item.brandName))
      })
    })))

    setValue('');
  }, [value, setValue])

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
      { (debounceValue !== '' && value !== '') && <AutoComplete keyword={debounceValue} data={goodsList} setValue={setValue} setFilters={setFilters}></AutoComplete>}
    </SearchContainer>
  )
}

export default Search;