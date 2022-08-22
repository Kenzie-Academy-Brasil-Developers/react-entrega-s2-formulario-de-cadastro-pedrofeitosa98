import styled from 'styled-components';

export const CardContainer = styled.li`
  width: 100%;
  height: 3rem;
  padding: 13px 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--grey-4);
  border-radius: 4px;
  transition: 0.3s;

  :hover {
    background-color: var(--grey-2);
  }

  :hover .headline {
    color: var(--grey-0)
  }
`

export const LeftContainer = styled.div`
  width: 60%;
`

export const RightContainer = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items:center;
  gap: 22px;
`