import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

const Button = styled.button`
  background-color: var(--color-brand-600);
  font-size: 2rem;
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  margin: 3rem;
  padding: 1rem;

  &:hover {
    background-color: var(--color-brand-800);
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Button onClick={() => alert("You clicked")}>Click</Button>
    </>
  );
}

export default App;
