import styled, { keyframes } from 'styled-components'

export const SingInContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #1b1f38;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const ShowLeftContent = keyframes`
0%{
    transform: translateY(-100px) ;
    opacity: 0;
}

25%{
    opacity: 0;


}

50%{
    opacity: 0;
}

75%{
transform: translateY(-100px) ;
opacity: 0;
transition: all 2s ease-out;
}

100%{
transform: translateY(0) ;
opacity: 1;
transition: all 2s ease-out;
}
`

const ShowUpAnimation = keyframes`
 0%{
    opacity: 0;
    transform: translateX(-100px) ;
    display:none;
 }

 25%{
    opacity: 0;
    display:none;
    transform: translateX(-100px) ;

 }

 50%{
    opacity: 0;
    display:none;
    transform: translateX(-100px) ;
}

 75%{
    transform: translateX(-100px) ;
    opacity: 0.2;
    transition: all 2s ease-out;
 }

 100%{
    transform: translateX(0) ;
    opacity: 1;
    transition: all 2s ease-out;
 }
`

export const AuthenticationArea = styled.div`
  width: 100%;
  max-width: 31.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-left: 0.9rem;
    font-family: 'Lato';
    color: #f2f2f2;
  }
  animation: ${ShowLeftContent} 4s ease-out;
`

export const Box = styled.div`
  width: 3.125rem;
  height: 3.125rem;
  background-color: #e44c4e;
  margin: 1rem 0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
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
    height: 2.188rem;

    div {
      border-right: 1px solid #c8c8c8;
      padding: 0 0.5rem;
      height: 100%;
    }
    span {
      text-align: center;
      flex: 1;
    }
  }
  animation: ${ShowUpAnimation} 4s ease-out;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: center;
`
