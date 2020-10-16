import * as S from './styles'

import NotificationsIcon from '@app/assets/icons/notifications.svg'
import ChatIcon from '@app/assets/icons/chat.svg'
import SettingsIcon from '@app/assets/icons/settings.svg'

const Header = () => {
  return(
    <S.Header>
      <div>
        <S.Title>SOCIALDEV</S.Title>
      </div>
      <div>
        <S.ProfileContainer>
          <span>Arthur Reis</span>
          <img src="https://github.com/Arthur-Rs.png" alt="Foto de perfil" />
        </S.ProfileContainer>
        <S.HeaderNav>
          <NotificationsIcon />
          <ChatIcon />
          <SettingsIcon />
        </S.HeaderNav>
      </div>
    </S.Header>
  )
}

export default Header