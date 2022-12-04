import React, { useCallback, useState } from 'react';
import { SearchContainer } from '@components/Filter/styles';
import AutoComplete from '@components/Filter/AutoComplete';
import useDebounce from '../../hooks/useDebounce';

function Search ({ setFilters, goodsList }) {
  const [value, setValue] = useState('')
  const debounceValue = useDebounce(value);

  const onChange = useCallback(e => {
    setValue(e.target.value)
  }, [value]);

  const onSubmit = useCallback(e => {
    e.preventDefault();

    if (!value) {
      return;
    }

    const words = value.split(' ');

    words.forEach(word => setFilters(prev => prev.concat({
      key: word,
      title: word,
      type: 'keyword',
      cb: (value) => value.filter(item => {
        const regExp = new RegExp(word, 'gi');
        console.log('####')
        console.log(regExp);

        const specialRegExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
        console.log(word.replaceAll(specialRegExp, ''));
        console.log(word);

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
      { debounceValue !== '' && <AutoComplete keyword={debounceValue} data={goodsList}></AutoComplete>}
    </SearchContainer>
  )
}

export default Search;