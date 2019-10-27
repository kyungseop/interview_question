import styled, { css } from 'styled-components';
import { colors } from '@atlaskit/theme';
import { Link } from "./components/WrappedLink";

// Layout
// ==============================

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  flex-direction: column;
  display: flex;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex: 0 1 100%;
  flex-direction: column;
`;

// Navigation
// ==============================

export const Nav = styled.nav`
  align-items: center;
  box-shadow: 0 1px 0 ${colors.N30A};
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 4px;
  top: 0;
  width: 100%;
  z-index: 4;
`;

export const NavSection = styled.div`
  align-items: center;
  display: flex;
  @media (max-width: 786px) {
    flex-wrap: wrap;
    width: 100%;
  }
`;

const navButtonStyles = css`
  align-items: center;
  background-color: ${(p: { isSelected?: boolean }) =>
    p.isSelected ? colors.primary : 'transparent'};
  border-radius: 50%;
  border: 1px solid;
  border-color: ${p => (p.isSelected ? colors.primary : colors.N80)};
  box-sizing: border-box;
  color: ${p => (p.isSelected ? colors.N0 : colors.N80)};
  display: flex;
  font-size: inherit;
  height: 32px;
  justify-content: center;
  padding: 0;
  transition: all 150ms;
  width: 32px;

  &:not([disabled]):hover,
  &:not([disabled]):focus {
    border-color: ${p => (p.isSelected ? colors.primary : colors.B200)};
    color: ${p => (p.isSelected ? colors.N0 : colors.B200)};
    cursor: pointer;
    outline: 0;
    text-decoration: none;
  }
`;

export const NavButton = styled.button`
  ${navButtonStyles};
`;
export const RightNavButtonContainer = styled.div`
  padding: 4px;
`;

export const NavLink = (styled(Link)`
  ${navButtonStyles};
` as any) as typeof Link;


export const Control = styled.div`
  display: flex;
  margin-right: 2px;
  @media (max-width: 786px) {
    padding: 4px;
    width: 100%;
  }
`;