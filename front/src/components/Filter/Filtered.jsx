import React, { useCallback, useRef } from 'react';
import { FilteredContainer } from '@components/Filter/styles';

function Filtered ({ filters, setFilters }) {
  // const { isSale, isExclusive, isSoldOut, keywords } = filters;

  // if (!isSale && !isExclusive && !isSoldOut && keywords.length === 0) {
  //   return null;
  // }

  if (!filters || filters?.length === 0) {
    return null;
  }

  const onClick = useCallback((index) => {
    const newFilters = filters.filter((_, idx) => index !== idx);

    setFilters(newFilters)
  }, [filters, setFilters])

  return (
    <FilteredContainer>
      <div className="filtered__list">
        {filters.map((item, index) => (
          <button
            className="filtered__button" key={index}
            onClick={() => onClick(index)}
          >
            {item.title}
          </button>)
        )}
      </div>
        <button className="filtered__refresh-button"
        onClick={() => setFilters([])}
      ></button>
    </FilteredContainer>
  )
}

export default Filtered;