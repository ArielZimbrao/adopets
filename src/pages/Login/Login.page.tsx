import React from 'react';
import './Login.css';
import logo from '../../asserts/logo.png';
import FadeComponent from '../../components/Fade/Fade.components';
import Button from 'antd/es/button';
import Input from  'antd/es/input';

type LoginProps = {
    load: boolean,
    enter: Function,
    changeValue: Function,
};

const LoginPage = ({load, enter, changeValue} : LoginProps) => {
  return (
    <div className="App">
      <FadeComponent load={load}/>  
      <div className="divHeader">
            <div style={{ height: '50%'}}>
                <img className="imgLogo" src={logo} alt="logo"></img>
            </div>
            <div className="Inputs">
                <Input
                    placeholder="email"
                    type="email"
                    onChange={(event) => changeValue("email", event.currentTarget.value)}
                />
            </div>
            <div className="Inputs">
                <Input
                    placeholder="password"
                    type="password"
                    onChange={(event) => changeValue("password", event.currentTarget.value)}
                    onKeyPress={(event) => {
                        if (event.keyCode === 13) {
                            enter();
                        }
                    } }
                />
            </div>
            <div style={{ paddingTop: '10px'}}>
                <Button className="buttonEnter" type="primary" onClick={() => enter()}>
                    Enter
                </Button>
            </div>
      </div>
    </div>
  );
}

export default LoginPage;
