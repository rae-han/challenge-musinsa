import React from 'react';
import styled from '@emotion/styled';
import spinner from '@images/common_loading_spinner.svg'

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 90px;
  margin-top: 20px;
`;

const LoadingSpinner = styled.img`
  width: 16px;
  height: 16px;
  animation: spin 500ms infinite linear;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

function Loading () {
  return (
    <LoadingContainer>
      <LoadingSpinner src={spinner}></LoadingSpinner>
    </LoadingContainer>
  )
}

export default Loading;