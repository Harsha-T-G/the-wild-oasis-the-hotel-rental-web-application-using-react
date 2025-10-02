import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidbar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 2rem 1rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function SideBar() {
  return (
    <StyledSidbar>
      <Logo />
      <MainNav />
    </StyledSidbar>
  );
}

export default SideBar;
