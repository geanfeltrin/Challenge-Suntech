import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background-color: #3670e3;
  height: 56px;
  border-radius: 4px;
  border: 0;
  padding: 0 16px;
  color: #fff;
  width: 100%;
  margin-top: 16px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  transition: background-color 0.2s;

  :disabled {
    background-color: #efefef;
    color: #232425;
  }
  &:hover:disabled {
    background-color: #efefef;
    color: #232425;
  }

  &:hover {
    background: ${shade(0.2, '#3670e3')};
  }
`;
