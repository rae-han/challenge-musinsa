import React, { useCallback, useRef } from 'react';
import {OptionsContainer} from './styles'

function Options ({ filters, setFilters, isSearch, setIsSearch }) {
  const options = [
    { key: 'search', title: '검색', onClick: () => setIsSearch(prev => !prev) },
    { key: 'isSale', title: '세일상품', type: 'state', cb: (value) => value.filter(item => item.isSale) },
    { key: 'isExclusive', title: '단독상품', type: 'state', cb: (value) => value.filter(item => item.isExclusive) },
    { key: 'isSoldOut', title: '품절포함', type: 'state', cb: (value) => value.map(item => ({ ...item, readable: true })) },
  ]

  const filteredFiltersKey = filters.filter(item => item.type === 'state').map(item => item.key);
  const onClick = useCallback((option) => {
    const exist = filters.findIndex(item => (item.type === 'state' && item.key === option.key));

    if (exist !== -1) {
      setFilters(prev => prev.filter((_, index) => exist !== index))
      return;
    }

    setFilters(prev => prev.concat(option))
  }, [filters, setFilters])

  return (
    <OptionsContainer>
      {options.map((option, index) => (
        <button
          key={index}
          className={`option__button 
            ${filteredFiltersKey.includes(option.key) ? 'option__button--active' : ''}
            ${(option.key === 'search' && isSearch) ? 'option__button--searching' : ''}
          `}
          onClick={option.onClick || (() => onClick(option))}
        >{option.title}</button>
      ))}
    </OptionsContainer>
  )
}

export default Options;