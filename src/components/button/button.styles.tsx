import styled from "styled-components";
import {
  primaryColor,
  primaryShade,
  primaryTint,
  secondaryTint,
  secondaryColor,
  secondaryShade,
} from "../../general.styles";
import { SpinnerContainer } from "../spinner/spinner.styles";
import { NavLink } from "react-router-dom";

export const BaseButton = styled.button`
  /* min-width: 2.5rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${primaryShade};
  background-color: ${secondaryTint}77;
  min-width: 2.5rem;
  line-height: 1.4;
  letter-spacing: 0.05rem;
  padding: 1.5rem 3rem;
  font-size: 1.4rem;
  font-weight: 600;
  border: none;
  border-radius: 0.3rem 1.2rem;
  /* outline: ${primaryShade} solid 0.15rem; */
  /* text-transform: uppercase; */
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    background-color: ${secondaryTint};
    color: ${primaryShade};
    /* outline: ${primaryShade} solid 0.15rem; */
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #2a96a286;
  color: ${primaryShade};
  transition: all 0.3s;

  &:hover {
    background-color: #2a96a27e;
    color: white;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;
  transition: all 0.4s;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`;

export const NavLinkButton = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${primaryShade}ee;
  background-color: ${secondaryTint}55;
  min-width: 9rem;
  height: 4rem;
  line-height: 1.4;
  letter-spacing: 0.05rem;
  padding: 2.5rem 2.5rem;
  margin-bottom: 2.5rem;
  font-size: 1.8rem;
  font-weight: 600;
  border: none;
  border-radius: 0.3rem 1.2rem;
  outline: ${primaryShade}22 solid 0.2rem;
  text-decoration-line: none;
  cursor: pointer;
  transition: all 0.4s;
  /* text-transform: uppercase; */

  &:hover {
    background-color: ${secondaryTint}cc;
    color: ${primaryShade};
    /* outline: ${primaryShade} solid 0.15rem; */
  }
`;
