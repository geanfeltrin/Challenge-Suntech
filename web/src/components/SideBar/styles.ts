import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  max-width: 250px;
  margin-right: 16px;
  background-color: #fff;
  padding: 16px;
  height: max-content;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #3670e3;
    cursor: pointer;
    transition: color 0.2s;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 15px;
    padding-left: 10px;
    border-left: 0.8px dashed #6c9dfe;
    &:hover {
      color: ${shade(0.2, '#3670e3')};
    }

    :active {
      color: #000000;
    }
    &:first-child {
      padding-bottom: 10px;
    }

    & + a {
      padding: 10px;
    }
  }
  a.selected {
    color: ${shade(0.2, '#3670e3')};
    border-left: 2px solid ${shade(0.2, '#3670e3')};
    cursor: pointer;
  }
`;
