import styled from 'styled-components'

export const Container = styled.header`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  padding: 1rem;

  svg {
    cursor: pointer;
  }
`

export const Content = styled.div`
  width: 100%;
  padding-right: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  position: relative;

  div {
    display: flex;
    align-items: center;

    span {
      margin-left: 1rem;
      color: #fff;
    }
  }
`

export const Profile = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid #ccc;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
  }

  font-weight: bold;
  color: #1b1f38;
`
