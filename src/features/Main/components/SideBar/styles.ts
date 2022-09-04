import styled from 'styled-components'
// verify is sideBar is Open
interface ContainerProps {
  open: boolean
}
export const Container = styled.nav<ContainerProps>`
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  position: fixed;
  height: 100vh;
  top: 0;
  left: ${(props) => (props.open ? `0px` : `-350px`)};
  width: 350px;
  padding: 1rem;
  background: #c8c8c8;
  transition: left 1s ease-out;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    cursor: pointer;
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  h2 {
    font-size: 1.2rem;
    color: #fff;
  }

  div {
    width: 30px;
    height: 30px;
    background-color: #e44c4e;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 8px;
    img {
      width: 20px;
      height: 20px;
    }
  }
`
