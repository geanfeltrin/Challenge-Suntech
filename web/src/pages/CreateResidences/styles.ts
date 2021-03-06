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
  max-width: 650px;
  background-color: #fff;
  border-radius: 6px;
  padding: 24px;

  animation: ${appearFromRight} 1s;

  div.content-title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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

  form {
    flex: 1;
    display: flex;
    width: 100%;
    flex-direction: column;
    max-width: 600px;
    margin-top: 30px;

    .content-cep {
      display: flex;
      align-items: flex-start;
      width: 100%;
      margin-bottom: 16px;

      > div {
        width: 100%;
      }
      button {
        width: 110px;
        margin-top: 24px;
        margin-left: 10px;
      }
    }
  }
`;
