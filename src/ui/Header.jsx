import styled from "styled-components";
import { HiMiniSquaresPlus } from "react-icons/hi2";
import Logout from "../features/authentication/Logout";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
`;

const HamburgerButton = styled.button`
  background-color: transparent;
  padding: 0.5rem 1rem;
  border: none;
`;

function Header() {
  return (
    <StyledHeader>
      {/* <HamburgerButton>
        <HiMiniSquaresPlus />
      </HamburgerButton> */}

      <Logout />
    </StyledHeader>
  );
}

export default Header;
