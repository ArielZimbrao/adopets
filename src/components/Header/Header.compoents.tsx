import React from 'react';
import './Header.css';
import logo from '../../asserts/logo2.png';
import { Button } from 'antd';

type HeaderProps = {
    exit: Function
};

const HeaderComponent = ({exit} : HeaderProps) => {
  return (
    <div>
      <header className="header">
            <a href="/" className="logo">
                <img src={logo} alt="logo"/>
                Adopets
            </a>
            <div className="header-right">
                <Button className="buttonExit" type="primary" onClick={() => exit()}>
                    Exit
                </Button>
            </div>
        </header>
    </div>
  );
}

export default HeaderComponent;
