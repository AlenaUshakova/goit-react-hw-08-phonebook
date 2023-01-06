import styled from 'styled-components';

export const LogOutBtn = styled.button`
  display: inline-flex;
  justify-content: center;

  padding: 8px 10px;
  
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  background-color: transparent;
  border: none;
  cursor: pointer;

  transition: color 250ms linear;

  :hover {
    color: rgb(209, 72, 17);
  }
`;

export const Usertext = styled.span`
  font-weight: 500;
  b {
    color: rgb(209, 72, 17);
  }
`;

export const UserConteiner = styled.div`
  display: flex;
  align-items: center;
`;
