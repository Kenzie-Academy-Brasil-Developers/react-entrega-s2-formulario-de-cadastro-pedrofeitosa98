import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  background-color: var(--grey-4);
  border-bottom: 2px solid var(--grey-3);

  div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    row-gap: .875rem;
    width: 90%;
    max-width: 46.375rem;
    padding: .875rem 0;
  }
`