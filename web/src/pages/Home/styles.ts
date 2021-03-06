import styled, { keyframes } from 'styled-components';

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px)
  }
  to {
    opacity: 1;
    transform: translateX(0)
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  height: 700px;
  background-color: #fff;
  border-radius: 6px;
  padding: 24px;

  animation: ${appearFromRight} 1s;

  div.content-title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 16px;
    h1 {
      font-family: Source Sans Pro;
      font-style: normal;
      font-weight: 600;
      font-size: 32px;
      line-height: 20px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #2d2f3e;
    }

    small {
      font-size: 16px;
      color: rgba(45, 47, 62, 0.75);
      font-family: Source Sans Pro;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 15px;
      text-align: justify;
      margin-top: 8px;
    }
  }
`;
