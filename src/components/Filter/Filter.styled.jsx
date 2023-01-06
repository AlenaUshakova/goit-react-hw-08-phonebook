import styled from 'styled-components';

export const FilterWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const FilterName = styled.input`
  margin-bottom: 20px;
  padding: 8px;

  font-size: medium;
  text-align: left;
  color: inherit;
  background-color: rgba(241, 208, 202, 0.7);
  border: 1px solid rgba(241, 208, 202, 0.9);
  border-radius: 5px;
  cursor: pointer;

  transition: border-color 250ms linear, color 250ms linear, background-color 250ms linear;

  :hover,
  :focus {
    border-color: rgb(209, 72, 17);
    color: rgb(209, 72, 17);
    background-color: rgba(240, 213, 183, 0.7);
  }

  @media screen and (min-width: 480px) {
    width: 300px;
  }
  @media screen and (min-width: 768px) {
    width: 200px;
  }
  @media screen and (min-width: 1200px) {
    width: 400px;
  }
`;

export const FilterStyle = styled.label`
  font-size: medium;
  margin-bottom: 5px;
`;
