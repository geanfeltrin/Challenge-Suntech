import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.header`
  display: flex;
  background-color: #fff;
  color: #235fd1;
  width: 100%;
  height: 60px;
  padding: 0 30px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #235fd1;
    cursor: pointer;
    transition: color 0.2s;
    &:hover {
      color: ${shade(0.2, '#235fd1')};
    }
  }
`;
