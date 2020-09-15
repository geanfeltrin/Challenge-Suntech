import styled from 'styled-components';

export const WrapperContent = styled.div`
  display: flex;
  width: 100%;
  max-width: 1650px;
  margin: 0 auto;
  margin-top: 70px;
  padding: 16px;

  @media (max-width: 800px) {
    flex-direction: column;
    margin-top: 16px;
    align-items: center;
  }
`;
