import React from 'react'
import * as Fi from 'react-icons/fi'
import logo from '../../../../assets/img/logo.svg'
import { useDashboardContext } from '../../context/index'
import * as S from './styles'

const Header = () => {
  const { user } = useDashboardContext()
  const defaultImage = 'https://iela.ufsc.br/sites/default/files/default_images/default-user.png'
  return (
    <S.Container>
      <S.Content>
        <Fi.FiMenu size={20} color="#fff" />
        <div>
          {user.photoUrl ? (
            <S.Profile>
              <img src={user.photoUrl} alt="Image do usuário" />
            </S.Profile>
          ) : (
            <S.Profile> {user.displayName.charAt(0)}</S.Profile>
          )}
          <span>{user.displayName} </span>
        </div>
      </S.Content>
    </S.Container>
  )
}

export default Header
