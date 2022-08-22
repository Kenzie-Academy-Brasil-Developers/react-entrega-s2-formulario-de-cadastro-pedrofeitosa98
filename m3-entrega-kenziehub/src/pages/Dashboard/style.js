import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  width: 90%;
  max-width: 48.75rem;
  margin: 0 auto;

  .listHeader {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const TechList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  min-height: 3rem;
  padding: 1.5rem;
  background-color: var(--grey-3);
  border-radius: 4px;
  margin-bottom: 2rem;
  transition: 0.3s
`