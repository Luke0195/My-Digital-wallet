import styled from 'styled-components'

export const SingInContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #1b1f38;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const AuthenticationArea = styled.div`
  width: 100%;
  max-width: 31.25rem;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    margin-left: 0.5rem;
    font-family: 'Lato';
    color: #f2f2f2;
  }
`

export const Box = styled.div`
  width: 3.125rem;
  height: 3.125rem;
  background-color: #e44c4e;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 1.563rem;
    height: 1.563rem;
  }
`

export const GooglButton = styled.div`
  width: 100%;
  max-width: 31.25rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 100%;

    div {
      border-right: 1px solid #c8c8c8;
      padding: 0 0.5rem;
    }
    span {
      text-align: center;
      flex: 1;
    }
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: center;
`
