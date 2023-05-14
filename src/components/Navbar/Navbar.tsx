import type { FunctionComponent } from 'react';
import { styled } from 'styled-components';
interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  return <NavbarContainer></NavbarContainer>;
};

const NavbarContainer = styled.div`
  width: 100%;
  height: 10vh;
  min-height: 10vh;
  max-height: 150px;
  background-color: var(--primary);
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default Navbar;
