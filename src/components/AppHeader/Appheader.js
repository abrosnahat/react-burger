import React from 'react';
import headerStyles from './AppHeader.module.css'
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

class AppHeader extends React.Component {
  render() {
    return (
      <header className={ headerStyles.header } >
        <div className={ headerStyles.container } >
          <div className={ headerStyles.content }>
            <div className={headerStyles.headerLeft} >
              <a className={`${ headerStyles.button } mr-5`} href="#">
                <BurgerIcon type="primary" />
                <span className={ headerStyles.textConst }>Конструктор</span>
              </a>
              <a className={ headerStyles.button } href="#">
                <ListIcon type="secondary" />
                <span className={ headerStyles.textTape }>Лента заказов</span>
              </a>
            </div>
            <Logo />
            <a className={ headerStyles.button } href="#">
              <ProfileIcon type="secondary" />
              <span className={ headerStyles.textTape }>Личный кабинет</span>
            </a>
          </div>
        </div>
      </header>
    )
  }
}

export default AppHeader;