import React from 'react';
import styled from '@emotion/styled'

import Header from '../components/Common/Header'

const DefaultLayoutContainer = styled.div`
  background-color: var(--color-white);
  
  .view {
    background-color: var(--color-f1f1f1);
  }
`;

function DefaultLayout ({ children }) {
  return (
    <DefaultLayoutContainer>
      <Header></Header>
      <div className="view">{children}</div>
    </DefaultLayoutContainer>
  )
}

export default DefaultLayout;