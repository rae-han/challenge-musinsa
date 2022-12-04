import React, { useState } from 'react';
import {FilterContainer} from './styles'
import Options from '@components/Filter/Options';
import Filtered from '@components/Filter/Filtered';
import Search from '@components/Filter/Search';

function Filter ({filters, setFilters}) {
  const [isSearch, setIsSearch] = useState(false)

  return (
    <>
      <FilterContainer>
        <Options filters={filters} setFilters={setFilters} isSearch={isSearch} setIsSearch={setIsSearch}></Options>
        <Filtered filters={filters} setFilters={setFilters}></Filtered>
        {isSearch && <Search setFilters={setFilters}></Search>}
      </FilterContainer>
    </>
  )
}

export default Filter;