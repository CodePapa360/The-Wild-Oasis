import styled from "styled-components";

import Logo from "./Logo";
import MainNav from "./MainNav";
import Uploader from "../data/Uploader";
import SocialLinks from "./SocialLinks";
import { useState } from "react";
import { HiBars3BottomLeft } from "react-icons/hi2";

const StyledSideber = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1/ -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media only screen and (max-width: 990px) {
    position: fixed;
    top: 0;
    left: calc(-18rem - 4.5rem);
    height: 100dvh;
    z-index: 100;
  }

  &.open {
    left: 0;
  }
`;

const ToggleButton = styled.button`
  position: absolute;
  right: -5rem;
  top: 1.7rem;
  padding: 0.5rem 1rem;
  background-color: var(--color-blue-100);
  border: none;
  border-radius: 5px;

  @media only screen and (min-width: 990px) {
    display: none;
  }
`;

function Sideber() {
  const [open, setOpen] = useState(false);

  function handleToggle() {
    setOpen((open) => !open);
  }

  return (
    <StyledSideber className={open ? "open" : ""}>
      <ToggleButton onClick={handleToggle}>
        <HiBars3BottomLeft />
      </ToggleButton>
      <Logo />
      <MainNav />

      {/* <Uploader /> */}
      <SocialLinks />
    </StyledSideber>
  );
}

export default Sideber;
