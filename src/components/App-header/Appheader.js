import React from 'react';
import headerStyles from './AppHeader.module.css'
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import '../../index.css'

const AppHeader = () => {
  return (
    <header className={ headerStyles.header } >
      <div className="container" >
        <nav className={ headerStyles.content }>
          <nav className={headerStyles.headerLeft} >
            <a className={`${ headerStyles.button } mr-5`} href="#href">
              <BurgerIcon type="primary" />
              <span className={ headerStyles.textConst }>Конструктор</span>
            </a>
            <a className={ headerStyles.button } href="#href">
              <ListIcon type="secondary" />
              <span className={ headerStyles.textTape }>Лента заказов</span>
            </a>
          </nav>
          <a href="#href"><Logo /></a>
          <a className={ headerStyles.button } href="#href">
            <ProfileIcon type="secondary" />
            <span className={ headerStyles.textTape }>Личный кабинет</span>
          </a>
        </nav>
      </div>
    </header>
  )
}

export default AppHeader;