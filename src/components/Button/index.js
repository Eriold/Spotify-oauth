import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  width: ${(props) => props.width}%;
  color: white;
  background-color: #ff1c6b;
  border-color: #ff1c6b;
  font-weight: 400;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  margin-top: 1rem;
  margin-bottom: 1rem;

  &:hover {
    background-color: #ff347b;
    border-color: #ff347b;
  }

  &:active {
    background-color: #ff4b8a;
    border-color: #ff4b8a;
  }
  &:focus {
    outline: none;
  }
`;
