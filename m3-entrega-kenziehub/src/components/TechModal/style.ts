import styled from 'styled-components';


export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.65);
`

export const ModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 23rem;
  padding: 0.75rem 1.25rem;
  background-color: var(--grey-2);
  border-radius: 4px 4px 0 0;
`

export const ModalFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 1.375rem;
  width: 23rem;
  height: fit-content;
  background-color: var(--grey-3);
  border-radius: 0px 0px 4px 4px;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
`
