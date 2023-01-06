import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: medium;
  padding: 50px 40px;
`;

export const FormInput = styled.input`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 20px;
  padding: 8px;

  font-size: medium;
  text-align: left;
  color: inherit;
  background-color: rgba(241, 208, 202, 0.7);
  border: 1px solid rgba(241, 208, 202, 0.9);
  border-radius: 5px;

  transition: border-color 250ms linear, color 250ms linear, background-color 250ms linear;

  :hover,
  :focus {
    cursor: pointer;
    border-color: rgb(209, 72, 17);
    color: rgb(209, 72, 17);
    background-color: rgba(240, 213, 183, 0.9);
  }
  :-webkit-autofill {
    transition: background-color 250s linear;
  }
  @media screen and (min-width: 480px) {
    width: 300px;
  }
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;

export const FormBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;

  margin-top: 16px;
  margin-bottom: 32px;
  margin-left: 8px;
  margin-right: 6px;
  padding: 8px 16px;

  font-size: medium;
  line-height: 20px;
  border: none;
  border-radius: 5px;
  color: inherit;
  background-color: rgba(241, 208, 202, 0.7);
  border: 1px solid rgba(241, 208, 202, 0.9);
  cursor: pointer;

  transition: border-color 250ms linear, color 250ms linear, background-color 250ms linear;

  :hover {
    border-color: rgb(209, 72, 17);
    color: rgb(209, 72, 17);
    background-color: rgba(240, 213, 183, 0.7);
  }
`;

export const Contactabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;
