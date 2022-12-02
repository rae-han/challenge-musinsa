import React, { useState } from 'react';
import {FilterContainer} from './styles'
import Options from '@components/Filter/Options';
import Selected from '@components/Filter/Selected';
import Search from '@components/Filter/Search';

function Filter ({ref}) {
  const [isSearch, setIsSearch] = useState(false)

  return (
    <>
      <FilterContainer>
        <Options setIsSearch={setIsSearch}></Options>
        <Selected></Selected>
        {isSearch && <Search></Search>}
      </FilterContainer>
      <div></div>
    </>
  )
}

export default Filter;