import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 8px 16px;

  font-weight: 500;
  border-radius: 4px;
  border: 1px solid transparent;
  text-decoration: none;
  color: black;

  transition: border-color 250ms linear, color 250ms linear, background-color 250ms linear;

  &.active {
    border-color: rgb(209, 72, 17);
    color: rgb(209, 72, 17);
    background-color: rgba(241, 208, 202, 0.7);
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: rgb(209, 72, 17);
  }
`;
