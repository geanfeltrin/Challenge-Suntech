import styled, { css } from 'styled-components';
import { opacify } from 'polished';
import Tooltip from '../Tooltip';

interface ContentProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  label {
    display: block;
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    margin-right: 10px;
    color: #232425;
    margin-bottom: 8px;
  }

  span {
    display: block;
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    margin-right: 10px;
    color: #232425;
    margin-bottom: 8px;
  }
  & + div {
    margin-top: 16px;
  }
`;

export const ContentInput = styled.div<ContentProps>`
  border-radius: 4px;
  border: 2px solid #f1f5fd;
  padding: 16px;
  width: 100%;
  color: #232425;

  display: flex;
  align-items: center;

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #232425;
      border-color: #3670e3;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #232425;
    `}



  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #232425;
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;

    &:placeholder {
      font-family: Source Sans Pro;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 18px;
      color: ${opacify(1, '#232425')};
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
