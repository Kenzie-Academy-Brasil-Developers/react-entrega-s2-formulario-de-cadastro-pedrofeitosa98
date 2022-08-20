import styled from "styled-components";

export const FormHeader = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 23rem;
  margin-bottom: 3rem;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2.625rem 1.375rem;
  width: 23rem;
  height: fit-content;
  background-color: var(--grey-3);
  border-radius: 4px;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    gap: 1.375rem;
`

export const Error = styled.span`
  font-size: 0.625rem;
  font-weight: 400;
  color: var(--negative);
`