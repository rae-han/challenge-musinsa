import React from 'react';
import styled from '@emotion/styled'

import Header from '../components/Common/Header'

const DefaultLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  background-color: var(--color-white);
  
  .view {
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-grow: 1;
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