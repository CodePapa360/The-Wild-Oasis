import styled from "styled-components";

const StyledSideber = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1/ -1;
`;

function Sideber() {
  return (
    <StyledSideber>
      <p>Aside Ber</p>
    </StyledSideber>
  );
}

export default Sideber;
