import React from 'react';
import './Home.css';
import logo from '../../asserts/logo.png';
import Button from 'antd/es/button';
import Input from  'antd/es/input';

type HomeProps = {
    enter: Function,
    changeValue: Function,
};

const HomePage = ({enter, changeValue} : HomeProps) => {
  return (
    <div className="App">
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

export default HomePage;
