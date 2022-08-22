import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 9.2rem;
  background-color: var(--grey-4);
  border-bottom: 2px solid var(--grey-3);
  margin-bottom: 2.25rem;
  padding-top: 3.875rem;

  div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 48.75rem;
  }
`