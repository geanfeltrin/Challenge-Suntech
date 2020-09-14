import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  max-width: 250px;
  height: 50px;
  border-left: 1px solid #6c9dfe;
  padding-left: 10px;
  margin-right: 16px;
  margin-top: 25px;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #3670e3;
    cursor: pointer;
    transition: color 0.2s;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 15px;

    &:hover {
      color: ${shade(0.2, '#3670e3')};
    }

    &:active {
      color: #000000;
    }

    .selected {
      color: #000000;
      cursor: pointer;
    }

    & + a {
      margin-top: 16px;
    }
  }
`;
